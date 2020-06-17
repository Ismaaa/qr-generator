// libs
import React from 'react';
import Header from '../Header';
import Dropzone from '../Dropzone';

// styles
import './styles.scss';

const QRGenerator = () => {
  return (
    <div className="QRGenerator">
      <Header />
      <div className="QRGenerator__content">
        <div className="QRGenerator__form">
          <Dropzone />
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;
