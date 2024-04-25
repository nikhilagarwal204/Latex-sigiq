import './App.css';
import data from './data.json';
import Latex from 'react-latex';
import React from 'react';

function App() {

  const renderLatexChunk = (chunk) => {
    const boldRegex = /\*\*(.*?)\*\*/g;
    let parts = chunk.split(boldRegex);
    let result = [];

    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        // Regular text
        result.push(<span key={i}><Latex>{parts[i]}</Latex></span>);
      } else {
        // Bold text
        result.push(<b key={i}><Latex>{parts[i]}</Latex></b>);
      }
    }

    return result;
  };

  const renderChunk = (chunk) => {
    const boldRegex = /\*\*(.*?)\*\*/g;
    let parts = chunk.split(boldRegex);
    let result = [];

    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        // Regular text
        result.push(<span key={i}>{parts[i]}</span>);
      } else {
        // Bold text
        result.push(<b key={i}>{parts[i]}</b>);
      }
    }

    return result;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ margin: "2%" }}>
          {data.map((item, index) => (
            <div className="latexdiv" key={index}>
              <div className="scroll-container">
                {item.latex ?
                  renderLatexChunk(item.chunk)
                  :
                  renderChunk(item.chunk)}
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;