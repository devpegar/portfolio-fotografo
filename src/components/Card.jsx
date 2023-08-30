import PropTypes from "prop-types";

const Card = ({ titulo, descripcion, img }) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-[275px] min-h-min md:max-h-96 relative overflow-hidden group">
        <img
          src={img}
          alt={titulo}
          className="rounded-t-lg transition-all duration-500 group-hover:scale-125"
        />
        <div className="w-full h-0 group-hover:h-full bg-gradient-to-b from-transparent to-gray-700 rounded-xl absolute left-0 bottom-0 overflow-hidden flex justify-center flex-col px-10 text-center text-sm duration-500">
          <h3 className="font-semibold mb-1 mt-[80%] text-xl lg:text-2xl text-white">
            {titulo}
          </h3>
          <p className="text-white text-sm">{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
