# vue3-ai-assistant

构建一个 Vue3 的 AI 助手
用户可以通过聊天的形式来学习 Vue3 的文档

## 安装

1. 安装依赖

```
// 安装 web 依赖
pnpm i 

// 安装 server 依赖
cd server && pnpm i
```

2. 创建 .env 文件提供所需要的环境变量

在 server 文件夹下创建 .env 文件
配置以下几个环境变量

```
// openai 的 api key
OPENAI_API_KEY=""
// pinecone 向量数据库的 api key
PINECONE_API_KEY=""
PINECONE_ENVIRONMENT=""
PINECONE_INDEX=""
```

## 使用
1. 先开启 web 服务
```
pnpm dev
```

2. 在开启 server 服务
```
cd server && pnpm dev
```
