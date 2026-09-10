import type { ICommonComponentProps } from "./common";

interface ISteps {
  id: number;
  title?: string;
  text?: string;
}

export interface IProps extends ICommonComponentProps {
  title?: string;
  text?: string;
  steps: ISteps[];
  show_form?: boolean;
}
