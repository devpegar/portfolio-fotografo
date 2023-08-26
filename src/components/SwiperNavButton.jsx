import { useSwiper } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute top-2 right-2 text-lg text-fuchsia-300 flex gap-2 xl:hidden">
      <button
        className="bg-gray-500 p-1 rounded-full"
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronLeft />
      </button>
      <button
        className="bg-gray-500 p-1 rounded-full"
        onClick={() => swiper.slideNext()}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default SwiperNavButton;
