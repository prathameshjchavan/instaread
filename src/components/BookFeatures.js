import React from "react";
import "./BookFeatures.css";

const BookFeatures = ({ features }) => {
	return (
		<div className="bookFeatures">
			{features.map(({ img, title }, i) => (
				<div key={i} className="bookFeatures__feature">
					<img src={img} alt={title} />
					<p>{title}</p>
				</div>
			))}
		</div>
	);
};

export default BookFeatures;
