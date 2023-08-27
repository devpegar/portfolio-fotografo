import NavBar from "./NavBar";
const Header = () => {
  return (
    <section
      id="Inicio"
      className="grid grid-cols-1 bg-hero-bg bg-cover bg-no-repeat bg-[right_20%_bottom] md:bg-center bg-gray-900 bg-blend-color-dodge h-screen"
    >
      <div className="w-full md:w3/5 justify-self-center">
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-self-center self-center w-4/5 md:w-3/5 h-full text-white">
        <h1 className="py-5 uppercase font-bold text-2xl md:text-4xl lg:text-5xl text-center">
          Una camara es el botón de guardar para el ojo de la mente
        </h1>
        <div className="rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 hover:scale-110 transition-all duration-500">
          <a href="#portfolio">
            <button className="h-full w-full px-5 py-2 text-xl bg-gray-500">
              Explora
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
