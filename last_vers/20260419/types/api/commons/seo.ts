import type { Image } from "@/types/api/commons/image";

type MetaSocial = {
  description: string;
  id: number;
  image: Image;
  socialNetwork: "Facebook" | "Twitter";
  title: string;
};

export type Seo = {
  canonicalURL: string;
  id: number;
  keywords: string;
  metaDescription: string;
  metaImage: Image;
  metaRobots: string;
  metaSocial: MetaSocial[];
  metaTitle: string;
  metaViewport: string;
  structuredData: Record<string, unknown> | Array<unknown>;
};
