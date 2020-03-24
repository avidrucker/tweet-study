import React from 'react';
import './App.css';

const Tweet = props => <div>{props.children}</div>

const Avatar = () => <div>Avatar</div>;
	
const Message = () => <span>Insightful Message</span>;

const NameWithHandle = () => <span>@Handle Name</span>;

const Time = () => <span>3h ago</span>;

const Button = () => <span>btn</span>;

const InlineBlock = props => (
	<div styles={{"diplay":"inline-block"}}>{props.children}</div>
);
	
const Block = props => <div>{props.children}</div>;

function App() {
  return (
    <div className="App">
      <Tweet>
				<InlineBlock>
					<Avatar />
				</InlineBlock>
				<InlineBlock>
					<Block>
						<NameWithHandle />
						<Time />
						<Message />
					</Block>
					<Block>
						<Button />
						<Button />
						<Button />
						<Button />
					</Block>
				</InlineBlock>
			</Tweet>
    </div>
  );
}

export default App;
