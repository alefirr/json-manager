import React from 'react';
import { useRef } from 'react';

export const FileInput = () => {
  const fileRef = useRef(null);

  const onChooseFileButtonClick = () => {
    fileRef.current.click();
    console.log('onChooseFileButtonClick');
  };

  const handleFileInputChange = (event) => {
    console.log(event);
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) return;

    console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };

  return (
    <div>
      <input
        style={{ display: 'none' }}
        ref={fileRef}
        type="file"
        onChange={handleFileInputChange}
      />
      <button onClick={onChooseFileButtonClick}>Choose a file</button>
    </div>
  );
};
