import React from 'react';
import './App.css';

const Tweet = props => <div>{props.children}</div>

function App() {
  return (
    <div className="App">
      <Tweet>
				I am a tweet!
			</Tweet>
    </div>
  );
}

export default App;
