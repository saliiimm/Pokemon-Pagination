import React from 'react';

const Pagination = ({ text, changeUrl, url }) => {
  let buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '2rem',
    border: 'none',
    borderRadius: '15px',
    width: '20%',
    cursor: 'pointer',
    padding: '20px',
    margin: '10px',
  };
  return (
    <button style={buttonStyle} onClick={() => changeUrl(url)}>
      {text}
    </button>
  );
};

export default Pagination;
