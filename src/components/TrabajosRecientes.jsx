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
        <div className="flex justify-center">
          <div className="rounded-lg shadow-lg bg-white max-w-[275px] min-h-min md:max-h-96 relative overflow-hidden group">
            <img
              src={item.img}
              alt=""
              className="rounded-t-lg transition-all duration-500 group-hover:scale-125"
            />
            <div className="w-full h-0 group-hover:h-full bg-gradient-to-b from-transparent to-gray-700 rounded-xl absolute left-0 bottom-0 overflow-hidden flex justify-center flex-col px-10 text-center text-sm duration-500">
              <h3 className="font-semibold mb-1 mt-[80%] text-xl lg:text-2xl text-white">
                {item.titulo}
              </h3>
              <p className="text-white text-sm">{item.descripcion}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <main className="w-full py-10 bg-fuchsia-500">
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
