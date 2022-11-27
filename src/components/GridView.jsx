import React from 'react';
import { useMemo } from 'react';
import { Cell } from './Cell.jsx';
import produce from 'immer';

export const GridView = ({ dataFile, setDataFile }) => {
  const keys = useMemo(
    () => dataFile?.map((item) => Object.keys(item)).shift(),
    [dataFile]
  );

  const onInputChange = (e, indexRow, val) => {
    const newDataFile = produce(dataFile, (draft) => {
      draft[indexRow][val] = e.target.value;
    });
    setDataFile(newDataFile);
  };
  console.log(dataFile);
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
      {dataFile?.map((obj, indexRow) => (
        <div key={`row-${indexRow}`} className="row-grid-view">
          {keys?.map((val, indexCol) => (
            <Cell
              value={obj[val]}
              onCellEdit={(e) => onInputChange(e, indexRow, val)}
              key={`cell-${indexCol}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
