import React from "react";

function Body({ children, color }) {
  return (
    <div className="fondo" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}

export default Body;
