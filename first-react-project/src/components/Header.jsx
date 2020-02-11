import React from "react";

function Header(){
  var header = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  return (
    <div style={header}>
    <h1>Help Queue!</h1>
    </div>
  );
}

export default Header;
