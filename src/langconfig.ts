// lang/以下のファイルを読み書きするための関数が入ったファイル
// 多言語対応とかはまだやらない

import { readJSON } from "./util.ts";

const PAGE_CONFIG_PATH = "/lang/config.json";

/**
 * @param patterns langfileを適用するURIの正規表現
 * @param files langfileの配列
 */
export interface langConfig {
  patterns: string[];
  files: string[];
}

/**
 * configからURIに対応するファイル名を返す
 * @param uri 検索するURI
 */
export async function searchLangfileByURI(uri: string): Promise<string[]> {
  const config = await readPageConfig();
  const files: string[] = [];
  for (const c of config) {
    for (const m of c.patterns) {
      const result = uri.match(new RegExp(m));
      if (result === null) continue;
      for (const f of c.files) {
        files.push(f);
      }
      break;
    }
  }
  return Array.from(new Set(files));
}

/**
 * configを読み込んでデータを返す関数
 * @param [filename] configのファイル名
 */
async function readPageConfig(
  filename: string = PAGE_CONFIG_PATH,
): Promise<langConfig[]> {
  const json = await readJSON(filename);
  const config: langConfig[] = [];
  for (const data of json) {
    config.push({
      patterns: data.patterns,
      files: data.files,
    });
  }
  return config;
}
