# string-tunings

> :guitar: API for the tunings of string instruments

Standard and common tunings for:

* Guitar
* Bass
* Ukulele
* Banjo
* Mandolin
* Cello
* Viola
* Violin

## Install

The tunings are simply a [JSON file](https://github.com/PirtleShell/string-tunings/blob/master/tunings.json) that can be used anywhere.

```sh
$ npm install --save string-tunings
```

## Usage

All instruments have a `standard` key. Many have more. The tunings are `String`s on note letters, generally from low notes to high notes (_ie._ top to bottom string for guitar-like instruments, outermost to innermost for violin-like instruments).


```js
var tunings = require('string-tunings');

tunings.guitar.standard
//=> "EADGBE"

tunings.guitar.open.G
//=> "DGDGBD"

tunings.banjo.sawmill
//=> "GDGBE"

tunings.toArray(tunings.ukulele.soprano)
//=> [ 'A', 'D', 'F#', 'B' ]
```

## Contributing

**Contributions are welcome.** Keep the instruments alphabetically ordered for easy reading. Stay practical.

## API

### toArray
Convert the strings in the JSON to an array of note names.

example:
```js
tunings.toArray(tunings.guitar.drop.Db)
//=> [ 'Db', 'Ab', 'Db', 'Gb', 'Bb', 'Eb' ]

tunings.toArray(tunings.violin.cajun)
//=> [ 'F', 'C', 'G', 'D' ]
```

## License

MIT &copy; 2016 [Robert Pirtle](https://pirtle.xyz/)
