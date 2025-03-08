document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.header, .hero, .PTS, .box-offer, .form-container, .special-offers, .review-main-container, .feedback-cards, .about-section, .company-map, .footer, .card, .swiper-slide, .feedback-card, .contact-card');

  elements.forEach(element => {
    element.style.opacity = 0;
    element.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});
