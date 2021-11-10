import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

async function postToApi(name) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ name });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch("http://localhost:3001", requestOptions);
  return await response.text();
}

function App() {
  const [value, setValue] = useState('');
  const [response, setResponse] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await postToApi(value);
    setResponse(result);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={(e) => { setValue(e.target.value); }} />
          <button>Отправить</button>
        </form>
        <div>{response}</div>
      </header>
    </div>
  );
}

export default App;
