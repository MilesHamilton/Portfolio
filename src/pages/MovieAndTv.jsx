import React from "react"
import ProjectContent from "../components/ProjectContent"

export default function MovieAndTv() {
	return (
		<div className="page">
			<ProjectContent
				title="Flixter"
				gif={require("../components/CSS/cinema.jpg")}
				descriptionTitle="For your Viewing Pleasure"
				description="Combining the power of Spotify and The Movie Database this app allows you to discover popular movie and tv soundtracks quickly"
				challenges={[
					{
						challenge:
							"Utilizing and connecting Spotify API and using their Oauth for anyone with a spotify account to acces their services",
					},
					{
						challenge:
							'In order to have access to 1000s of movies supplied by "The Movie Database" I needed to impliment frontend pagination',
					},
					{
						challenge:
							"The implementation of Typescript which helped with propogating functions throughout the app and assigning types to state variables",
					},
				]}
				tech={[
					{ tech: "TMDB API" },
					{ tech: "React.js" },
					{ tech: "Spotify API" },
				]}
				github="https://github.com/MilesHamilton/Movies-and-Tv-Finder"
				link="https://flixter.app"
			/>
		</div>
	)
}
