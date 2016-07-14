# Slush Arkos [![Build Status](https://secure.travis-ci.org/ZeuCxb/slush-arkos.png?branch=master)](https://travis-ci.org/ZeuCxb/slush-arkos) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-arkos.png)](http://badges.enytc.com/for/npm/slush-arkos)

> A slush generator for ARKOS projects.


## Getting Started

Install `slush-arkos` globally:

```bash
$ [sudo] npm install -g slush-arkos
```

### Usage

Create a new folder for your project:

```bash
$ [sudo] mkdir my-slush-arkos
```

Run the generator from within the new folder:

```bash
$ [sudo] cd my-slush-arkos && slush arkos
```

### The generated program

Folders Structure:

	.
	├── configs/
	|   └── init.js
	├── drivers/
	|   |── mongo.js
	|   |── mongo_config.js
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
	└── tests/
	    └── users.js

Running the example:

- `$ npm start`: Start the server.
- `$ npm test`: Start the server tests.

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/ZeuCxb/slush-arkos/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/ZeuCxb/slush-arkos/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/ZeuCxb/slush-arkos/releases) for detailed changelog.

## License

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[MIT License](https://github.com/ZeuCxb/slush-arkos/blob/master/LICENSE.md) © [Zeu Cxb](https://www.youtube.com/EuProgramadorOficial)
