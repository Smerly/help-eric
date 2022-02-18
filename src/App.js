import React, { useEffect, useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Tweet from './tweet.js';
import './App.css';
import Recipe from './Recipe';
import Selection from './Selection.js';

function App() {
	const [counter, setCounter] = useState([0, 0, 0]);
	const [users, setUsers] = useState([
		{ name: 'e', message: 'hello' },
		{ name: 'd', message: 'hello' },
		{ name: 'f', message: 'hello' },
	]);
	useEffect(() => {
		console.log('run');
	}, [counter]);

	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('');

	const getRecipes = async () => {
		const response = await fetch();
		const data = await response.json();
		console.log(data);
	};
	const updateSearch = (e) => {
		setSearch(e.target.value);
	};
	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
	};

	const [total, SetTotal] = useState(0);
	const getTotal = () => {};

	console.log(counter);

	return (
		<div className="app">
			<form className="searh form" onSubmit={getSearch}>
				<input
					className="search-bar"
					type="text"
					value={search}
					onChange={updateSearch}
				/>
				<button className="search-button" type="submit">
					search
				</button>
			</form>
			<h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
			{counter.map((val, i) => (
				<Selection
					value={val}
					increment={() => {
						const newCount = [...counter];
						newCount[i] = val + 1;
						setCounter(newCount);
					}}
				/>
			))}
			<button
				onClick={() => {
					let temp = 0;
					counter.forEach((each) => {
						temp += each;
						SetTotal(temp);
					});
				}}
			>
				{' '}
				Submit
			</button>

			{total}
		</div>
	);
}

export default App;
