const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between w-full bg-black p-5">
      <div className="w-full py-5 md:w-2/4">
        <p className="text-white text-base text-center">
          © {new Date().getFullYear()} <a href="https://devpeg.ar">DevpegAr</a>
        </p>
      </div>
      <div className="w-full py-5 md:w-2/4 text-white text-base">
        <ul className="flex justify-around sm:w-3/4 sm:mx-auto">
          <li className="hover:scale-125 transition-transform duration-300">
            <a
              className="hover:text-[#962fbf] transition-colors duration-300"
              href="#"
            >
              Instagram
            </a>
          </li>
          <li className="hover:scale-125 transition-transform duration-300">
            <a
              className="hover:text-[#3b5998] transition-colors duration-300"
              href="#"
            >
              Facebook
            </a>
          </li>
          <li className="hover:scale-125 transition-transform duration-300">
            <a
              className="hover:text-[#00acee] transition-colors duration-300"
              href="#"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
