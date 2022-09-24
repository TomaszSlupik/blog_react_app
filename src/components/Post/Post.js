import React from "react";
import "../Post/styled/Post.css";
import { useState } from "react";


const Post = (props) => {
	const [long, setlong] = useState(false);

	const showMoreInfo = () => {
		console.log(`Otwieramy opis`);
		setlong(true);
	};

	const closeMoreInfo = () => {
		setlong(false);
	};

	return (
		<div className="boxs">
			<h2>{props.title}</h2>
			<div className="ingredients">
				<b>Składniki:</b> {props.ingredients}
			</div>
			<div className="underlineingredients"></div>
			{long ? (
				<div>
					<div>{props.description}</div>
					<button onClick={closeMoreInfo}>Zwiń</button>
				</div>
			) : (
				<div>
					<div>{props.shortdescription}</div>
					<button onClick={showMoreInfo}>Czyt. więcej</button>
				</div>
			)}
		</div>
	);
};

const Blog = () => {
	const post = [
		{
			title: "Jajecznica",
			ingredients: "jajka, masło, ser, cebula, pomidor",
			shortdescription: "Rozbić jajka",
			description: "Rozbić jajka i wszytsko wymieszać",
			id: 1,
		},

		{
			title: "Kurczak",
			ingredients: "kurczak, ryż, warzyw",
			shortdescription: "Należy ryż gotować 15 minut...",
			description:
				"Należy ryż gotować 15 minut, następnie kurczaka smażyć na patelni, dodać przyprawy: paprykę słodką oraz gyros. Warzywa gotujemy, a później wszytsko mieszamy. Czas przygotowania: 20min",
			id: 2,
		},
		{
			title: "Płatki",
			ingredients: "płatki owsiane, mleko, owoce, czekolada",
			shortdescription: "Płatki zalać wrzątkiem,",
			description:
				"Płatki zalać wrzątkiem, dolać zimne mleko i dodać wszytskie składniki",
			id: 3,
		},
	];

	const postList = post.map((el) => <Post key={el.id} {...el} />);

	return (
		<div>
			<div className="boxPost">
				<div className="boxPostWrapper">{postList}</div>
			</div>
		</div>
	);
};

export default Blog;
