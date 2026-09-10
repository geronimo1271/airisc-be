import type { IJobOffer } from "../api/job-offers";

type TOffertCard = Pick<
  IJobOffer,
  "location" | "work_sector" | "image" | "name" | "slug"
>;

type TView = "list" | "grid";

export interface IProps extends TOffertCard {
  view?: TView;
}
