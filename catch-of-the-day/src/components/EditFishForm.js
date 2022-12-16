import React from "react";
import PropTypes from "prop-types";

const EditFishForm = (props) => {
  const handleChange = (event) => {
    const updatedFish = {
      ...props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    props.updateFish(props.index, updatedFish);
  };

  return (
    <div className="fish-edit">
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={props.fish.name}
        onChange={handleChange}
      />
      <input
        name="price"
        type="text"
        placeholder="Price"
        value={props.fish.price}
        onChange={handleChange}
      />
      <select name="status" value={props.fish.status} onChange={handleChange}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea
        name="desc"
        type="text"
        placeholder="Desc"
        value={props.fish.desc}
        onChange={handleChange}
      />
      <input
        name="image"
        type="text"
        placeholder="Image"
        value={props.fish.image}
        onChange={handleChange}
      />
      <button onClick={() => props.deleteFish(props.index)}>Remove Fish</button>
    </div>
  );
};

EditFishForm.propTypes = {
  fish: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.number,
  }),
  index: PropTypes.string,
  updateFish: PropTypes.func,
};

export default EditFishForm;
