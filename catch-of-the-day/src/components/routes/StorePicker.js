import { useRef } from "react";
import { getFunName } from "../../helpers";
import PropTypes from "prop-types";

const StorePicker = (props) => {
  const myInput = useRef();

  const goToStore = (event) => {
    event.preventDefault();
    const storeName = myInput.current.value;
    props.history.push(`/store/${storeName}`);
  };

  return (
    <form className="store-selector" onSubmit={goToStore}>
      <h2>Please enter a store</h2>
      <input
        ref={myInput}
        type="text"
        required
        placeholder="Store Name"
        defaultValue={getFunName()}
      />
      <button type="submit">Visit Store</button>
    </form>
  );
};

StorePicker.propTypes = {
  history: PropTypes.object,
};

export default StorePicker;
