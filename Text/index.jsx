import React, { useState } from 'react'

const Text = () => {
    const [Text,setText] =useState("Homework"); 
    const [color,setColor]=useState("black");
    const [fontSize,setFontsize]=useState(50);
   
    const handleChangeText = () => {
      setText("Text has been changed");
    };

    const handleChangeColor = () => {
      setColor("red");
    };

    const handleChangeFontsize = () => {
      setFontsize(fontSize + 2);
    };

  return (
    <div>
        <button onClick={handleChangeText}>Change Text</button>
        <button onClick={handleChangeColor}>Change Color</button>
        <button onClick={handleChangeFontsize}> Change Size</button>
        <h1 style={{
          color:color,
          fontSize:fontSize,
         
        }}>{Text}</h1>
    </div>
  )
}

export default Text