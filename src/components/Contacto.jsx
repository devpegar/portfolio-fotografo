import Mailer from "./Mailer";
function Contacto() {
  const imagenContacto = "/contacto.jpg";
  return (
    <section
      id="contacto"
      className="w-full md:flex md:gap-2 bg-gradient-to-tl from-fuchsia-500 to-fuchsia-300"
    >
      <div className="w-full my-auto md:w-1/2 p-5">
        <img
          className="w-full h-auto object-cover rounded-3xl"
          src={imagenContacto}
          alt=""
        />
      </div>
      <Mailer />
    </section>
  );
}

export default Contacto;
