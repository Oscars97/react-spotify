import React from "react";
import PropTypes from "prop-types";
//create your first component
export class Songs extends React.Component {
	constructor() {
		super();

		this.state = {
			fetchData: []
		};
	}
	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(response => response.json())
			.then(data => {
				this.setState({ fetchData: data });
			});
	}

	render() {
		return (
			<div className="image-box">
				<h1>Canciones:</h1>
				<div className="canciones">
					<ul>
						{this.state.fetchData.map((cancion, i) => {
							return (
								<li
									onClick={e => {
										let newArray = cancion.url.split("/");

										let ultimaPosicion =
											newArray[newArray.length - 1];

										let urlCompleta =
											"https://assets.breatheco.de/apis/sound/" +
											cancion.url;

										this.props.setSong(urlCompleta);
									}}
									key={i}>
									{" "}
									{i + " " + cancion.name}{" "}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}
Songs.propTypes = {
	setSong: PropTypes.function,
	song: PropTypes.string
};
export default Songs;
