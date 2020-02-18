import React from 'react';

function Songs(props) {

	return (
		<div>
			<ul>
				{props.songData.map(jam => 
				<li>
					<p>{jam.song}</p>
					<p>{jam.artist}</p>
					<p>{jam.album}</p>
				</li>
				)}
			</ul>
		</div>
	)
}

export default Songs; 