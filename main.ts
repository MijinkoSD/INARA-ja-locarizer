/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

import { locarizeByJSON } from "./src/locarize.ts";
import { searchLangfileByURI } from "./src/langconfig.ts";

async function main() {
  const files = await searchLangfileByURI(location.pathname); //ドメインより下で検索をかける
  for (const f of files) {
    await locarizeByJSON(f);
  }
}

main();
