const cards = document.querySelectorAll(".card");

const entriesCallback = (entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    if (entry.isIntersecting) observer.unobserve(entry.target); // If its visible on screen or intersecting => unobserve it. Used when you don't want to show animation again when scrolling up again
  });
};

const observer = new IntersectionObserver(entriesCallback, {
  threshold: 1,
});

cards.forEach((card) => observer.observe(card));
