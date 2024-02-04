import { ThreeCircles } from 'react-loader-spinner';
import React from "react";

export const Loader = () => {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="var(--lightBlue)"
      ariaLabel="three-circles-loading"
      wrapperStyle={{
        position: 'fixed',
        display: 'flex',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'var(--colorWrapperLoader)',
        zIndex: '10000',

      }}
      wrapperClass=""
    />
  );
};
