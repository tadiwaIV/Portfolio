import React, { Component } from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, programmingLanguage } = props;

  const containerStyles = {
    height: 45,
    width: '100%',
    backgroundColor: "#333333",
    marginBottom: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    transition: 'width 1s ease-in-out',
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold'
  }

  return (
  	<div>
	  	<span style={labelStyles}>{`${programmingLanguage}`}</span>
	    <div style={containerStyles}>    
	      <div style={fillerStyles}>        
	      </div>
	    </div>
    </div>
  );
};

export default ProgressBar;