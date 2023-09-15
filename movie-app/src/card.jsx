import React from 'react';

const Card = ({ movie }) => {
	return (
		<div className="filme">
			<div>
				<p>{movie.Title}</p>
			</div>
			<div>
				<img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
			</div>
			<div>
				<span>{movie.Type}</span>
				<h3>{movie.Title}</h3>
			</div>
		</div>
	)
}
export default Card;