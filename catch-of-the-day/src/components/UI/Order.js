import React from "react";
import { formatPrice } from "../../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import classes from "./Order.module.css";

const Order = (props) => {
  const renderOrder = (key) => {
    const fish = props.fishes[key];
    const count = props.order[key];
    const isAvailable = fish && fish.status === "available";
    if (!fish) {
      return null;
    }

    if (!isAvailable) {
      return (
        <CSSTransition
          classNames={classes.order}
          key={key}
          timeout={{ enter: 500, exit: 500 }}
        >
          <li key={key}>
            Sorry {fish ? fish.name : "fish"} is no longer available
          </li>
        </CSSTransition>
      );
    }

    return (
      <CSSTransition
        classNames={classes.order}
        key={key}
        timeout={{ enter: 500, exit: 500 }}
      >
        <li key={key}>
          <span>
            <TransitionGroup component="span" className={classes.count}>
              <CSSTransition
                classNames={classes.count}
                key={count}
                timeout={{ enter: 500, exit: 500 }}
              >
                <span> {count} </span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick={() => props.removeFromOrder(key)}>&times;</button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  const orderIds = Object.keys(props.order);
  const total = orderIds.reduce((prevTotal, key) => {
    const fish = props.fishes[key];
    const count = props.order[key];
    const isAvailable = fish && fish.status === "available";

    if (isAvailable) {
      return prevTotal + count * fish.price;
    }
    return prevTotal;
  }, 0);

  return (
    <div className="order-wrap">
      <h2>Order</h2>
      <TransitionGroup component="ul" className={classes.order}>
        {orderIds.map(renderOrder)}
      </TransitionGroup>

      <div className={classes.total}>
        <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  );
};

Order.propTypes = {
  fishes: PropTypes.object,
  order: PropTypes.object,
  removeFromOrder: PropTypes.func,
};

export default Order;
