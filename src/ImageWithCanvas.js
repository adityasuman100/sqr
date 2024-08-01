import React, { useRef, useEffect } from 'react';
import QrCode from './QrCode';

function ImageWithBorder() {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const img = imgRef.current;
    img.onload = () => {
      const borderWidth = 32;
      const borderHeight = 27;
      const borderImage = new Image();
      borderImage.src = "./Border.jpg"; // Replace with your border image path
      borderImage.onload = () => {
        const pattern = context.createPattern(borderImage, "repeat");
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

  const options = {
    ecLevel: "M", //The error correction level of the QR Code
    enableCORS: false, //Enable crossorigin attribute
    size: 250, //The size of the QR Code
    quietZone: 10, //The size of the quiet zone around the QR Code. This will have the same color as QR Code bgColor
    bgColor: "#FFFFFF", //Background color
    fgColor: "#ebb434", //Foreground color
    logoImage:
      "https://cdn.search.brave.com/serp/v2/_app/immutable/assets/brave-logo-dark.Bg87GL4b.svg", //The logo image. It can be a url/path or a base64 value
    logoWidth: 180,
    logoHeight: 40,
    logoOpacity: 1,
    qrStyle: "squares", //Style of the QR Code modules - dots or squares
  };

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      {/* <canvas></canvas> */}
      <img
        ref={imgRef}
        src="./QR.jpg"
        alt="Description"
        style={{ display: "none" }}
      />
      {/* <QrCode options={options} url="https://google.com" /> */}
    </div>
  );
}

export default ImageWithBorder;
