import React, { useRef, useEffect } from 'react';

function ImageWithBorder() {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const img = imgRef.current;

    img.onload = () => {
      const borderWidth = 32;
      const borderHeight = 27;
      const borderImage = new Image();
      borderImage.src = './Border.jpg'; // Replace with your border image path

      borderImage.onload = () => {
        const pattern = context.createPattern(borderImage, 'repeat');

        // Set canvas size to the image size plus border
        canvas.width = img.width + 2 * borderWidth;
        canvas.height = img.height + 2 * borderHeight;

        // Fill border
        context.fillStyle = pattern;
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the main image
        context.drawImage(img, borderWidth, borderHeight);

        // Convert to Data URL
        const dataURL = canvas.toDataURL();
        // console.log(dataURL);
      };
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <img
        ref={imgRef}
        src='./QR.jpg'
        alt='Description'
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default ImageWithBorder;
