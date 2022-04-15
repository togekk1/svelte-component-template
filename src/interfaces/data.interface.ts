export interface data_type {
  get value(): any[];
}

export interface checkbox_arr_type {
  get value(): Int32Array | null;
  set value(value: Int32Array | null);
}
