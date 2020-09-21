import React, { useState } from 'react';
import './App.css';

function App() {
  const [meme, setMeme] = useState('');
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');

  function handleSelectMeme(e) {
    setMeme(e.currentTarget.value);
  }

  function handleSubmitTop(e) {
    setTop(e.currentTarget.value);
  }

  function handleSubmitBottom(e) {
    setBottom(e.currentTarget.value);
  }

  fetch('https://api.memegen.link/images/')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log('ERROR'));

  const memeNames = ['kermit', 'tenguy', 'afraid'];

  const link = 'https://api.memegen.link/images/';

  const img = `${link}${memeNames}${top}/${bottom}/.png?watermark=none`;

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Meme Generator</h1>

        {/* /* Dropdown Menu */}
        <label>Choose a meme:</label>
        <select onClick={handleSelectMeme}>
          <option value={meme}>{memeNames[0]}</option>
          <option value={meme}>{memeNames[1]}</option>
          <option value={meme}>{memeNames[2]}</option>
        </select>

        <img className="meme" src={img} alt="a random Meme" />

        <p>
          <h3>Customize your meme:</h3>
          <label>Top </label>
          <input value={top} onChange={handleSubmitTop}></input>
          <br />
          <label>Bottom </label>
          <input onChange={handleSubmitBottom}></input>
        </p>
        <p>
          <button onclick>Download meme</button>
        </p>
      </header>
    </div>
  );
}

export default App;
