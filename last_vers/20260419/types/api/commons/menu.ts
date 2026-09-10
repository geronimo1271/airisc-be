export type MenuItem = {
  id: number;
  attributes: {
    createdAt: string;
    order: number;
    target: string | null;
    title: string;
    url: string;
    updatedAt: string;
    children: {
      data: MenuItem[];
    };
  };
};

export type Menu = {
  createdAt: string;
  slug: string;
  title: string;
  updatedAt: string;
  items: {
    data: MenuItem[];
  };
};
