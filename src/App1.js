import './styles.css'; // Import the CSS file

function ImageWithBorder() {
  return (
    <div>
      <img
        src='./dhoni.jpg'
        alt='Description'
        className='image-with-border'
        width={500}
        height={500} // Apply the CSS class
      />
    </div>
  );
}

export default ImageWithBorder;
