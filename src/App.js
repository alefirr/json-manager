import React, { useState } from 'react';
import { GridView, FileInput } from './components';
import './App.css';

function App() {
  const [dataFile, setDataFile] = useState();

  return (
    <div className="main-container">
      <FileInput setDataFile={setDataFile} dataFile={dataFile} />
      <GridView dataFile={dataFile} setDataFile={setDataFile} />
    </div>
  );
}

export default App;
