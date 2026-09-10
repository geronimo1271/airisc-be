import type { Page } from "@/types/api/commons/page";

export type Homepage = Omit<Page, "slug">;
