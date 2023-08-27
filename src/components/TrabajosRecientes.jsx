import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

import "swiper/css";
import "swiper/css/pagination";
import SwiperNavButton from "./SwiperNavButton";

const cards = [
  {
    id: 1,
    titulo: "Fotografía clásica",
    descripcion: "Lorem ipsum dolor sit amet.",
    img: "/img/clasica.jpg",
  },
  {
    id: 2,
    titulo: "Fotografía de modelos",
    descripcion: "Lorem ipsum dolor sit amet.",
    img: "/img/models.jpg",
  },
  {
    id: 3,
    titulo: "Fotografía eventos",
    descripcion: "Lorem ipsum dolor sit amet.",
    img: "/img/eventos.jpg",
  },
  {
    id: 4,
    titulo: "Fotografía cultural",
    descripcion: "Lorem ipsum dolor sit amet.",
    img: "/img/cultura.jpg",
  },
];

const TrabajosRecientes = () => {
  const cardSlider = (items) => {
    return items.map((item, index) => (
      <SwiperSlide key={index}>
        <Card
          titulo={item.titulo}
          descripcion={item.descripcion}
          img={item.img}
        />
      </SwiperSlide>
    ));
  };

  return (
    <main id="trabajos-recientes" className="w-full py-10 bg-fuchsia-500">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        <h2 className="text-white text-3xl font-semibold">
          Trabajos recientes
        </h2>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          550: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
        modules={[Pagination, Navigation, A11y]}
        className="w-10/12 my-5 bg-fuchsia-400 rounded-lg pt-14 pb-5 px-5"
      >
        <SwiperNavButton />
        {cardSlider(cards)}
      </Swiper>
    </main>
  );
};

export default TrabajosRecientes;
