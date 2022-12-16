import { useEffect, useState } from "react";
import AddFishForm from "../items/AddFishForm";
import EditFishForm from "../items/EditFishForm";
import PropTypes from "prop-types";
import Login from "./Login";
import firebase from "firebase/app";
import { base, firebaseApp } from "../../base";

const Inventory = (props) => {
  const [logUser, setLogUser] = useState({ uid: null, owner: null });

  const authHandler = async (authData) => {
    const store = await base.fetch(props.storeId, { context: {} });
    if (!store.owner) {
      await base.post(`${props.storeId}/owner`, {
        data: authData.user.uid,
      });
    }

    return {
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid,
    };
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        authHandler({ user }).then((data) => setLogUser(data));
      }
    });
  }, []);

  const authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(authHandler)
      .then((data) => setLogUser(data));
  };

  const logout = async () => {
    await firebase.auth().signOut();
    setLogUser((prevUser) => ({ ...prevUser, uid: null }));
  };

  const logoutButton = <button onClick={logout}>Logout</button>;

  if (!logUser.uid) {
    return <Login authenticate={authenticate} />;
  }
  if (logUser.uid !== logUser.owner) {
    return (
      <div>
        <p>Sorry you are not the owner</p>
        {logout}
      </div>
    );
  }
  return (
    <div className="inventory">
      <h2>Inventory!</h2>
      {logoutButton}
      {Object.keys(props.fishes).map(
        (key) =>
          props.fishes[key] && (
            <EditFishForm
              key={key}
              index={key}
              fish={props.fishes[key]}
              updateFish={props.updateFish}
              deleteFish={props.deleteFish}
            />
          )
      )}
      <AddFishForm addFish={props.addFish} />
      <button onClick={props.loadSampleFishes}>Load Sample Fishes</button>
    </div>
  );
};

Inventory.propTypes = {
  fishes: PropTypes.object,
  updateFish: PropTypes.func,
  deleteFish: PropTypes.func,
  loadSampleFishes: PropTypes.func,
};

export default Inventory;
