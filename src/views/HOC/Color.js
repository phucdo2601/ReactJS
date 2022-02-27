import React from "react";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Color = (WrappedComponent) => {
  const colorRandom = getRandomColor();

  //can truyen ve tat ca cac prop cua component dc boc
  return (props) => (
    <div style={{ color: colorRandom }}>
      {/* phai chuyen lai tat ca cac prop cua component dc nap */}
      <WrappedComponent {...props} />
    </div>
  );
};

export default Color;
