import { argv } from "process";

// const dir = "src/assembly/i18n";

const dir = argv[2];
const lang = argv[3];

declare var require: any;
const fs = require("fs");
// const UglifyJS = require("uglify-js");

const content = fs.readFileSync(`${dir}/${lang}.json`, "utf8");
// const new_content = UglifyJS.minify(
//   {
//     a: `a=${content}`,
//   },
//   { output: { quote_keys: true } }
// ).code?.substr(2);

const new_dir = dir.replace("json", "ts");

fs.writeFile(
  `${new_dir}/${lang}.ts`,
  `class I18n ${content
    .replace(
      /"(.*)": "(.*)"/g,
      (_match: string, p1: string, p2: string) =>
        `${p1
          .toLocaleUpperCase()
          .replace(/\ /g, "_")
          .replace(/[^\w ]/g, "")}: string = "${p2}"`
    )
    .replace(/\"\,/g, '";')};
export const i18n = new I18n();
    `.replace(/};/g, "}"),
  err_callback
);

fs.writeFile(
  `${new_dir}/../interface.ts`,
  `export interface language_type ${content
    .replace(
      /"(.*)": "(.*)"/g,
      (_match: string, p1: string) =>
        `${p1
          .toLocaleUpperCase()
          .replace(/\ /g, "_")
          .replace(/[^\w ]/g, "")}: string`
    )
    .replace(/"(.*)": /g, '"$1": ')};`,
  err_callback
);

function err_callback(err: any) {
  if (err && err.code !== "ENOENT") throw err;
}
