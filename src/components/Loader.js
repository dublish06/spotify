import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <RotatingLines
      strokeColor="#4caf50"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </div>
);

export default Loader;
