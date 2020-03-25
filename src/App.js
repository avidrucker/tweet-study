import React from 'react';
import './App.css';

const Tweet = props => (
	<Block className="flex pa3 measure-narrow ba b--black ma3">

		<InlineBlock className="w-20 flex flex-column items-center ">
			<Block className="bg-lightest-blue tc f1 w3 h3 pa1">
				<Avatar symbolIn={props.symbol} />
			</Block>
		</InlineBlock>

		<InlineBlock className="w-80 f4">

			<Block className="flex flex-row">

				<InlineBlock className="bg-washed-green">
					<NameWithHandle textIn={`${props.name} @${props.handle}`} />
				</InlineBlock>

				<InlineBlock>
					<Inline className="ma3">•</Inline>
				</InlineBlock>

				<InlineBlock className="bg-washed-yellow">
					<Time textIn={`${props.time}`}/>
				</InlineBlock>

			</Block>

			<Block className="mv2 pv1">
				<InlineBlock className="bg-washed-purple">
					<Message textIn={`${props.message}`} />
				</InlineBlock>
			</Block>

			<ButtonList />

		</InlineBlock>

	</Block>);

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
	<section className={props.className + " db"}>{props.children}</section>);

function ButtonList() {
	const symbols = ["<--", "@", "<3", "..."];
	const buttons = symbols.map((x,i) =>
		<Inline key={i.toString()} className="bg-washed-red mh3">
			<Button symbolIn={x} />
		</Inline>
  );
	return (<Block className="flex">{buttons}</Block>);
}

function App() {
  return (
    <main className="f3 border-box">
      <Tweet
				symbol={"&"}
				name="Joe"
				handle="MightyJoe"
				time="3h ago"
				message="I live for cucumbers." />

			<Tweet
				symbol={"J"}
				name="Jenny"
				handle="JnEfrmDaBlak"
				time="15min ago"
				message="I'm still Jenny from the block yo" />
    </main>
  );
}

export default App;
