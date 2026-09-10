export const useBlockNewsletterCard = () => {
  function getNewsLetterCard() {
    return document.querySelector("[id^=block-newsletter-card-]");
  }

  function scrollToNewsletterCard() {
    const router = useRouter();
    const localePath = useLocalePath();
    const newsletterCard = getNewsLetterCard();

    if (newsletterCard) {
      newsletterCard.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      router.push({ path: localePath({ name: "index" }) });
      // TODO: Try to remove setTimeout
      setTimeout(() => {
        const newsletterCard = getNewsLetterCard();
        newsletterCard?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 1000);
    }
  }

  return {
    scrollToNewsletterCard,
  };
};
