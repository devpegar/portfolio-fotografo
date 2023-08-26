const Card = ({ titulo, descripcion, img }) => {
  return (
    <div id="slider-content" className="mx-10">
      <div id="card-wrapper">
        <div id="card" className="bg-white rounded-3xl w-64">
          <div
            id="image-content"
            className="py-6 px-4 flex flex-col items-center gap-y-1 relative"
          >
            <span className="absolute left-0 top-0 h-full w-full bg-blue-700 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl before:content-[''] before:absolute before:h-10 before:w-10 before:bg-blue-700 before:right-0 before:-bottom-10 after:content-[''] after:absolute after:h-10 after:w-10 after:bg-white after:right-0 after:-bottom-10 after:rounded-tr-3xl"></span>
            <div
              id="card-image"
              className="relative h-40 w-40 rounded-full bg-white p-1"
            >
              <img
                src={img}
                alt=""
                className="h-full w-full object-cover rounded-full border-4 border-blue-700 border-solid"
              />
            </div>
          </div>
          <div
            id="card-content"
            className="py-3 px-4 flex flex-col items-center"
          >
            <h2 className="text-xl font-medium text-gray-700">{titulo}</h2>
            <p className="text-sm text-gray-500 text-center">{descripcion}</p>
            <button className="border-none text-base text-white py-2 px-4 bg-blue-600 rounded-md m-3 cursor-pointer hover:bg-blue-900 transition-all ease-linear duration-300">
              Contratar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
