import { OpenAI } from "langchain/llms/openai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { PineconeClient } from "@pinecone-database/pinecone";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import * as dotenv from "dotenv";

dotenv.config();

const model = new OpenAI({
  temperature: 0,
  modelName: "gpt-3.5-turbo",
});

// 创建向量数据库
// 这里可以放到初始化的部分做
const pinecone = new PineconeClient();
await pinecone.init({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
});

const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX);
const vectorStore = await PineconeStore.fromExistingIndex(
  new OpenAIEmbeddings(),
  {
    pineconeIndex: pineconeIndex,
    textKey: "text",
    namespace: "vue3-document",
  }
);

const CONDENSE_PROMPT = ` 给定以下对话记录和一个后续问题，将后续问题重述为一个独立的问题。

对话记录：{chat_history}
后续问题：{question}
独立问题：
`;

const QA_PROMPT = `
你是一个有用的 AI 助手。请使用以下上下文信息回答最后的问题。
如果你不知道答案，只需说你不知道。不要试图编造答案。
如果问题与上下文无关，请礼貌地回答你只能回答相关的问题。


{context}

问题：{question}
回答（以 markdown 形式）:

`;

// const CONDENSE_PROMPT = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.

// Chat History:
// {chat_history}
// Follow Up Input: {question}
// Standalone question:`;

// const QA_PROMPT = `You are a helpful AI assistant. Use the following pieces of context to answer the question at the end.
// If you don't know the answer, just say you don't know. DO NOT try to make up an answer.
// If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.

// {context}

// Question: {question}
// Helpful answer in markdown:`;

const chain = ConversationalRetrievalQAChain.fromLLM(
  model,
  vectorStore.asRetriever(),
  {
    qaTemplate: QA_PROMPT,
    questionGeneratorTemplate: CONDENSE_PROMPT,
    returnSourceDocuments: true,
  }
);

export async function chat(ctx) {
  const { message, history } = ctx.request.body;

  const response = await chain.call({
    question: message,
    chat_history: history || [],
  });

  return response;
}
