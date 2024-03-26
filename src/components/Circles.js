import '../styles/Circles.css'
import './functions'
import React, { useState } from 'react';

function Circle() {
  const colors = ['#ff6347', '#4682b4', '#90ee90', '#ffa500', '#8a2be2'];
  const [color, setColor] = useState('#ff6347'); // Default color

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div className="circle" style={{ backgroundColor: color }} onClick={changeColor}></div>
  );
}

export default Circle;
