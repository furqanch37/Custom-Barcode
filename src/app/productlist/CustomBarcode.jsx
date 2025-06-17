// components/CanvasBarcode.jsx
import React, { useEffect, useRef } from 'react';
import bwipjs from 'bwip-js';

const CanvasBarcode = ({ value, width = 300, height = 50 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    try {
      bwipjs.toCanvas(canvasRef.current, {
        bcid: 'code128',       // Barcode type
        text: value,           // Text to encode
        scale: 2,              // Multiplier for bar width
        height: height,        // Bar height in px
        includetext: false,    // Text below barcode
        backgroundcolor: 'FFFFFF',
      });
    } catch (e) {
      console.error('Barcode generation error:', e);
    }
  }, [value, width, height]);

  return <canvas ref={canvasRef} style={{ width, height }} />;
};

export default CanvasBarcode;
