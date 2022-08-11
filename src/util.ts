/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

// 汎用的に使える関数が入ったファイル

import browser from "https://esm.sh/webextension-polyfill@0.9.0";

/**
 * 直下の子要素の中からテキストの要素だけを返します
 */
export function getTextNode(element: HTMLElement): ChildNode | undefined {
  const nodes = Array.from(element.childNodes);
  for (const node of nodes) {
    if (node.nodeName == "#text") {
      return node;
    }
  }
}

/**
 * 拡張機能に同梱したJSONを読み込みます
 * 読み込むファイルは事前にmanifest.jsonの"web_accessible_resources"に記載しておく必要があります
 * @param filename ファイル名
 */
// deno-lint-ignore no-explicit-any
export function readJSON(filename: string): Promise<any> {
  const url: string = browser.runtime.getURL(filename);
  const data = fetch(url)
    .then((r) => r.json())
    // .then(data => console.log(data))
    .catch(() => console.error(`[${filename}]の読み込みに失敗しました。`));
  return data;
}
