import React, { useState, useRef, useEffect } from "react";
import Songs from "./Songs.js";

const Reproductor = () => {
	let [song, setSong] = useState("");
	let [playing, setPlaying] = useState("");

	const cutName = () => {
		let array = song.split("/");
		setPlaying(array[array.length - 1]);
	};
	// Referencias en React Hooks
	const audioRef = useRef();

	// Hook useEffect
	useEffect(() => {
		// AUDIO API: https://www.w3schools.com/jsref/dom_obj_audio.asp
		if (audioRef.current) {
			audioRef.current.src = song;
		}
	}, [song]);

	return (
		<div>
			<Songs setSong={setSong} song={song} />
			<p>
				Currently playing <strong>{playing}</strong>
			</p>
			<div className="controles">
				<audio onMouseEnter={cutName} controls ref={audioRef}>
					<source src={song} type="audio/ogg" />
					<source src={song} type="audio/mpeg" />
					Your browser does not support the audio tag.
				</audio>
			</div>
		</div>
	);
};

export default Reproductor;
