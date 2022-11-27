import React from 'react';
import { useRef } from 'react';

// import { useState, useEffect } from 'react';

export const Cell = ({ value, onCellEdit }) => {
  const inputRef = useRef(null);

  const onEnterClick = (e) => {
    if (e.key === 'Enter') {
      inputRef.current.blur();
    }
  };

  const checkValue = () => {
    switch (typeof value) {
      case 'object':
        return JSON.stringify(value);
      case 'boolean':
        return JSON.stringify(value);
      default:
        return value;
    }
  };

  return (
    <input
      ref={inputRef}
      value={checkValue()}
      onChange={onCellEdit}
      onKeyDown={onEnterClick}
      className="cell"
    />
  );
};
