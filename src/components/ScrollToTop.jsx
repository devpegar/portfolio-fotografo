import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      {showTopBtn && (
        <FaAngleUp
          className="fixed bottom-10 right-5 z-20 bg-gray-700 hover:bg-white border-2 border-white hover:border-fuchsia-500 border-solid h-12 w-12 text-white hover:text-fuchsia-500 cursor-pointer"
          onClick={goToTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
