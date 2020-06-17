/* eslint-disable react/jsx-props-no-spreading */
// libs
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as firebase from 'firebase/app';
import 'firebase/storage';

// styles
import './styles.scss';

// init firebase
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
});

const Dropzone = () => {
  const onDrop = useCallback((file) => {
    try {
      if (file.length === 0) {
        throw Error('Invalid file');
      }
    } catch (error) {
      console.error(error);
      return;
    }

    const storageRef = firebase
      .storage()
      .ref(`uploaded/${Date.now()}__${file[0].name}`);

    const fileToUpload = new Blob([file[0]], { type: file.type });

    storageRef.put(fileToUpload).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 2097152,
  });

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
