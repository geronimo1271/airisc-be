export default {
  yes: "Si",
  no: "No",
  top_header: {
    web_site: "Vai al sito Airisc.org",
    email: "Rimani aggiornato",
  },
  lang_switcher: {
    switcher_aria_label: "Apri e chiudi il menu delle lingue",
  },
  menus: {
    hamburger_aria_label: "Apri e chiudi il menu",
    news_label: "RIMANI AGGIORNATO",
  },
  modal: {
    close_aria_label: "Chiudi il modulo di candidatura",
  },
  job_application_modal: {
    title: "INVIA LA TUA CANDIDATURA",
    subtitle:
      "Non ti arrendere. Puoi comunque inviarci la tua CANDIDATURA SPONTANEA. La terremo volentieri in considerazione nel caso si aprissero nuove opportunità",
  },
  newsletter_modal: {
    title: "TEMATICHE NEWSLETTER",
    success_message:
      "Ti sei registrato con successo alla nostra newsletter! Se vuoi ricevere delle comunicazioni personalizzate puoi specificare i tuoi interessi qua sotto.",
    subtitle:
      "Seleziona le tematiche che ti interessano maggiormente e iscriviti alla nostra newsletter! Potrai modificare le tue preferenze in qualunque momento.",
  },
  job_filters_modal: {
    title: "FILTRI",
    show_results: "MOSTRA RISULTATI",
  },
  promos_filters_modal: {
    title: "FILTRI",
    show_results: "MOSTRA RISULTATI",
  },
  form: {
    error_messages: {
      required: "Questo campo è obbligatorio",
      email: "Inserisci un indirizzo email valido",
      min_digits: "Il campo deve contenere almeno {min} cifre",
      max_digits: "Il campo deve contenere al massimo {max} cifre",
      strict_digits: "Il campo deve contenere {max} cifre",
      between_digits:
        "Il campo deve contenere un numero di cifre compreso tra {min} e {max}",
    },
    job_application: {
      label: {
        first_name: "Nome",
        last_name: "Cognome",
        email: "Email",
        cv: "Trascina qui il tuo Curriculum Vitae",
        age: "Età",
        work_sector: "Seleziona ambito lavorativo",
        languages: "Lingue parlate",
        has_own_accommodation: "Disponi di un alloggio proprio?",
        relocates_with_family: "Ti trasferirai con la tua famiglia?",
        car_owner: "Sei automunito?",
        privacy: "Accetto termini e condizioni",
      },
      file: {
        cv_subtitle: "Oppure",
        cv_button: "CARICA IL FILE",
      },
      submit: {
        label: "INVIA CANDIDATURA",
      },
    },
    news_letter: {
      banner_subtitle: "Iscriviti alla nostra Newsletter",
      label: {
        email: "Il tuo indirizzo email",
        news: "Accetto di ricevere la newsletter di ArfSAG ODV. Puoi annullare l'iscrizione a queste comunicazioni in qualsiasi momento. Leggi la nostra informativa sulla privacy.",
        select_all: "Seleziona tutto",
        no_preference: "Nessuna preferenza",
        skip_button: "Salta",
        submit: "CONFERMA",
      },
    },
    contact: {
      labels: {
        name: "Nome",
        surname: "Cognome",
        email: "Email",
        prefix: "+39",
        phone: "Numero di telefono",
        type: "Motivo del contatto",
        text: "Lascia qua il tuo messaggio",
        submit: "INVIA MESSAGGIO",
      },
    },
  },
  job_offer_card: {
    button_label: "Vedi dettagli",
  },
  filters_col: {
    title: "Filtri",
    reset: "reset",
  },
  pages: {
    working_livigno: {
      total_offers: "{totOffers} OFFERTE DI LAVORO DISPONIBILI",
      aria_label_grid_button: "Passa alla visualizzazione a griglia",
      aria_label_list_button: "Passa alla visualizzazione a lista puntata",
      sort: {
        label: "Ordina per:",
        by: {
          recent: "Più recenti",
          older: "Meno recenti",
          alphaAZ: "Alfabetico A-Z",
          alphaZA: "Alfabetico Z-A",
        },
      },
      summary_of_offerts_viewed:
        "Hai visualizzato {currentViewed} delle {totOffers} offerte di lavoro disponibili",
      upload_offers: "CARICA ALTRO",
      no_results: {
        title: "Nessuna offerta di lavoro disponibile",
        subtitle: "Prova a utilizzare altri filtri",
      },
      filters: {
        title: "Filtri",
        aria_label_button: "Apri la modale con i filtri",
        reset: "reset",
        labels: {
          work_sector: "Settore",
          contract_type: "Tipo di contratto",
          experience_level: "Livello di esperienza",
          gross_salary: "RAL annua:",
          education_level: "Istruzione richiesta",
          languages: "Lingue richieste",
          benefits: "Benefici",
          work_environment: "Ambiente di lavoro",
        },
      },
    },
    job_offer: {
      work_description: "Descrizione",
      work_duty_description: "Responsabilità",
      form_title: "INVIA LA TUA CANDIDATURA",
      index: "Indice",
    },
    faq: {
      all: "Tutte",
      no_results: {
        title:
          "Nessuna FAQ contiene la parola &lsquo;&lsquo;{searchValue}&rsquo;&rsquo;",
        subtitle: "Prova a utilizzare altre parole chiave",
      },
    },
    promos_list: {
      total_promos: "{totPromos} VANTAGGI DISPONIBILI",
      summary_of_promos_viewed:
        "Hai visualizzato {currentViewed} dei {totPromos} vantaggi disponibili",
      upload_promos: "CARICA ALTRO",
      no_results: {
        title: "Nessun vantaggio disponibile",
        subtitle: "Prova a utilizzare altri filtri",
      },
      filters: {
        title: "Filtri",
        aria_label_button: "Apri la modale con i filtri",
        area: "Ambito",
        typology: "Tipologia",
        select_all: "Tutti",
        reset: "reset",
      },
    },
    error: {
      404: {
        title: "Ops! La pagina non esiste.",
        subtitle: "Non siamo riusciti a trovare la pagina che hai richiesto.",
        button_label: "TORNA ALLA HOMEPAGE",
      },
      500: {
        title: "Internal server error",
        subtitle:
          "Abbiamo riscontrato un errore nel server e non siamo riusciti a completare la tua richiesta, ricarica la pagina o riprova più tardi.",
        button_label: "RICARICA",
      },
    },
  },
  toast: {
    subscription: {
      error: {
        summary: "Non è stato possibile inviare la tua candidatura!",
        detail: "Stiamo avendo alcuni problemi tecnici, riprova più tardi.",
      },
    },
    update_subscription: {
      success: {
        summary: "Iscrizione aggiornata con successo!",
        detail:
          "Riceverai tutti gli aggiornamenti sulle tematiche che hai selezionato.",
      },
      error: {
        summary: "Non è stato possibile inviare la tua candidatura!",
        detail: "Stiamo avendo alcuni problemi tecnici, riprova più tardi.",
      },
    },
    job_application: {
      success: {
        summary: "Candidatura inviata con successo!",
        detail:
          "Ti ricontatteremo via mail per farti avere l’esito della tua candidatura",
      },
      error: {
        summary: "Non è stato possibile inviare la tua candidatura!",
        detail: "Stiamo avendo alcuni problemi tecnici, riprova più tardi.",
      },
    },
    contact_us: {
      success: {
        summary: "Dati inviati con successo!",
        detail:
          "Ti risponderemo il prima possibile, controlla la tua casella di posta elettronica.",
      },
      error: {
        summary: "Non è stato possibile ricevere i tuoi dati!",
        detail: "Stiamo avendo alcuni problemi tecnici, riprova più tardi.",
      },
    },
  },
};
