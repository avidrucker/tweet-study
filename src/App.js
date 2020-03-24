import React from 'react';
import './App.css';

const Tweet = props => <div>{props.children}</div>

const Avatar = () => <div>Avatar</div>;
	
const Message = () => <span>Insightful Message</span>;

const HandleName = () => <span>@Handle Name</span>;

const TimePosted = () => <span>3h ago</span>;

const Button = () => <span>btn</span>;

function App() {
  return (
    <div className="App">
      <Tweet>
				<Avatar />
				<Message />
				<HandleName />
				<TimePosted />
				<Button />
				<Button />
				<Button />
				<Button />
			</Tweet>
    </div>
  );
}

export default App;
