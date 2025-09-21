document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".skills-tabs button");
  const skillGroups = document.querySelectorAll(".skill-group");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((btn) => btn.classList.remove("active"));
      tab.classList.add("active");

      skillGroups.forEach((group) => {
        group.classList.remove("active");
      });

      const selected = tab.dataset.skill;
      document.querySelector(`.skill-group[data-skill="${selected}"]`).classList.add("active");
    });
  });
});
