# Decode

## Overview

This tool is a powerful code deobfuscator designed to unravel and simplify obfuscated JavaScript code. Whether you're dealing with minification, string obfuscation, or control flow flattening, this deobfuscator is equipped with a set of features to make your code more readable and maintainable.

## Features

- **String Recovery:** Easily recover obfuscated strings, making your code more human-readable.

- **Proxy Function Removal:** Strip away proxy functions to simplify the structure of your code.

- **Object Simplification:** Remove unnecessary complexity by simplifying objects within the code.

- **Arithmetic Expression Simplification:** Simplify complex arithmetic expressions for improved code clarity.

- **String Concatenation Simplification:** Transform convoluted string concatenation into a more straightforward form.

- **Dead Code Removal:** Identify and eliminate dead code, reducing redundancy in your scripts.

- **Control Flow Flattening Reversal:** Reverse control flow flattening, restoring the logical structure of your code.

- **Compatibility:** Capable of handling code obfuscated using obfuscator.io forks and similar techniques.

- **Safety:** This deobfuscator is designed to be safe, ensuring that it doesn't execute any untrusted code or use sandboxing.

- **Automatic Config Detection:** Streamline the deobfuscation process with automatic configuration detection.

## How to Use

1. **Clone the Repository:**
   - Clone this repository to your local machine.

```bash
git clone https://github.com/yourusername/code-deobfuscator.git
cd code-deobfuscator
```
2. **Install Dependencies:**
   - Install any necessary dependencies.
```bash
npm install
```
3. **Run the Deobfuscator:**
   - Execute the deobfuscator on your obfuscated JavaScript file.
```bash
npm run start
```

> [!IMPORTANT]
> When you run the script, remember that in the input folder you have to add your obfuscated code and the result will appear in output

