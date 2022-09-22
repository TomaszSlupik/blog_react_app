import React from "react";
import "../Post/styled/Post.css";

const Post = (props) => {
	return (
		<div className="boxs">
			<h2>{props.title}</h2>
			<h3>{props.ingredients}</h3>
			<button>Zamów</button>
		</div>
	);
};

const Blog = () => {
	const post = [
		{
			title: "Jajecznica",
			ingredients: "Składniki: jajka, masło, ser, cebula, pomidor",
			id: 1,
		},

		{
			title: "Kurczak",
			ingredients: "kurczak, ryż, warzyw",
			id: 2,
		},
		{
			title: "Płatki",
			ingredients: "płatki owsiane, mleko, owoce, czekolada",
			id: 3,
		},
	];

	const postList = post.map((el) => (
		<Post title={el.title} ingredients={el.ingredients} key={el.id} />
	));

	return (
		<div>
			<div className="boxPost">
				<div className="boxPostWrapper">
					{postList}
				</div>
			</div>
		</div>
	);
};

export default Blog;
