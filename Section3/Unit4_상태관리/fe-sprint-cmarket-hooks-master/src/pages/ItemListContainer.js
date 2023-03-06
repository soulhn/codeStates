import React from "react";
import Item from "../components/Item";

function ItemListContainer({ items, cartItems, setCartItems }) {
  const handleClick = (item) => {
    console.log(item);
    console.log(item.id);
    const copyCartItems = cartItems;
    const isIncart = cartItems.filter((el) => el.itemId === item.id)[0];
    if (isIncart) {
      const idx = copyCartItems.indexOf(isIncart);
      copyCartItems[idx].quantity += 1;
      setCartItems(copyCartItems);
    } else {
      setCartItems([...cartItems, { itemId: item.id, quantity: 1 }]);
    }
  };
  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => (
          <Item item={item} key={idx} handleClick={() => handleClick(item)} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
