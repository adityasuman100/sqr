import ImageWithBorder from './ImageWithCanvas';
import { toPng } from 'html-to-image';
import { useRef } from 'react';
import { usePDF } from 'react-to-pdf';
import { useReactToPrint } from 'react-to-print';
import './styles.css';
import { useToImage } from '@hcorta/react-to-image';


function DivToImage() {
  const divRef = useRef(null);
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
  const upiIdDummy = 'abc-def@okhdfc';
  const handlePrint = useReactToPrint({
    content: () => divRef.current,
  });
  const { ref, isLoading, getSvg, dataURL, error } = useToImage();


  const handleConvert = async () => {
    if (divRef.current === null) {
      return;
    }
    try {
      const data = await toPng(divRef.current);
      console.log(typeof data);
      console.log(data.length);
      console.log(data);
    } catch (err) {
      console.error('Failed to convert div to data URI:', err);
    }
  };

  function onCopyBtnClick() {
    navigator.clipboard.writeText(upiIdDummy);
  }

  return (
    <div className='bg'>
      <div className={'container'}>
        <div ref={targetRef}>
          <div id='main' ref={ref} className={'sub-container'}>
            <h2>Image to Be Rendered</h2>
            <ImageWithBorder />
            <h3>Store Id: 15320</h3>
            <p>Pine Labs</p>
          </div>
        </div>
        <button onClick={getSvg}>Convert to Data URI</button>
        <button onClick={handlePrint}>Print</button>
        <button onClick={() => toPDF()}>Download PDF</button>
      </div>
      <h3>Copy to Clipboard Functionality</h3>
      <div>
        <span>UPI ID: {upiIdDummy} </span>
        <button onClick={onCopyBtnClick}>Copy</button>
      </div>
      <div>
        {isLoading && "Loading..."}
        {error && JSON.stringify(error)}
        {dataURL && JSON.stringify(dataURL)}
      </div>
    </div>
  );
}

export default DivToImage;
