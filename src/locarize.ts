/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

// 翻訳に直接使う関数が入ったファイル

import { getTextNode, readJSON } from "./util.ts";

/**
 * @param query 適応するDOMのクエリ文字列
 * @param replace 置き換える文字列
 * @param [pattern] 置換したい文字の正規表現パターン（省略した場合は全ての文字列を置換）
 */
export interface replacerDefine {
  query: string;
  replace: string;
  pattern?: string;
}

export const LANG_LOOT = "/lang/ja/";

/**
 * lang/ 以下のjsonからデータを読み込んで翻訳する
 * @param filename ファイル名
 */
export async function locarizeByJSON(filename: string): Promise<void> {
  const locarizeData: replacerDefine[] = await readReplacerJSON(
    LANG_LOOT + filename,
  );
  for (const v of locarizeData) {
    locarize(v);
  }
}

/**
 * DOM上のテキストを置換する
 */
export function locarize({ query, replace, pattern }: replacerDefine) {
  const doms = document.querySelectorAll<HTMLElement>(query);

  doms.forEach((d) => {
    const text = getTextNode(d);
    if (text === undefined) return;
    if (pattern === undefined) {
      text.textContent = replace;
    } else if (text.textContent !== null) {
      text.textContent = text.textContent.replace(
        new RegExp(pattern),
        replace,
      );
    }
  });
}

/**
 * 置換する文字列が入ったJSONファイルを読み込みます
 * @param filename ファイル名
 */
async function readReplacerJSON(filename: string): Promise<replacerDefine[]> {
  const json = await readJSON(filename);
  const data: replacerDefine[] = [];
  for (const j of json) {
    data.push(
      {
        query: j.query,
        replace: j.replace,
        pattern: (
          j.pattern === null ? undefined : j.pattern
        ),
      },
    );
  }
  return data;
}
