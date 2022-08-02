import React, { Component } from "react"
import "./CSS/projectContent.css"
import { Link } from "react-router-dom"

export class ProjectContent extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<nav className=" z-depth-0 white router-nav">
					<Link to="/home">
						<a href="#" className="brand-logo left">
							<div className="logo router-logo">MH</div>
						</a>
					</Link>
					<div className="ProjectContent_title">
						<h3>{this.props.title}</h3>
					</div>
				</nav>
				<div className="container">
					<div className="col s12">
						<div className="ProjectContent_wrapper">
							<div className="ProjectContent_links">
								<div className="ProjectContent_site">
									<a
										href={this.props.link}
										rel="noopener noreferrer"
										target="_blank"
										className="ProjectContent__info"
									>
										Visit Site
									</a>
								</div>
								<div className="ProjectContent_github">
									<a
										href={this.props.github}
										rel="noopener noreferrer"
										target="_blank"
										className="ProjectContent__info"
									>
										Visit Github
									</a>
								</div>
							</div>

							<div className="ProjectContent_gif">
								<img src={this.props.gif}></img>
							</div>
							<div className="ProjectContent_description">
								<h6>{this.props.descriptionTitle}</h6>
								<p>{this.props.description}</p>
							</div>
							<div className="ProjectContent_infowrapper">
								<div className="ProjectContent_challenge">
									<p>
										<strong>Challenges:</strong>
									</p>
									<ul>
										<p>
											{this.props.challenges.map((elm) => {
												return <li>✦ {elm.challenge}</li>
											})}
										</p>
									</ul>
								</div>

								<div className="ProjectContent_tech">
									<p>
										<strong>Stack:</strong>
									</p>
									<ul>
										<p>
											{this.props.tech.map((elm) => {
												return <li>{elm.tech}</li>
											})}
										</p>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ProjectContent
