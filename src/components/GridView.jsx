import React from 'react';
import { useMemo } from 'react';
import { Cell } from './Cell.jsx';
import { Button } from './Button.jsx';
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

  const addRow = () => {
    const newDataFile = produce(dataFile, (draft) => {
      draft.push({});
    });
    setDataFile(newDataFile);
  };

  const deleteRow = () => {
    const newDataFile = produce(dataFile, (draft) => {
      draft.pop();
    });
    setDataFile(newDataFile);
  };

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
      {keys ? (
        <div className="header-container">
          {keys?.map((item, index) => (
            <div key={`header-${index}`} className="header-item">
              {item[0].toUpperCase() + item.slice(1)}
            </div>
          ))}
        </div>
      ) : null}

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
      {dataFile ? (
        <div>
          <Button value={'+'} onClick={addRow} />
          <Button value={'-'} onClick={deleteRow} />
        </div>
      ) : null}
    </div>
  );
};
