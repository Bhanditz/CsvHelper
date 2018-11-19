import React from "react";
import fs from "fs-extra";
import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";

function createData(name) {
	const className = name.substring(name.lastIndexOf("/"));

	return async () => ({
		className: className,
		data: await fs.readFile(`./src/content/${name}.md`, "utf-8")
	});
}

export default {
	siteRoot: "https://joshclose.github.io",
	basePath: "/CsvHelper/",
	Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
		<Html lang="en-US">
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff" />
				<title>CsvHelper</title>
			</Head>
			<Body>{children}</Body>
		</Html>
	),
	getRoutes: async () => {
		return [
			{
				path: "/",
				component: "src/pages/home"
			},
			{
				path: "/documentation",
				redirect: "/documentation/getting-started"
			},
			{
				path: "/documentation/getting-started",
				component: "src/pages/documentation",
				getData: createData("documentation/getting-started")
			},
			{
				is404: true,
				component: "src/pages/404",
			}
		]
	},
	webpack: (config, { defaultLoaders, stage }) => {
		config.plugins.push(
			new ExtractTextPlugin({
				filename: "[name].css"
			})
		);

		let loaders = []

		if (stage === 'dev') {
			loaders = [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
		} else {
			loaders = [
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1,
						minimize: stage === 'prod',
						sourceMap: false,
					},
				},
				{
					loader: 'sass-loader',
					options: { includePaths: ['src/'] },
				},
			]

			// Don't extract css to file during node build process
			if (stage !== 'node') {
				loaders = ExtractTextPlugin.extract({
					fallback: {
						loader: 'style-loader',
						options: {
							sourceMap: false,
							hmr: false,
						},
					},
					use: loaders,
				})
			}
		}

		config.module.rules = [
			{
				oneOf: [
					{
						test: /\.s(a|c)ss$/,
						use: loaders,
					},
					defaultLoaders.cssLoader,
					defaultLoaders.jsLoader,
					defaultLoaders.fileLoader,
				],
			},
		]
		return config
	},
	onBuild: async () => {
		console.log("Copying build to docs folder.");
		await fs.remove("../docs");
		await fs.copy("./dist", "../docs")
	}
}