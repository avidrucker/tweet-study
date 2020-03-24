import React from 'react';
import './App.css';

const Tweet = props => (
	<div className={props.className}>{props.children}</div>);

const Avatar = props => <span>{props.symbolIn}</span>;
	
const Message = (props) => <span>{props.textIn}</span>;

const NameWithHandle = (props) => <span>{props.textIn}</span>;

const Time = (props) => <span>{props.textIn}</span>;

const Button = (props) => <span>{props.symbolIn}</span>;

const Inline = props => (
	<span className={props.className + " di"}>{props.children}</span>);

const InlineBlock = props => (
	<span className={props.className + " dib"}>
		{props.children}
	</span>
);
	
const Block = props => (
	<div className={props.className + " db"}>{props.children}</div>);

function App() {
	const symbols = ["<--", "@", "<3", "..."];
	const buttons = symbols.map((x,i) =>
		<Inline key={i.toString()} className="bg-washed-red mh3">
			<Button symbolIn={x} />
		</Inline>
  );

  return (
    <div className="f3 border-box">
      <Tweet className="flex pa3 measure-narrow ba b--black ma3">

				<InlineBlock className="w-20 flex flex-column items-center ">
					<Block className="bg-lightest-blue tc f1 w3 h3 pa1">
						<Avatar symbolIn={"&"} />
					</Block>
				</InlineBlock>

				<InlineBlock className="w-80 f4">
					<Block className="flex flex-row">
						<InlineBlock className="bg-washed-green">
							<NameWithHandle textIn="Your Name @Handle Name" />
						</InlineBlock>
						<InlineBlock>
							<Inline className="ma3">•</Inline>
						</InlineBlock>
						<InlineBlock className="bg-washed-yellow">
							<Time textIn="3h ago"/>
						</InlineBlock>
					</Block>
					<Block className="mv2 pv1">
						<InlineBlock className="bg-washed-purple">
							<Message textIn="Insightful message" />
						</InlineBlock>
					</Block>
					<Block className="flex">
						{buttons}
					</Block>
				</InlineBlock>
			</Tweet>
    </div>
  );
}

export default App;
