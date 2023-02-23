import React from "react";
import Item from "../components/Item";

function ItemListContainer({ items, setCartItems, cartItems }) {
  const handleClick = (itemId) => {
    if (cartItems.find((el) => el.itemId === itemId)) {
      console.log("이미존재");
    } else {
      setCartItems([...cartItems, { itemId: itemId, quantity: 1 }]);
    }
  };
  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => (
          <Item item={item} key={idx} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
