import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../../helpers";

const Fish = (props) => {
  const handleClick = () => {
    props.addToOrder(props.index);
  };

  const fish = props.details;
  const isAvailable = fish.status === "available";
  return (
    <li className="menu-fish">
      <img src={fish.image} alt={fish.name} />
      <h3 className="fish-name">
        {fish.name}
        <span className="price"> {formatPrice(fish.price)}</span>
      </h3>
      <p>{fish.desc}</p>
      <button disabled={!isAvailable} onClick={handleClick}>
        {isAvailable ? "Add To Order" : "Sold Out"}
      </button>
    </li>
  );
};

Fish.propTypes = {
  details: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.number,
  }),
  addToOrder: PropTypes.func,
};

export default Fish;
