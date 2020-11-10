import React, { useState } from 'react';
import './App.css';
import DownloadFile from './DownloadFile';

function App() {
  const [memeChoice, setMemeChoice] = useState('tenguy');
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');

  function handleSubmitTop(e) {
    setTop(e.currentTarget.value);
  }

  function handleSubmitBottom(e) {
    setBottom(e.currentTarget.value);
  }

  const memeNames = [
    'tenguy',
    'afraid',
    'apcr',
    'older',
    'aag',
    'atis',
    'tried',
    'biw',
    'stew',
    'blb',
    'bihw',
    'kermit',
    'bd',
    'ch',
    'cbg',
    'wonka',
    'cb',
    'gandalf',
    'keanu',
    'cryingfloor',
    'dsm',
    'disastergirl',
    'live',
    'ants',
    'doge',
    'trump',
    'drake',
    'ermg',
    'facepalm',
    'feelsgood',
    'firsttry',
    'fwp',
    'fa',
    'fbf',
    'fmr',
    'fry',
    'ggg',
    'grumpycat',
    'harold',
    'hipster',
    'icanhas',
    'crazypills',
    'mw',
    'noidea',
    'regret',
    'boat',
    'hagrid',
    'sohappy',
    'captain',
    'bender',
    'inigo',
    'iw',
    'ackbar',
    'happening',
    'joker',
    'ive',
    'jd',
    'll',
    'lrv',
    'leo',
    'away',
    'morpheus',
    'mb',
    'badchoice',
    'mini-keanu',
    'mmm',
    'spongebob',
    'soup-nazi',
    'jetpack',
    'imsorry',
    'red',
    'mordor',
    'oprah',
    'oag',
    'remembers',
    'persian',
    'philosoraptor',
    'jw',
    'patrick',
    'rollsafe',
    'sad-obama',
    'sad-clinton',
    'sadfrog',
    'sad-bush',
    'sad-biden',
    'sad-boehner',
    'saltbae',
    'sarcasticbear',
    'dwight',
    'sb',
    'ss',
    'soa',
    'sf',
    'dodgson',
    'money',
    'snek',
    'sk',
    'sohot',
    'nice',
    'awesome-awkward',
    'awesome',
    'awkward-awesome',
    'awkward',
    'stop-it',
    'fetch',
    'success',
    'scc',
    'ski',
    'aint-got-time',
    'officespace',
    'interesting',
    'toohigh',
    'bs',
    'fine',
    'sparta',
    'ugandanknuck',
    'puffin',
    'whatyear',
    'center',
    'both',
    'winter',
    'xy',
    'buzz',
    'yodawg',
    'yuno',
    'yallgot',
    'gears',
    'bad',
    'elf',
    'chosen',
  ];

  const img = `https://api.memegen.link/images/${memeChoice}/${top}/${bottom}/`;

  return (
    <div className="App">
      <h1>React Meme Generator</h1>
      <img src={img} alt="a random Meme" />
      <div className="meme">
        {/* /* Dropdown Menu */}
        <h3>Choose your meme:</h3>

        <select
          value={memeChoice}
          onChange={(e) => {
            setMemeChoice(e.currentTarget.value);
          }}
        >
          {memeNames.map(function (item, index) {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>

        <h3>Customize your meme:</h3>
        <input placeholder="Top line" onChange={handleSubmitTop} />
        <br />
        <input placeholder="Bottom line" onChange={handleSubmitBottom} />
        <DownloadFile img={img} />
      </div>
    </div>
  );
}

export default App;
