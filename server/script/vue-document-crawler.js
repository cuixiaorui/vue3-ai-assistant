import axios from "axios";
import cheerio from "cheerio";
import TurndownService from "turndown";
import fs from "fs";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
import path from 'path';

const vueBaseURl = "https://vuejs.org";

async function fetchAllDocsLink() {
  const { data: vueHtml } = await axios(
    vueBaseURl + "/guide/introduction.html"
  );

  const $ = cheerio.load(vueHtml);

  const links = [];

  $(".group a").each(function () {
    const url = $(this).attr("href");
    links.push(vueBaseURl + url);
  });

  return links;
}

async function fetchDocsToMarkdown(link) {
  const { data: introductionHTML } = await axios(link);
  const $ = cheerio.load(introductionHTML);

  var turndownService = new TurndownService();
  return turndownService.turndown($("main").html());
}

const docsLinks = await fetchAllDocsLink();

let result = "";
for (const link of docsLinks) {
  const markdown = await fetchDocsToMarkdown(link);
  result += markdown + "\r\n";
}

fs.writeFileSync(path.resolve(__dirname, "../source/en-vue3-document.md"), result)
