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
export interface ReplacerDefine {
  query: string;
  replace: string;
  /**
   * 検索文字列。 \
   * 省略した場合はqueryでマッチした要素全てに対して置換する。
   */
  pattern?: string;
  patternType?: PatternType;
}

export type PatternType = "plain" | "regexp";

export const LANG_LOOT = "/lang/ja/";

/**
 * lang/ 以下のjsonからデータを読み込んで翻訳する
 * @param filename ファイル名
 */
export async function locarizeByJSON(filename: string): Promise<void> {
  const locarizeData: ReplacerDefine[] = await readReplacerJSON(
    LANG_LOOT + filename,
  );
  for (const v of locarizeData) {
    locarize(v);
  }
}

/**
 * 与えられたデータを元にDOM上のテキストを置換します
 */
export function locarize(data: ReplacerDefine) {
  const { query, replace, pattern, patternType } = data;
  if (query == "") return;
  const rePattern =
    (pattern === undefined || patternType !== "regexp"
      ? undefined
      : new RegExp(pattern));
  const doms = document.querySelectorAll<HTMLElement>(query);

  doms.forEach((dom) => {
    const textNodes = getTextNode(dom);
    for (const textNode of textNodes) {
      const text = textNode.textContent;
      if (text === null) continue;
      if (pattern === undefined) {
        textNode.textContent = replace;
        break;
      } else if (patternType === "regexp" && rePattern?.test(text)) {
        textNode.textContent = text.replace(
          rePattern,
          replace,
        );
        break;
      } else if (
        (patternType === "plain" || patternType === undefined) &&
        text.includes(pattern)
      ) {
        textNode.textContent = text.replace(
          pattern,
          replace,
        );
        break;
      }
    }
  });
}

/**
 * 置換する文字列が入ったJSONファイルを読み込みます
 * @param filename ファイル名
 */
async function readReplacerJSON(filename: string): Promise<ReplacerDefine[]> {
  const json = await readJSON(filename);
  if (json === undefined) return [];
  const data: ReplacerDefine[] = [];
  for (const j of json) {
    data.push(
      {
        query: j.query,
        replace: j.replace,
        pattern: (
          j.pattern === null ? undefined : j.pattern
        ),
        patternType: (
          j.patternType === null ? undefined : j.patternType
        ),
      },
    );
  }
  return data;
}
