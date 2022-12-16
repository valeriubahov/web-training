import { useEffect, useState } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import { firebaseApp } from "../base";
import PropTypes from "prop-types";

const App = (props) => {
  const [fishes, setFishes] = useState({});
  const [order, setOrder] = useState({});

  useEffect(() => {
    const localStorageRef = localStorage.getItem(props.match.params.storeId);

    if (localStorageRef) {
      setOrder(JSON.parse(localStorageRef));
    }

    firebaseApp
      .database()
      .ref(`${props.match.params.storeId}/fishes`)
      .on("value", (snapshot) => {
        if (snapshot.val()) setFishes(snapshot.val());
      });
  }, []);

  useEffect(() => {
    const ref = firebaseApp
      .database()
      .ref(`${props.match.params.storeId}/fishes`)
      .update(fishes);

  }, [fishes]);

  useEffect(() => {
    localStorage.setItem(props.match.params.storeId, JSON.stringify(order));
  }, [order]);

  const addFish = (fish) => {
    setFishes((prevState) => ({ ...prevState, [`fish${Date.now()}`]: fish }));
  };

  const updateFish = (key, updatedFish) => {
    setFishes((prevState) => ({ ...prevState, [key]: updatedFish }));
  };

  const deleteFish = (key) => {
    setFishes((prevState) => {
      const copy = { ...prevState };
      delete copy[key];
      return copy;
    });
  };

  const loadSamplesFishes = () => {
    setFishes(sampleFishes);
  };

  const addToOrder = (key) => {
    setOrder((prevState) => ({ ...prevState, [key]: prevState[key] + 1 || 1 }));
  };

  const removeFromOrder = (key) => {
    setOrder((prevState) => {
      const copy = { ...prevState };
      delete copy[key];
      return copy;
    });
  };

  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(fishes).map((key) => (
            <Fish
              key={key}
              index={key}
              details={fishes[key]}
              addToOrder={addToOrder}
            />
          ))}
        </ul>
      </div>
      <Order fishes={fishes} order={order} removeFromOrder={removeFromOrder} />
      <Inventory
        addFish={addFish}
        updateFish={updateFish}
        deleteFish={deleteFish}
        loadSampleFishes={loadSamplesFishes}
        fishes={fishes}
        storeId={props.match.params.storeId}
      />
    </div>
  );
};

App.propTypes = {
  match: PropTypes.object,
};

export default App;
