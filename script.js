const cards = document.querySelectorAll(".card");

const entriesCallback = (entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    // if (entry.isIntersecting) observer.unobserve(entry.target); // If its visible on screen or intersecting => unobserve it. Used when you don't want to show animation again when scrolling up again
  });
};

const optionsObj = {
  //   root: null, // element that target element intersects => null = viewport => If set to parent element, it tracks all children element inside of it --> Not used much
  threshold: 1,
  //   rootMargin: "-150px", // will reduce the container size by 150px and cards will be visible in less area.
  //   rootMargin: "100px", // will increase the container size by 100px and cards will be loaded as long as its near 100px to visible/intersection area.
};

const observer = new IntersectionObserver(entriesCallback, optionsObj);

cards.forEach((card) => observer.observe(card));
