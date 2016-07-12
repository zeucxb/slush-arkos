# Slush ARKOS

> A slush generator for a simple ARKOS project.

## How to install and use the generator?

Install the slush:

```sh
$ [sudo] npm install -g slush
```

Install the arkos generator:

```sh
$ [sudo] npm install -g slush-arkos
```

Use the generator:

```sh
$ mkdir myApi
$ cd myApi
$ slush arkos
```

## The generated program

Folders Structure:

	.
	├── configs/
	|   └── init.js
	├── drivers/
	|   |── mongo.js
	|   └── redis.js
	├── helpers/
	|   └── request.js
	├── interpreters/
	|   └── db.js
	├── models/
	|   └── user.js
	├── node-modules/
	├── package.json
	├── routes/
	|   └── user.js
	├── server.js
	├── .eslintrc.json
	└── .gitignore

Running the example:

- `$ npm start`: Start the server.

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/ZeuCxb/slush-arkos/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/ZeuCxb/slush-arkos/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/ZeuCxb/slush-arkos/releases) for detailed changelog.

## License

[MIT License](https://github.com/ZeuCxb/slush-arkos/blob/master/LICENSE.md) © [ZeuCxb](https://www.youtube.com/EuProgramadorOficial)
