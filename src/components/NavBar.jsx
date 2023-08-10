import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  // Estados para manejar menu responsivo y link activo
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  //Constantes para los iconos del menú
  const menu = <FaBars />;
  const close = <FaTimes />;

  //Enlaces del menú
  const links = [
    {
      title: "Inicio",
      link: "/",
    },
    {
      title: "Acerca de",
      link: "#acerca",
    },
    {
      title: "Trabajos recientes",
      link: "#trabajos-recientes",
    },
    {
      title: "Portfolio",
      link: "#portfolio",
    },
    {
      title: "Contacto",
      link: "#contacto",
    },
  ];

  //Función que se ejecuta al hacer clic en un enlace
  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <nav className="flex justify-center text-white h-0 ">
      <button
        onClick={() => setOpen(!open)} //Al hacer clic en el botón se setea el estado
        className="absolute right-6 top-10 text-2xl cursor-pointer z-50 md:hidden"
      >
        {open ? close : menu}
      </button>
      <ul
        className={`flex flex-col items-center bg-gray-500 md:bg-transparent  md:h-auto md:translate-y-0 justify-around md:flex-row md:justify-around w-full md:w-4/5 md:py-10 lg:text-xl uppercase font-bold transition-all duration-500 ${
          open ? "absolute top-0 left-0 h-[300px]" : "-translate-y-[400px]"
        }`}
      >
        {links.map((objLink, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleClick(index);
                setOpen(false);
              }}
            >
              <a
                href={objLink.link}
                className={`${
                  active === index ? "text-fuchsia-500" : "text-white"
                } hover:text-fuchsia-500 transition-colors duration-300`}
              >
                {objLink.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
