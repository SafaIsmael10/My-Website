document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.header, .name-space, .personal, .brand-carousel, .xp > div, .knowledge > div, .cv-button');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

/* old way - no limit on animations:

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.name-node h1, .personal, .brand-carousel, .xp > div, .knowledge > div');

  function checkIfInView() {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        section.classList.add('in-view');
      } else {
        section.classList.remove('in-view');
      }
    });
  }

  window.addEventListener('scroll', checkIfInView);

  setTimeout(() => {
    checkIfInView();
  }, 100);
}); */


