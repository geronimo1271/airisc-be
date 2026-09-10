interface ISocials {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface IFooter {
  cookies_policy_url: string;
  privacy_policy_url: string;
  terms_of_service_url: string;
  socials: ISocials[];
}
