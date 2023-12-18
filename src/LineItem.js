import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function LineItem({ item, handleCheck, handleDelete }) {
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
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => { handleDelete(item.id) }}>
      </FaTrashAlt>
    </li>
  )
}

export default LineItem;