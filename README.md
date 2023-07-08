# Chrome extension for converting blockchain numbers

Convert wei numbers to human readable numbers. That's integers with 18 decimals.

For example, 123423400000000000000000 wei is converted to 123,423

![popup window](./popup.png)

## Install

The files in this repository are the source code for a Chrome extension.

- Copy the files to a local folder
- Open Chrome extensions chrome://extensions/
- Enable Developer Mode by clicking the toggle switch next to `Developer mode`.
- Click the `Load unpacked` button and select the extension directory with these files.

For more detailed instructions, see Chrome's [Loading an unpacked Chrome extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) documentation.

## Usage

- Select a number on a web page
- Right-click and select "Wei to Eth"
- Click the Chrome plug-in icon

## Development

```
# Run test
npm run test

# Build
npm run clean
npm run build
```
