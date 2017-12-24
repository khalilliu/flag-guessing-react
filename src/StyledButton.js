import React, {Component} from 'react';

const StyledButton = ({text,onClick,type}) => {
  return(
    <button
      type={type || 'button'}
      onClick={onClick}
      style={{
        backgroundColor: "#6b93d6",
        borderRadius: "4px",
        border: "none",
        color: "white",
        padding: "4px 10px",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "1em",
      }}
    >{text}</button>
  )
}


export default StyledButton;