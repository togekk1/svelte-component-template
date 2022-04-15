class Data {
  fileName: string;
  rawPath: string;
  isFolder: bool;
  lastModified: i64;
  size: string;
  tags: StaticArray<string>;
}

export let data: StaticArray<Data> | null;
let col_index_old: i32;
let decending: boolean = false;

export function sort(col_index: i32): void {
  let data_local = data;
  if (data_local) {
    switch (col_index) {
      case 0:
        data_local = data_local.sort((a: Data, b: Data) => a.fileName.localeCompare(b.fileName));
        break;

      case 1:
        data_local = data_local.sort((a: Data, b: Data) => i32(a.lastModified - b.lastModified));
        break;
    }

    decending = col_index_old === col_index && !decending;
    data = decending ? data_local.reverse() : data_local;
    col_index_old = col_index;
  }
}
