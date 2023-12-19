import React from "react";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppinglist")));

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  function setAndSaveItem(newItems) {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  function addItem(item) {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItem(listItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) {
      return;
    }
    addItem(newItem);
    setNewItem('');
  }

  function handleCheck(id) {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItem(listItems);
  }

  function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItem(listItems);
  }

  return (
    <div>
      <Header title="Groceries" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit} />
      <SearchItem
        search={search}
        setSearch={setSearch} />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  )
}

export default App;