import React from "react";
import "../Navigation/styled/Navigation.css";

const TextNavigation = (props) => {
	return (
		<div>
			<div className="textnav">{props.textnav}</div>
		</div>
	);
};

const Navigation = () => {
	return (
		<div>
			<div className="wrappernav">
				<div className="displaynav">
					<TextNavigation  textnav="Dania główne"/>
                    <div className="underline"></div>
				</div>
			</div>
		</div>
	);
};



export default Navigation;

