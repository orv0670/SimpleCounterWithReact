import React from "react";
//create your first component
export const Home = properties => {
	let numbersArray = properties.number.split("");
	const howManyCeros = 9 - numbersArray.length;
	for (let i = 0; i < howManyCeros; i++) {
		numbersArray.splice(0, 0, "0");
	}

	return (
		<h1 className="d-flex" style={{ color: "red" }}>
			<div className="Clock">
				<i className="far fa-clock" style={{ color: "black" }} />
			</div>
			{numbersArray.map((num, i) => (
				<div key={i}>{num}</div>
			))}
		</h1>
	);
};