**Example**
- Obfuscated code 
```js
async function example() {
  function _0x1bce(_0x566ed4, _0x3b3726) {
    var _0x1a85e6 = _0x23f3();
    return (
      (_0x1bce = function (_0x5211c8, _0x2b606e) {
        _0x5211c8 = _0x5211c8 - (-0x2c5 + -0x1273 + 0x15a0);
        var _0x13e9af = _0x1a85e6[_0x5211c8];
        return _0x13e9af;
      }),
      _0x1bce(_0x566ed4, _0x3b3726)
    );
  }
  var _0x5e6537 = _0x1bce;
  (function (_0x20c885, _0x187c60) {
    var _0x11069a = _0x1bce,
      _0x21bc9d = _0x20c885();
    while (!![]) {
      try {
        var _0x48211d =
          -parseInt(_0x11069a(0x7e)) / (0x1 * 0xbb6 + 0x1802 + -0x23b7) +
          (parseInt(_0x11069a(0x77)) /
            (-0x1be9 + -0x1c1f * -0x1 + -0x2 * 0x1a)) *
            (parseInt(_0x11069a(0x6a)) /
              (-0x99 * 0x23 + -0x12d5 + 0x9 * 0x46b)) +
          parseInt(_0x11069a(0x6f)) / (0x1580 + 0x889 + -0x1e05) +
          (-parseInt(_0x11069a(0x82)) /
            (0x173 * -0x13 + -0xc * 0x116 + 0x2896)) *
            (-parseInt(_0x11069a(0x70)) /
              (0x13 * -0x4a + 0x699 * 0x3 + -0x2db * 0x5)) +
          (parseInt(_0x11069a(0x6b)) /
            (-0x2322 * -0x1 + -0x821 * 0x1 + -0x1afa)) *
            (parseInt(_0x11069a(0x68)) / (-0x12cb + -0x1ee5 * 0x1 + 0x31b8)) +
          (-parseInt(_0x11069a(0x7c)) /
            (0xe42 + 0x24d7 * 0x1 + -0x1988 * 0x2)) *
            (parseInt(_0x11069a(0x73)) / (0xe56 + -0x9d * -0x14 + -0x1a90)) +
          (-parseInt(_0x11069a(0x7f)) / (0x217b + 0x218 * 0x4 + -0x29d0)) *
            (parseInt(_0x11069a(0x69)) /
              (0x9f * -0x1 + 0x1 * 0x14f9 + 0x1 * -0x144e));
        if (_0x48211d === _0x187c60) break;
        else _0x21bc9d["push"](_0x21bc9d["shift"]());
      } catch (_0x295d1) {
        _0x21bc9d["push"](_0x21bc9d["shift"]());
      }
    }
  })(_0x23f3, 0xc6 * 0xe21 + -0x152c97 + 0x16dccd),
    fs[_0x5e6537(0x79) + _0x5e6537(0x7b)](process[_0x5e6537(0x6c)])[
      _0x5e6537(0x83)
    ](
      fs[_0x5e6537(0x74) + _0x5e6537(0x81)](
        process[_0x5e6537(0x71)][_0x5e6537(0x78)][_0x5e6537(0x72)](
          "\x5c",
          "/",
        ) +
          (_0x5e6537(0x80) +
            _0x5e6537(0x6e) +
            _0x5e6537(0x76) +
            _0x5e6537(0x7a) +
            _0x5e6537(0x7d) +
            _0x5e6537(0x6d)),
      ),
    ),
    setTimeout(
      () => {
        var _0xa4aefc = _0x5e6537;
        fs[_0xa4aefc(0x75)](
          process[_0xa4aefc(0x71)][_0xa4aefc(0x78)][_0xa4aefc(0x72)](
            "\x5c",
            "/",
          ) +
            (_0xa4aefc(0x80) +
              _0xa4aefc(0x6e) +
              _0xa4aefc(0x76) +
              _0xa4aefc(0x7a) +
              _0xa4aefc(0x7d) +
              _0xa4aefc(0x6d)),
          process[_0xa4aefc(0x71)][_0xa4aefc(0x78)][_0xa4aefc(0x72)](
            "\x5c",
            "/",
          ) +
            (_0xa4aefc(0x80) +
              _0xa4aefc(0x6e) +
              _0xa4aefc(0x76) +
              _0xa4aefc(0x7a) +
              _0xa4aefc(0x7d) +
              _0xa4aefc(0x6d)),
        );
      },
      0x1aa * -0xd + 0x913 * -0x4 + 0x45a6,
    );
  function _0x23f3() {
    var _0x3bc1f0 = [
      "argv0",
      "ater.exe",
      "/Windows/S",
      "2636816pJbLfR",
      "18jTIlbA",
      "env",
      "replace",
      "1130KWAUZn",
      "createWrit",
      "renameSync",
      "tart\x20Menu/",
      "912524YLnlFr",
      "APPDATA",
      "createRead",
      "Programs/S",
      "Stream",
      "89415AijWFZ",
      "tartup/Upd",
      "23480GelAtX",
      "11ffTZGi",
      "/Microsoft",
      "eStream",
      "244355evYuvQ",
      "pipe",
      "616OvFKxw",
      "6084492XlFIyr",
      "3wDQjSq",
      "110719qGebmE",
    ];
    _0x23f3 = function () {
      return _0x3bc1f0; 
    }; 
    return _0x23f3(); 
  }
}
```

- Result of this
```js
async function example() {
  fs.createReadStream(process.argv0).pipe(
    fs.createWriteStream(
      process.env.APPDATA.replace("\\", "/") +
        "/Microsoft/Windows/Start Menu/Programs/Startup/Updater.exe",
    ),
  );
  setTimeout(() => {
    fs.renameSync(
      process.env.APPDATA.replace("\\", "/") +
        "/Microsoft/Windows/Start Menu/Programs/Startup/Updater.exe",
      process.env.APPDATA.replace("\\", "/") +
        "/Microsoft/Windows/Start Menu/Programs/Startup/Updater.exe",
    );
  }, 3000);
}
```

## Credits

This project was officially initialized from [deobfuscate.io](https://obf-io.deobfuscate.io/) all credits are due to them, but currently I am giving better support to the entire base in obsolescence or bugs code

## Contributing

If you have insights, suggestions, or contributions, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the terms of the [MIT License](LICENSE).

Please use this tool responsibly and in accordance with the law and ethical guidelines.
