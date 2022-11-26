import React from 'react';

export const Cell = ({ rowValue, keyValue }) => {
  return <input className="cell" value={rowValue[keyValue]}></input>;
};
