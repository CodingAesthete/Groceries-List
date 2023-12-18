import React from "react";

function Header(props) {
  return (
    <header>
      <h1>{props.title} List</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Def Title"
}

export default Header;