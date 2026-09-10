import type { ICommonInputProps } from "./common";

export interface IProps extends ICommonInputProps {
  acceptedFormats?: string;
  maxFileSize?: number;
  showFileError: boolean;
}
