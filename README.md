# element-boilerplate
A boilerplate to create bel or yo-yo element

### Why

To start write code quickly.

### Intall

```sh
$ npm i element-boilerplate -g
```

### Usage

To create a markdown component for example:

```sh
eb element-markdown
```

### What's in there

```
.
├── LICENSE
├── README.md
├── example
│   ├── index.css
│   └── index.js
├── index.html
├── index.js
├── package.json
└── test
    └── index.js
```

To start the server with wzrd from the example directory so that you can test your code while developing.

```sh
$ npm start
```

To run test

This project has the basic settings to make your repo running test on Travis CI.

Using `standard` to run lint for now.

```sh
$ npm test
```
