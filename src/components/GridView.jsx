import React from 'react';
import { useState, useEffect } from 'react';
import { Cell } from './Cell.jsx';

export const GridView = ({ dataFile }) => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if (dataFile) {
      const keys = dataFile.map((item) => Object.keys(item)).shift();

      setKeys(keys);
      console.log(keys);
    }
  }, [dataFile]);

  // useEffect(() => {
  //   if (dataFile) {
  //     const keysArr = Object.keys(dataFile[0]);
  //     for (let obj of dataFile) {
  //       for (let key in obj) {
  //         keysArr.filter((item) => item !== key);
  //       }
  //     }
  //     setKeys(keysArr);
  //   }
  // }, [dataFile]);

  return (
    <div className="grid-view-container">
      {dataFile?.map((_, indexRow) => (
        <div key={`row-${indexRow}`}>
          {keys.map((val, indexCol) => (
            <Cell
              rowValue={dataFile[indexRow]}
              keyValue={val}
              key={`cell-${indexRow}-${indexCol}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
