import type { ICommonComponentProps } from "./common";

interface IItem {
  id: number;
  title: string;
  text: string;
}

export interface IProps extends ICommonComponentProps {
  items: IItem[];
}
