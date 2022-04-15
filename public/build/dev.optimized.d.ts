/** src/assembly/dev/dev/data */
export declare const data: {
  /** @type `~lib/staticarray/StaticArray<src/assembly/dev/dev/Data> | null` */
  get value(): Array<__Record3<never>> | null;
  set value(value: Array<__Record3<never>> | null);
};
/**
 * src/assembly/dev/dev/sort
 * @param col_index `i32`
 */
export declare function sort(col_index: number): void;
/** src/assembly/dev/dev/Data */
declare interface __Record3<TOmittable> {
  /** @type `~lib/string/String` */
  fileName: string;
  /** @type `~lib/string/String` */
  rawPath: string;
  /** @type `bool` */
  isFolder: boolean | TOmittable;
  /** @type `i64` */
  lastModified: bigint | TOmittable;
  /** @type `~lib/string/String` */
  size: string;
  /** @type `~lib/staticarray/StaticArray<~lib/string/String>` */
  tags: Array<string>;
}
