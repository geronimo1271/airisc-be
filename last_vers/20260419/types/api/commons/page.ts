import type { Block } from "@/types/api/commons/block";
import type { Seo } from "@/types/api/commons/seo";

export type Page = {
  blocks: Block[];
  createdAt: string;
  locale: string;
  seo: Seo | null;
  updatedAt: string;
  publishedAt?: string;
  slug: string;
};
