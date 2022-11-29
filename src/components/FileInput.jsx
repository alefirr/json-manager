import React from 'react';
import { useRef } from 'react';

export const FileInput = ({ setDataFile, dataFile }) => {
  const fileRef = useRef(null);

  const onChooseFileButtonClick = () => {
    fileRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) return;

    event.target.value = null;

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        setDataFile(data);
        console.log(data);
      } catch (error) {
        alert('Invalid JSON file');
      }
    };

    reader.readAsText(fileObj);
  };

  const onSaveFileButtonClick = () => {
    if (!dataFile) {
      alert('Don`t hurry to save an empty file');
      return;
    }
  };

  return (
    <div className="file-input-container">
      <input
        style={{ display: 'none' }}
        ref={fileRef}
        type="file"
        onChange={handleFileInputChange}
        className="file-input"
      />
      <button onClick={onChooseFileButtonClick} className="file-input-button">
        Choose a file
      </button>
      <button
        className="file-input-button save-button"
        onClick={onSaveFileButtonClick}
      >
        Save
      </button>
    </div>
  );
};
