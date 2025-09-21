document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.about, .picture-box, .pr-wrapper, .xp-wrapper, .ed-wrapper, .certs-wrapper, .skills-wrapper, .cv-button');

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
