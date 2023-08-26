const About = () => {
  return (
    <section id="acerca">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <div className="bg-[url('/img/buho.jpg')] bg-no-repeat bg-cover bg-center bg-gray-900 bg-blend-color-dodge h-[250px]">
            <div></div>
          </div>
        </div>
        <div>
          <div className="bg-[url('/img/puesta-sol.jpg')] bg-no-repeat bg-cover bg-center bg-gray-900 bg-blend-color-dodge h-[250px]"></div>
        </div>
      </div>
      <div className="flex justify-center bg-fuchsia-500 mt-0 pt-20 sm:-mt-40 md:pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-5/6 md:w-4/5">
          <div className="bg-[url('/img/camara.png')] bg-no-repeat bg-cover bg-top h-[300px] md:h-[250px] rounded-t-xl sm:rounded-t-none sm:rounded-l-xl"></div>
          <div className="flex flex-col items-left justify-around gap-2 p-3 bg-white rounded-b-xl sm:rounded-r-xl sm:rounded-b-none">
            <h3 className="text-xl font-bold uppercase pb-2">
              Soy Josué Grilletti
            </h3>
            <h4 className="text-sm uppercase pb-2">Fotógrafo profesional</h4>
            <hr className="bg-red-500 h-2 w-10 mb-2" />
            <p className="text-sm mb-2">
              Capturando momentos que perduran en el tiempo. Reportero Gráfico,
              Fotógrafo Oficial del Municipio de Libertador San Martín, ER
              Argentina @municipiolsm
            </p>
            <button className="py-2 px-4 border-solid border-2 border-red-500 rounded-xl w-40 m-auto">
              Contacto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
