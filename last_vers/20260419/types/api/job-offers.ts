import type {
  Strapi4ResponseMany,
  Strapi4ResponseSingle,
} from "@nuxtjs/strapi/dist/runtime/types";
import type { Block } from "./commons/block";
import type { Image } from "./commons/image";
import type { Page } from "@/types/api/commons/page";

interface IWorkSector {
  name: string;
}
interface IWorkDuty {
  name: string;
}
type WorkSector = Strapi4ResponseSingle<IWorkSector>;
type WorkDuty = Strapi4ResponseSingle<IWorkDuty>;

export interface IJobOffer {
  name: string;
  slug: string;
  work_description: string;
  work_duty_description: string;
  work_sector: WorkSector;
  work_duties: WorkDuty[];
  location: string;
  contract_type: string;
  education_level: string;
  experience_level: string;
  gross_salary: number;
  benefits: string[];
  languages: string[];
  work_environment: string[];
  publishedAt: Date;
  updatedAt: Date;
  date_from: Date;
  updadate_top: Date;
  image: Image;
  blocks: Block[];
}

export interface IJobOfferPage
  extends Omit<Page, "slug" | "publishedAt" | "updatedAt">,
    IJobOffer {}

export interface IJobOffersResponse extends Strapi4ResponseMany<IJobOffer> {}
