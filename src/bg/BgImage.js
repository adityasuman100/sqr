import React from "react";
import QrCode from "../QrCode";
import "./styles.css";
import { toJpeg, toPng, toSvg } from "html-to-image";
import { useRef } from "react";
import download from "downloadjs";

function BgImage() {
  const divRef = useRef(null);
  const options = {
    ecLevel: "M", //The error correction level of the QR Code
    enableCORS: false, //Enable crossorigin attribute
    size: 250, //The size of the QR Code
    quietZone: 10, //The size of the quiet zone around the QR Code. This will have the same color as QR Code bgColor
    bgColor: "#FFFFFF", //Background color
    fgColor: "#ebb434", //Foreground color
    logoImage: "./logo192.png", //The logo image. It can be a url/path or a base64 value
    logoWidth: 180,
    logoHeight: 40,
    logoOpacity: 1,
    qrStyle: "squares", //Style of the QR Code modules - dots or squares
  };
  const handleConvert = async () => {
    if (divRef.current === null) {
      console.log("div ref is null");
      return;
    }
    try {
      const data = await toJpeg(divRef.current);
      console.log(typeof data);
      console.log(data.length);
      console.log(data);
      // download(data, "qr.png", "image/png");
      // download(data, "qr.svg", "image/svg+xml");
      download(data, "qr.jpeg", "image/jpeg");
    } catch (err) {
      console.error("Failed to convert div to data URI:", err);
    }
  };
  return (
    <>
      <div ref={divRef} className="qrContainer">
        <QrCode options={options} url="https://google.com" />
      </div>
      <button onClick={() => handleConvert()}>generate dataUrl</button>
    </>
  );
}

export default BgImage;
