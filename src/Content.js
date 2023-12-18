import React, { useState } from "react";
import ItemList from "./ItemList";

function Content({ items, handleCheck, handleDelete }) {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (<p>No items!</p>)
      }
    </main >
  )
}

export default Content;
