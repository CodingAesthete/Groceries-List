import React, { useState } from "react";

function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Fried Potatoes"
    },
    {
      id: 2,
      checked: false,
      item: "Pizza Napoletana"
    },
    {
      id: 3,
      checked: false,
      item: "Cheddar Cheese"
    }
  ]);

  function handleCheck(id) {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));

  }

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => {
            return (
              <li className="item" key={item.id}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)} />

                <label
                  style={item.checked ? { textDecoration: 'line-through' } : null}
                  onDoubleClick={() => handleCheck(item.id)}>
                  {item.item}
                </label>
                <button onClick={() => { handleDelete(item.id) }}>Delete</button>
              </li>
            )
          })}
        </ul>) : (<p>No items!</p>)}
    </main >
  )
}

export default Content;
