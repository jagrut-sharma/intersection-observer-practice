const cards = document.querySelectorAll(".card");

const entriesCallback = (entries) => {
  console.log(entries);
  entries.forEach((entry) =>
    entry.target.classList.toggle("show", entry.isIntersecting)
  );
};

const observer = new IntersectionObserver(entriesCallback);

cards.forEach((card) => observer.observe(card));
