import type { Schema, Attribute } from '@strapi/strapi';

export interface FooterSocial extends Schema.Component {
  collectionName: 'components_footer_socials';
  info: {
    displayName: 'Social';
    icon: '';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
    icon: Attribute.Enumeration<
      ['facebook', 'twitter', 'instagram', 'youtube']
    >;
  };
}

export interface PageAppLinksCard extends Schema.Component {
  collectionName: 'components_page_app_links_cards';
  info: {
    displayName: 'App Links Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    background_image: Attribute.Media;
    background_image_alt_text: Attribute.String;
    qr_code_title: Attribute.String;
    promos_title: Attribute.String;
    promos_description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    promos_cta_label: Attribute.String;
    promos_cta_target: Attribute.Enumeration<
      ['stessa_scheda', 'nuova_scheda']
    > &
      Attribute.DefaultTo<'stessa_scheda'>;
  };
}

export interface PageContentChapter extends Schema.Component {
  collectionName: 'components_page_content_chapters';
  info: {
    displayName: 'Content Chapter';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    link: Attribute.Component<'shared.links'>;
    img_cards_placement: Attribute.Enumeration<['sinistra', 'destra']> &
      Attribute.DefaultTo<'sinistra'>;
    images: Attribute.Media;
    background_color: Attribute.Enumeration<['bianco', 'lavanda']> &
      Attribute.DefaultTo<'bianco'>;
    use_image: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    use_pdf: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface PageContentIntro extends Schema.Component {
  collectionName: 'components_page_content_intros';
  info: {
    displayName: 'Content Intro';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    link: Attribute.Component<'shared.links'>;
    img_cards_placement: Attribute.Enumeration<['sinistra', 'destra']> &
      Attribute.DefaultTo<'sinistra'>;
    images: Attribute.Media;
    background_color: Attribute.Enumeration<['bianco', 'lavanda']> &
      Attribute.DefaultTo<'bianco'>;
    use_image: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    use_pdf: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface PageFaqItems extends Schema.Component {
  collectionName: 'components_page_faq_items';
  info: {
    displayName: 'FAQ Items';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    cta_label: Attribute.String;
    cta_link: Attribute.String;
    faqs: Attribute.Relation<'page.faq-items', 'oneToMany', 'api::faq.faq'>;
    cta_target: Attribute.Enumeration<['stessa_scheda', 'nuova_scheda']> &
      Attribute.DefaultTo<'stessa_scheda'>;
  };
}

export interface PageHero extends Schema.Component {
  collectionName: 'components_page_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    image: Attribute.Media;
    links: Attribute.Component<'shared.links', true>;
  };
}

export interface PageJobApplicationCard extends Schema.Component {
  collectionName: 'components_page_job_application_cards';
  info: {
    displayName: 'Job Application Card';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    background_color: Attribute.Enumeration<['lavanda']> &
      Attribute.DefaultTo<'lavanda'>;
    cta_label: Attribute.String;
    cta_placement: Attribute.Enumeration<['sinistra', 'centro', 'destro']> &
      Attribute.DefaultTo<'sinistra'>;
  };
}

export interface PageJobOfferCards extends Schema.Component {
  collectionName: 'components_page_job_offer_cards';
  info: {
    displayName: 'Job Offer Cards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    cta_label: Attribute.String;
    cta_link: Attribute.String;
    cta_target: Attribute.Enumeration<['stessa_scheda', 'nuova_scheda']> &
      Attribute.DefaultTo<'stessa_scheda'>;
    job_offers: Attribute.Relation<
      'page.job-offer-cards',
      'oneToMany',
      'api::job-offer.job-offer'
    >;
  };
}

export interface PageLivignoCardForm extends Schema.Component {
  collectionName: 'components_page_livigno_card_forms';
  info: {
    displayName: 'Livigno Card Form';
    icon: '';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    show_form: Attribute.Boolean;
    steps: Attribute.Component<'shared.text-item', true>;
  };
}

export interface PageLogos extends Schema.Component {
  collectionName: 'components_page_logos';
  info: {
    displayName: 'Logos';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'shared.logo-item', true> & Attribute.Required;
  };
}

export interface PageNewsletterCard extends Schema.Component {
  collectionName: 'components_page_newsletter_cards';
  info: {
    displayName: 'Newsletter Card';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    background_color: Attribute.Enumeration<['lavanda']> &
      Attribute.DefaultTo<'lavanda'>;
  };
}

export interface PagePageLinkLine extends Schema.Component {
  collectionName: 'components_page_page_link_lines';
  info: {
    displayName: 'Page Link Line';
    icon: 'code';
    description: '';
  };
  attributes: {
    prev_page_label: Attribute.String;
    prev_page_link: Attribute.String;
    next_page_label: Attribute.String;
    next_page_link: Attribute.String;
  };
}

export interface PageSliderCards extends Schema.Component {
  collectionName: 'components_page_slider_cards';
  info: {
    displayName: 'Slider Cards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    background_color: Attribute.Enumeration<['bianco', 'lavanda']> &
      Attribute.DefaultTo<'lavanda'>;
    cta_label: Attribute.String;
    cta_link: Attribute.String;
    cta_placement: Attribute.Enumeration<['sinistra', 'centro', 'destro']> &
      Attribute.DefaultTo<'centro'>;
    items: Attribute.Component<'shared.card-item', true>;
  };
}

export interface PageSliderHero extends Schema.Component {
  collectionName: 'components_page_slider_heroes';
  info: {
    displayName: 'Slider Hero';
  };
  attributes: {
    items: Attribute.Component<'page.hero', true> &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface PageTestimonialCards extends Schema.Component {
  collectionName: 'components_page_testimonial_cards';
  info: {
    displayName: 'Testimonial Cards';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    testimonials: Attribute.Relation<
      'page.testimonial-cards',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface PageTextCards extends Schema.Component {
  collectionName: 'components_page_text_cards';
  info: {
    displayName: 'Text Cards';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'shared.text-item', true> &
      Attribute.SetMinMax<{
        min: 3;
        max: 5;
      }>;
  };
}

export interface PageTextImages extends Schema.Component {
  collectionName: 'components_page_text_images';
  info: {
    displayName: 'Text Images';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    link: Attribute.Component<'shared.links'>;
    img_cards_placement: Attribute.Enumeration<['sinistra', 'destra']> &
      Attribute.DefaultTo<'sinistra'>;
    images: Attribute.Media & Attribute.Required;
    background_color: Attribute.Enumeration<['bianco', 'lavanda']> &
      Attribute.DefaultTo<'bianco'>;
  };
}

export interface PageTextMedia extends Schema.Component {
  collectionName: 'components_page_text_medias';
  info: {
    displayName: 'Text Media';
    icon: 'play';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    media: Attribute.Media;
  };
}

export interface PromoPromoCards extends Schema.Component {
  collectionName: 'components_promo_promo_cards';
  info: {
    displayName: 'Promo Cards';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    cta_label: Attribute.String;
    cta_target: Attribute.Enumeration<['stessa_scheda', 'nuova_scheda']> &
      Attribute.DefaultTo<'stessa_scheda'>;
    promos: Attribute.Relation<
      'promo.promo-cards',
      'oneToMany',
      'api::promo.promo'
    >;
  };
}

export interface SharedCardItem extends Schema.Component {
  collectionName: 'components_shared_card_items';
  info: {
    displayName: 'Card Item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    icon_placement: Attribute.Enumeration<['sinistra', 'centro', 'destro']> &
      Attribute.DefaultTo<'sinistra'>;
  };
}

export interface SharedLinks extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    cta_label: Attribute.String;
    cta_link: Attribute.String;
    cta_target: Attribute.Enumeration<['stessa_scheda', 'nuova_scheda']> &
      Attribute.DefaultTo<'stessa_scheda'>;
    background_color: Attribute.Enumeration<['blu', 'giallo']> &
      Attribute.DefaultTo<'blu'>;
  };
}

export interface SharedLogoItem extends Schema.Component {
  collectionName: 'components_shared_logo_items';
  info: {
    displayName: 'Logo Item';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    url: Attribute.String;
    name: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedPdfLink extends Schema.Component {
  collectionName: 'components_shared_pdf_links';
  info: {
    displayName: 'pdflink';
    icon: 'filePdf';
    description: '';
  };
  attributes: {
    cta_label: Attribute.String;
    cta_link: Attribute.String;
    cta_target: Attribute.Enumeration<['stessa_scheda', 'nuova_scheda']> &
      Attribute.DefaultTo<'nuova_scheda'>;
    background_color: Attribute.Enumeration<['blu', 'giallo']> &
      Attribute.DefaultTo<'blu'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedTextItem extends Schema.Component {
  collectionName: 'components_shared_text_items';
  info: {
    displayName: 'Text Item';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'footer.social': FooterSocial;
      'page.app-links-card': PageAppLinksCard;
      'page.content-chapter': PageContentChapter;
      'page.content-intro': PageContentIntro;
      'page.faq-items': PageFaqItems;
      'page.hero': PageHero;
      'page.job-application-card': PageJobApplicationCard;
      'page.job-offer-cards': PageJobOfferCards;
      'page.livigno-card-form': PageLivignoCardForm;
      'page.logos': PageLogos;
      'page.newsletter-card': PageNewsletterCard;
      'page.page-link-line': PagePageLinkLine;
      'page.slider-cards': PageSliderCards;
      'page.slider-hero': PageSliderHero;
      'page.testimonial-cards': PageTestimonialCards;
      'page.text-cards': PageTextCards;
      'page.text-images': PageTextImages;
      'page.text-media': PageTextMedia;
      'promo.promo-cards': PromoPromoCards;
      'shared.card-item': SharedCardItem;
      'shared.links': SharedLinks;
      'shared.logo-item': SharedLogoItem;
      'shared.meta-social': SharedMetaSocial;
      'shared.pdf-link': SharedPdfLink;
      'shared.seo': SharedSeo;
      'shared.text-item': SharedTextItem;
    }
  }
}
