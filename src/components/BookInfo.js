import React, { useEffect, useState } from "react";
import BookCategories from "./BookCategories";
import BookFeatures from "./BookFeatures";
import "./BookInfo.css";

const initialData = {
	title: "",
	genre: "",
	author: "",
	bookFeatures: [],
	bookCategories: [],
};

const BookInfo = () => {
	const [bookData, setBookData] = useState(initialData);

	useEffect(() => {
		fetch("/bookData.json")
			.then((res) => res.json())
			.then((data) => setBookData(data));
	}, []);

	return (
		<div className="bookInfo">
			<div>
				<img
					src={bookData.img}
					width={250}
					height={400}
					className="bookInfo__image"
					alt={bookData.title}
				/>
			</div>
			<div className="bookInfo__details">
				<h2>{bookData.title}</h2>
				<h3>{bookData.genre}</h3>
				<p>{bookData.author}</p>
				<BookFeatures features={bookData.bookFeatures} />
				<BookCategories categories={bookData.bookCategories} />
			</div>
		</div>
	);
};

export default BookInfo;
