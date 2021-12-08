import React from 'react';

const Circle = (props) => {
  const {color,disabled,active, click}=props
    return (
         <div
        style={{ backgroundColor: color, 
          pointerEvents:disabled? "auto":"none"}}
        className={`circle ${active ? "active" : ""}`}
        onClick={click}
      >
      </div>
    );
};

export default Circle;