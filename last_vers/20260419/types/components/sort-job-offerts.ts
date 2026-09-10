export type TSortMode = "recent" | "older" | "alphaAZ" | "alphaZA";

export interface ISortItem {
  label: string;
  mode: TSortMode;
}

export type ISortOptions = Record<TSortMode, ISortItem>;

export interface IProps {
  langSuffix: string;
}
