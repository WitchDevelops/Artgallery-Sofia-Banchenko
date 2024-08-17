const images = [
  {
    src: "./assets/img/Taisia-2022-09.webp",
    alt: "Taisia oil painting from September 2022 by Sofia Banchenko",
    title: "Taisia",
    description: "oil on canvas,September 2022",
  },
  {
    src: "./assets/img/Absinth-2022-07.webp",
    alt: "Absinth oil painting from July 2022 by Sofia Banchenko",
    title: "Absinth",
    description: "oil on canvas, July 2022",
  },
  {
    src: "./assets/img/Gebärdensprache-2022-06.webp",
    alt: "Gebärdensprache painting from June 2022 by Sofia Banchenko",
    title: "Gebärdensprache",
    description: "oil on canvas, June 2022",
  },
  {
    src: "./assets/img/Watermelon-man-2022-05.webp",
    alt: "Watermelon man painting from May 2022 by Sofia Banchenko",
    title: "Watermelon man",
    description: "oil on canvas, May 2022",
  },
  {
    src: "./assets/img/Fossil-2022-04.webp",
    alt: "Fossil painting from April 2022 by Sofia Banchenko",
    title: "Fossil",
    description: "oil on canvas, April 2022",
  },
  {
    src: "./assets/img/Schwarzer-Holländer-2022-03.webp",
    alt: "Schwarzer Holländer painting from March 2022 by Sofia Banchenko",
    title: "Schwarzer Holländer",
    description: "oil on canvas, March 2022",
  },
  {
    src: "./assets/img/Natalia-08-2022.webp",
    alt: "Natalia painting from August 2022 by Sofia Banchenko",
    title: "Natalia",
    description: "oil on canvas, August 2022",
  },
  {
    src: "./assets/img/De-nieuwe-rode-molen-11-2022.webp",
    alt: "De nieuwe rode molen painting from November 2022 by Sofia Banchenko",
    title: "De nieuwe rode molen",
    description: "oil on canvas, November 2022",
  },
  {
    src: "./assets/img/Petrolgrün-10-2022.webp",
    alt: "Petrolgrün painting from October 2022 by Sofia Banchenko",
    title: "Petrolgrün",
    description: "oil on canvas, October 2022",
  },
  {
    src: "./assets/img/Jardin-Botanique-12-2023.webp",
    alt: "Jardin Botanique painting from December 2023 by Sofia Banchenko",
    title: "Jardin Botanique",
    description: "oil on canvas, December 2023",
  },
  {
    src: "./assets/img/Isabella-oder-goldener-Käfig-02-2024.webp",
    alt: "Isabella oder goldener KäfigPetrolgrün painting from February 2024 by Sofia Banchenko",
    title: "Isabella oder goldener Käfig",
    description: "oil on canvas, February 2024",
  },
];

const gallery = document.querySelector(".img-gallery");

images.forEach((image) => {
  const figure = `
    <figure>
      <h3>${image.title}</h3>
      <img src="${image.src}" alt="${image.alt}" loading="lazy" oncontextmenu="return false;">
      <figcaption>
        <h4>More info</h4>
        <p>${image.title}</p>
        <p>${image.description}</p>
      </figcaption>
    </figure>
  `;

  gallery.insertAdjacentHTML("beforeend", figure);
});
