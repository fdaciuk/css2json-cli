# CSS2JSON

> CLI tool to convert CSS String to JSON

## Installation

For using directly on terminal, install globally:

```console
[sudo] npm i -g css2json-cli
```

For using as npm script, just type:

```console
npm i --save-dev css2json
```

## Usage

```console
css2json <css-string>
```

### Example

Input:

```console
css2json "font: 14px Arial, sans-serif; color: #fff"
```

Output:

```console
{ "font": "14px Arial, sans-serif", "color": "#fff" }
```

## Todo

- [ ] Convert all CSS file
- [ ] Option to convert just properties
- [ ] Option to return as JS object

## License

[MIT License]() &copy; Fernando Daciuk
