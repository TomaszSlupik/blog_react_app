import React from "react";
import "../Deser/styled/Deser.css";

const Deser = (props) => {
	return (
		<div>
			<div className="deserwrapper">
				<div className="box">
					<div className="boxwrapper">
						<div className="navheader">{props.title_name}</div>
						<div className="time">
							<b>Czas przygotowania: </b>
							{props.time}
						</div>
						<div className="describe">
							<b>Opis: </b>
							{props.description}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const ItemDeser = () => {
	const item = [
		{
			title_name: "Szarlotka",
			time: "120 min",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis autem cupiditate, voluptas quis earum asperiores tempora quidem eum numquam alias, temporibus corporis odio nam cum maxime assumenda expedita ea.",
		},
		{
			title_name: "Sernik",
			time: "100 min",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis autem cupiditate, voluptas quis earum asperiores tempora quidem eum numquam alias, temporibus corporis odio nam cum maxime assumenda expedita ea.",
		},
	];

	const itemList = item.map((el) => <Deser {...el} />);

	return (
		<div>
			<div>{itemList}</div>
		</div>
	);
};

export default ItemDeser;
