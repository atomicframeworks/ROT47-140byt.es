ROT47
=========

A ROT47 encrypter/decrypter implementation in 103 bytes.

"ROT47 is a derivative of ROT13 which, in addition to scrambling the basic letters, also treats numbers and common symbols. Instead of using the sequence A–Z as the alphabet, ROT47 uses a larger set of characters from the common character encoding known as ASCII. Specifically, the 7-bit printable characters, excluding space, from decimal 33 '!' through 126 '~', 94 in total, taken in the order of the numerical values of their ASCII codes, are rotated by 47 positions, without special consideration of case."

[Wikipedia](http://en.wikipedia.org/wiki/ROT13#Variants)

Source
------
```javascript
function r(a,b){return++b?String.fromCharCode((a=a.charCodeAt()+47,a>126?a-94:a)):a.replace(/[^ ]/g,r)}
```

For more information
--------------------

See the [140byt.es](http://140byt.es) site for a showcase of entries (built itself using 140-byte entries!), and follow [@140bytes](http://twitter.com/140bytes) on Twitter.

To learn about byte-saving hacks for your own code, or to contribute what you've learned, head to [the wiki](https://github.com/jed/140bytes/wiki/Byte-saving-techniques).

140byt.es is brought to you by [Jed Schmidt](http://jed.is), with help from Alex Kloss. It was inspired by work from [Thomas Fuchs](http://mir.aculo.us) and [Dustin Diaz](http://www.dustindiaz.com/).

Thanks to
------

[atk](https://github.com/atk): 115b ~> 103b 