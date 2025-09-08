const occupations = document.querySelectorAll(".occupation p");
let currentIndex = 0;

setInterval(() => {
  occupations.forEach((p, index) => {
    p.style.transform = `translateY(-${currentIndex * 100}%)`;
  });

  currentIndex = (currentIndex + 1) % occupations.length;
}, 2500);