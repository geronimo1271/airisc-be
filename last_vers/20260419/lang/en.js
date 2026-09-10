export default {
  yes: "Yes",
  no: "No",
  top_header: {
    web_site: "Go to site Airisc.org",
    email: "Stay updated",
  },
  lang_switcher: {
    switcher_aria_label: "Open and close the language menu",
  },
  menus: {
    hamburger_aria_label: "Open and close the menu",
    news_label: "STAY UPDATED",
  },
  modal: {
    close_aria_label: "Close the application form",
  },
  job_application_modal: {
    title: "SEND YOUR APPLICATION",
    subtitle:
      "Don't give up. You can still send us your SPONTANEOUS APPLICATION. We will gladly take it into consideration in case new opportunities arise",
  },
  newsletter_modal: {
    title: "NEWSLETTER TOPICS",
    success_message:
      "You have successfully registered for our newsletter! If you want to receive personalized communications you can specify your interests below.",
    subtitle:
      "Select the topics that interest you most and subscribe to our newsletter! You can change your preferences at any time.",
  },
  job_filters_modal: {
    title: "FILTERS",
    show_results: "SHOW RESULTS",
  },
  promos_filters_modal: {
    title: "FILTERS",
    show_results: "SHOW RESULTS",
  },
  form: {
    error_messages: {
      required: "This field is required",
      email: "Enter a valid email address",
      min_digits: "The field must contain at least {min} digits",
      max_digits: "The field must contain a maximum of {max} digits",
      strict_digits: "The field must contain {max} digits",
      between_digits:
        "The field must contain a number of digits between {min} and {max}",
    },
    job_application: {
      label: {
        first_name: "Name",
        last_name: "Surname",
        email: "Email",
        cv: "Drag your Curriculum Vitae here",
        age: "Age",
        work_sector: "Select job offer",
        languages: "Spoken languages",
        has_own_accommodation: "Do you have your own accommodation?",
        relocates_with_family: " Will you move with your family?",
        car_owner: "Do you have a car?",
        privacy: "I accept terms and conditions",
      },
      file: {
        cv_subtitle: "Or",
        cv_button: "UPLOAD FILE",
      },
      submit: {
        label: "SEND APPLICATION",
      },
    },
    news_letter: {
      banner_subtitle: "Subscribe to our Newsletter",
      label: {
        email: "Your email address",
        news: "I agree to receive the newsletter from ArfSAG ODV. You can unsubscribe from these communications at any time. Read our privacy policy.",
        select_all: "Select all",
        no_preference: "No preference",
        skip_button: "Skip",
        submit: "CONFIRM",
      },
    },
    contact: {
      labels: {
        name: "Name",
        surname: "Surname",
        email: "Email",
        prefix: "+39",
        phone: "Phone number",
        type: "Reason for contact",
        text: "Leave your message here",
        submit: "SEND MESSAGE",
      },
    },
  },
  job_offer_card: {
    button_label: "Show details",
  },
  filters_col: {
    title: "Filters",
    reset: "reset",
  },
  pages: {
    working_livigno: {
      total_offers: "{totOffers} JOB OFFERS AVAILABLE",
      aria_label_grid_button: "Switch to grid view",
      aria_label_list_button: "Switch to list view",
      sort: {
        label: "Sort by:",
        by: {
          recent: "Most recent",
          older: "Less recent",
          alphaAZ: "Alphabetical A-Z",
          alphaZA: "Alphabetical Z-A",
        },
      },
      summary_of_offerts_viewed:
        "Summary of {currentViewed} job offers viewed in {totOffers} pages",
      upload_offers: "UPLOAD MORE",
      no_results: {
        title: "No job offers available",
        subtitle: "Try using other filters",
      },
      filters: {
        title: "Filters",
        aria_label_button: "Open modal with filters",
        reset: "reset",
        labels: {
          work_sector: "Sector",
          contract_type: "Contract type",
          experience_level: "Experience level",
          gross_salary: "Annual RAL",
          education_level: "Education level",
          languages: "Languages",
          benefits: "Benefits",
          work_environment: "Work environment",
        },
      },
    },
    job_offer: {
      work_description: "Description",
      work_duty_description: "Responsibilities",
      form_title: "SEND YOUR APPLICATION",
      index: "Index",
    },
    faq: {
      all: "All",
      no_results: {
        title:
          "No FAQs contain the word &lsquo;&lsquo;{searchValue}&rsquo;&rsquo;",
        subtitle: "Try using other keywords",
      },
    },
    promos_list: {
      total_promos: "{totPromos} PROMOS AVAILABLE",
      summary_of_promos_viewed:
        "Summary of {currentViewed} promos viewed in {totPromos} pages",
      upload_promos: "UPLOAD MORE",
      no_results: {
        title: "No promos available",
        subtitle: "Try using other filters",
      },
      filters: {
        title: "Filters",
        aria_label_button: "Open modal with filters",
        area: "Area",
        typology: "Typology",
        select_all: "All",
        reset: "reset",
      },
    },
    error: {
      404: {
        title: "Ops! The page doesn't exist.",
        subtitle: "We couldn't find the page you requested.",
        button_label: "GO TO HOMEPAGE",
      },
      500: {
        title: "Internal server error",
        subtitle: "We are sorry, something went wrong. Please try again later.",
        button_label: "RELOAD",
      },
    },
  },
  toast: {
    update_subscription: {
      error: {
        summary: "Something went wrong!",
        detail: "Please try again later.",
      },
    },
    job_application: {
      success: {
        summary: "Application sent successfully!",
        detail:
          "We will contact you as soon as possible to arrange an interview.",
      },
      error: {
        summary: "Something went wrong!",
        detail: "Please try again later.",
      },
    },
    contact_us: {
      success: {
        summary: "Message sent successfully!",
        detail:
          "We will contact you as soon as possible to answer your questions.",
      },
      error: {
        summary: "Something went wrong!",
        detail: "Please try again later.",
      },
    },
  },
};
