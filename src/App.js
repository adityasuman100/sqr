import mergeImages from 'merge-images';
import './App.css';

function App() {
  function test() {
    console.log('Hello');
    mergeImages([
      { src: './yellow.jpg', opacity: 0.8 },
      { src: './dhoni.jpg', opacity: 0.3 },
    ])
      .then((data) => {
        console.log(data);
        return (document.querySelector('img').src = data);
      })
      .catch((err) => {
        console.error(err.message);
        console.log(err.stack);
      });
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <img id='img' />
      {/* <img
        id="img"
        src="https://img.freepik.com/free-vector/gradient-abstract-with-diagonal-lines-background_23-2150620280.jpg"
        height="500"
        width="500"
      /> */}
      <button type='button' onClick={test}>
        {' '}
        Click
      </button>
    </div>
  );
}

export default App;
