import type { TInitValues } from "../components/input/input-range";
import type { IJobOffer } from "./job-offers";

export type TItemConfigValue = string | boolean | number;
export interface TItemConfig {
  label: string;
  value: TItemConfigValue;
}

type IPartialIJobOffer = Pick<
  IJobOffer,
  | "contract_type"
  | "education_level"
  | "experience_level"
  | "languages"
  | "work_environment"
  | "work_sector"
  | "benefits"
>;

export type IJobConfiguration = {
  [key in keyof IPartialIJobOffer]: TItemConfig[];
};

interface IExtraFields {
  gross_salary: TInitValues;
}
type IPartialJobFilters = {
  [key in keyof IPartialIJobOffer]: TItemConfigValue[];
};
export interface IJobFilters extends IPartialJobFilters, IExtraFields {}
