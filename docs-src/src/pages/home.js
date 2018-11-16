import React, { Component } from "react";
import {
	faBolt,
	faBook,
	faBug,
	faClipboardCheck,
	faCode,
	faCogs,
	faDownload,
	faFileExcel,
	faGrinSquintTears,
	faMemory,
	faPlayCircle,
	faSyncAlt,
	faThumbsUp
} from "@fortawesome/free-solid-svg-icons";
import {
	faApple,
	faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-static";

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<section className="hero">
					<div className="hero-body">
						<div className="container">
							<div className="columns">
								<div className="column">
									<h1 className="title is-1">CsvHelper</h1>
									<h2 className="subtitle">A .NET library for reading and writing CSV files. Extremely fast, flexible, and easy to use.</h2>

									<div className="field is-grouped">
										<div className="control">
											<a className="button is-large is-success">
												<span className="icon">
													<FontAwesomeIcon icon={faDownload} />
												</span>
												<span>Download</span>
											</a>
										</div>
										<div className="control">
											<a className="button is-large is-link" href="https://www.nuget.org/packages/CsvHelper/" target="_blank">
												<span className="icon">
													<FontAwesomeIcon icon={faPlayCircle} />
												</span>
												<span>Get Started</span>
											</a>
										</div>
									</div>
								</div>
								<div className="column">
									<img src="/images/logo.png" />
								</div>
							</div>

							<h3 className="title is-3">Features</h3>
							<hr />

							<div className="columns is-multiline">
								<div className="column is-4">
									<h4 className="title is-4 has-text-weight-normal">
										<span className="icon">
											<FontAwesomeIcon icon={faBolt} />
										</span>
										&nbsp;&nbsp;
										<span>Fast</span>
									</h4>
									<p className="subtitle is-6">Compiles classes on the fly for extremely fast performance.</p>
								</div>

								<div className="column is-4">
									<h4 className="title is-4 has-text-weight-normal">
										<span className="icon">
											<FontAwesomeIcon icon={faSyncAlt} />
										</span>
										&nbsp;&nbsp;
										<span>Flexible</span>
									</h4>
									<p className="subtitle is-6">Conservative when writing, liberal when reading.</p>
								</div>

								<div className="column is-4">
									<h4 className="title is-4 has-text-weight-normal">
										<span className="icon">
											<FontAwesomeIcon icon={faThumbsUp} />
										</span>
										&nbsp;&nbsp;
										<span>Easy to Use</span>
									</h4>
									<p className="subtitle is-6">
										Reading and writing is as simple as GetRecords&lt;T&gt;() and WriteRecords(records).
										No configuration required.
									</p>
								</div>

								<div className="column is-4">
									<h4 className="title is-4 has-text-weight-normal">
										<span className="icon">
											<FontAwesomeIcon icon={faCogs} />
										</span>
										&nbsp;&nbsp;
										<span>Highly Configurable</span>
									</h4>
									<p className="subtitle is-6">Feature rich mapping and attribute systems to configure any type of CSV file to any type of class.</p>
								</div>

								<div className="column is-4">
									<h4 className="title is-4 has-text-weight-normal">
										<span className="icon">
											<FontAwesomeIcon icon={faClipboardCheck} />
										</span>
										&nbsp;&nbsp;
										<span><a href="https://tools.ietf.org/html/rfc4180" target="_blank">RFC 4180</a> Compliant</span>
									</h4>
									<p className="subtitle is-6">Adheres to the RFC 4180 standard to ensure compatibility across systems.</p>
								</div>

								<div className="column is-4">
									<h4 className="title is-4 has-text-weight-normal">
										<span className="icon">
											<FontAwesomeIcon icon={faFileExcel} />
										</span>
										&nbsp;&nbsp;
										<span>Graceful Fallback</span>
									</h4>
									<p className="subtitle is-6">When non-standard files are read, fallback will match MS Excel parsing.</p>
								</div>

								<div className="column is-4">
									<h4 className="title is-4 has-text-weight-normal">
										<span className="icon">
											<FontAwesomeIcon icon={faMemory} />
										</span>
										&nbsp;&nbsp;
										<span>Low Memory Usage</span>
									</h4>
									<p className="subtitle is-6">Reading records will yield results so only one record is in memory at a time.</p>
								</div>

								<div className="column is-4">
									<h4 className="title is-4 has-text-weight-normal">
										<span className="icon">
											<FontAwesomeIcon icon={faApple} />
										</span>
										&nbsp;&nbsp;
										<span>Run Anywhere</span>
									</h4>
									<p className="subtitle is-6">
										CsvHelper is built on .NET Standard 2.0 which allows it to be ran
										{" "}
										<a href="https://docs.microsoft.com/en-us/dotnet/standard/net-standard" target="_blank">almost everywhere</a>.
										Older version of .NET are possible if needed.
									</p>
								</div>

								<div className="column is-4">
									<h4 className="title is-4 has-text-weight-normal">
										<span className="icon">
											<FontAwesomeIcon icon={faGithub} />
										</span>
										&nbsp;&nbsp;
										<span>Open Source</span>
									</h4>
									<p className="subtitle is-6">
										Many contributors have helped make CsvHelper the great library it is today.
										Completely free for commercial use. Dual licensed under
										{" "}
										<a href="https://opensource.org/licenses/MS-PL" target="_blank">MS-PL</a> and
										{" "}
										<a href="https://opensource.org/licenses/Apache-2.0" target="_blank">Apache 2</a>.
									</p>
								</div>

							</div>

							<h3 className="title is-3">Help</h3>
							<hr />

							<div className="columns is-multiline">
								<div className="column is-4">
									<h4 className="title is-4 has-text-weight-normal">
										<span className="icon">
											<FontAwesomeIcon icon={faGithub} />
										</span>
										&nbsp;&nbsp;
										<span>Stack Overflow</span>
									</h4>
									<p className="subtitle is-6">
										<a href="https://stackoverflow.com/questions/tagged/csvhelper" target="_blank">Stack Overflow</a>{" "}
										has millions of users in its community just waiting to answer your questions.
										There is only one of me and I'm pretty busy.
										<span className="icon">
											<FontAwesomeIcon icon={faGrinSquintTears} />
										</span>
									</p>
								</div>

								<div className="column is-4">
									<h4 className="title is-4 has-text-weight-normal">
										<span className="icon">
											<FontAwesomeIcon icon={faBook} />
										</span>
										&nbsp;&nbsp;
										<span>Documentation</span>
									</h4>
									<p className="subtitle is-6">
										Learn how to use CsvHelper using the <Link to="/documentation">documentation</Link>{" "}
										or check out some <Link to="/examples">examples</Link>.
									</p>
								</div>

								<div className="column is-4">
									<h4 className="title is-4 has-text-weight-normal">
										<span className="icon">
											<FontAwesomeIcon icon={faBug} />
										</span>
										&nbsp;&nbsp;
										<span>Features Requests and Bugs</span>
									</h4>
									<p className="subtitle is-6">
										If you have a feature request or have found a bug, you can{" "}
										<a href="https://github.com/joshclose/csvhelper/issues" target="_blank">log an issue</a>.
										Please use{" "}
										<a href="https://stackoverflow.com/questions/tagged/csvhelper" target="_blank">Stack&nbsp;Overflow</a>{" "}
										if you have a question.
									</p>
								</div>

							</div>

							<h3 className="title is-3">Contributions</h3>
							<hr />

							<div className="content">
								<p>Want to contribute? Great! Here are a few guidelines.</p>
								<ol>
									<li>If you want to do a feature, post an issue about the feature first. Some features are intentionally left out,
										some features may already be in the works, or I may have some advice on how I think it should be done. I would
										feel bad if time was spent on some code that won't be used.</li>
									<li>If you want to do a bug fix, it might not be a bad idea to post about it too. I've had the same bug fixed by
										multiple people at the same time before.</li>
									<li>All code should have a unit test. If you make a feature, there should be significant tests around the feature.
										If you do a bug fix, there should be a test specific to that bug so it doesn't happen again.</li>
									<li>Pull requests should have a single commit. If you have multiple commits, squash them into a single commit before
										requesting a pull.</li>
									<li>When in Rome: Try and follow the code styling already in place.</li>
								</ol>
							</div>

							<h3 className="title is-3">License</h3>
							<hr />

							<p>Completely free for commercial use. Dual licensed. Choose which ever license suits your needs.</p>
							<p><a href="https://opensource.org/licenses/MS-PL">Microsoft Public License (MS-PL)</a></p>
							<p><a href="https://opensource.org/licenses/Apache-2.0">Apache License, Version 2.0</a></p>
						</div>
					</div>
				</section>
			</div>
		);
	}
};