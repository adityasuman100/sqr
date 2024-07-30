import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './DivToImage';
import App from './ReactPdf/ReactPdf';
import { renderToString } from 'react-dom/server';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <button
      onClick={async () => {
        // await renderToFile(<App />, `${__dirname}/my-doc.pdf`);
        const value = await renderToString(<App />);
        console.log(value);
      }}
    >
      download pdf
    </button>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
