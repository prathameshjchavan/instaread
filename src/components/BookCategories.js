import React from "react";
import "./BookCategories.css";

const BookCategories = ({ categories }) => {
	return (
		<div className="bookCategories">
			{categories.map((category, i) => (
				<div className="bookCategories__category" key={i}>
					<p>{category}</p>
				</div>
			))}
		</div>
	);
};

export default BookCategories;
