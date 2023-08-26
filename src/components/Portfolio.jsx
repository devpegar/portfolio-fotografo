const imagenes = [
  {
    id: 1,
    enlace: "img/portfolio/1.jpg",
    espacio: 1,
  },
  {
    id: 2,
    enlace: "img/portfolio/2.jpg",
    espacio: 1,
  },
  {
    id: 3,
    enlace: "img/portfolio/3.jpg",
    espacio: 1,
  },
  {
    id: 4,
    enlace: "img/portfolio/4.jpg",
    espacio: 1,
  },
  {
    id: 5,
    enlace: "img/portfolio/5.jpg",
    espacio: 1,
  },
  {
    id: 6,
    enlace: "img/portfolio/6.jpg",
    espacio: 1,
  },
  {
    id: 7,
    enlace: "img/portfolio/7.jpg",
    espacio: 1,
  },
  {
    id: 8,
    enlace: "img/portfolio/8.jpg",
    espacio: 1,
  },
  {
    id: 9,
    enlace: "img/portfolio/9.jpg",
    espacio: 1,
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="p-5 md:p-10 bg-gradient-to-br from-fuchsia-500 to-fuchsia-300"
    >
      <div className="p-5">
        <h3 className="text-white text-3xl font-semibold">Portfolio</h3>
      </div>
      <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        {imagenes.map((imagen, index) => {
          return (
            <img
              key={index}
              src={imagen.enlace}
              className="hover:scale-110 transition-all duration-300 rounded-lg shadow-lg grayscale hover:grayscale-0"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
