# Getting Started

First, import the class from table.svelte:

```typescript
import App from "./table.svelte";
```

Set up all required data and columns. Right click menu is optional.

```typescript
data.value = [
  {
    fileName: "2018052111551112878.pdf",
    rawPath: "2018052111551112878.pdf",
    isFolder: false,
    lastModified: BigInt(1649225297000),
    size: "6.9MB",
    tags: ["aaa"],
  },
  {
    fileName: "Data_Fabric.pdf",
    rawPath: "Data_Fabric.pdf",
    isFolder: false,
    lastModified: BigInt(1648811451000),
    size: "1.9MB",
    tags: ["tag"],
  },
  {
    fileName: "Dockerfile",
    rawPath: "Dockerfile",
    isFolder: false,
    lastModified: BigInt(1648809923000),
    size: "669B",
    tags: [],
  },
  {
    fileName: "PI Data Archive Basics.pdf",
    rawPath: "PI Data Archive Basics.pdf",
    isFolder: false,
    lastModified: BigInt(1648811430000),
    size: "898.6KB",
    tags: ["IoT", "industry"],
  },
];

const cols = [
  { col: "NAME", key: "fileName", value: (value: string): string => value },
  {
    col: "LAST_MODIFIED",
    key: "lastModified",
    value: (value: string): string =>
      new Intl.DateTimeFormat("zh-TW", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      }).format(new Date(Number(value))),
  },
] as col_type[];

const right_click_menu = [
  {
    caption: "COPY",
    onclick: () => {},
  },
  {
    caption: "CUT",
    onclick: () => {},
  },
] as right_click_menu_type[];
```

And finally, initialize the app:

```typescript
const target = document.getElementById("view");

const app = target
  ? new App({
      target,
      props: {
        data,
        i18n: await select_language("en-US"),

        cols,
        right_click_menu,
        selectable: true,
      },
    })
  : null;
```

Additionally, you might need to set up some event listeners:

```typescript
app?.$on("checkbox_change" as never, () => {
  console.log(checkbox_arr.value);
});

app?.$on("sort" as never, (event: CustomEvent) => {
  sort(event.detail.index);
});
```
