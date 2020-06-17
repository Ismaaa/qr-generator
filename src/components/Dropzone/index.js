/* eslint-disable react/jsx-props-no-spreading */
// libs
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

// styles
import './styles.scss';

const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="Dropzone" {...getRootProps()}>
      <input className="Dropzone__input" {...getInputProps()} />
      <p
        className={`Dropzone__drag ${
          isDragActive ? 'Dropzone__drag--active' : ''
        }`}
      >
        Drag and drop some files here, or click to select files
      </p>
    </div>
  );
};

export default Dropzone;
