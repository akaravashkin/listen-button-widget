# Listen Button Widget

Widget that allows people to get access to your media by the phone. Specify media link and receive number to call.
Check this [Demo](https://akaravashkin.github.io/listen-button-widget/src/test.html)

## Usage

You can download minified `widget.js` file from `dist` folder.
Simply add this script on your page:

```HTML
<script src="/dist/widget.js"></script>
```

Place the button anywhere you need and script will parse it automatically:

```HTML
<div class="listen-button-widget" data-src="https://yourdomain.com/my_media.mp3"></div>
```

## Customization

Widget supports two parameters: `data-src` and `data-text`;

## Programmatic usage

You can manually initialize the declarative buttons:

```JavaScript
window.ListenButtonWidget.init();
```

or add optional customization:

```JavaScript
window.ListenButtonWidget.init('.my-custom-container', {
  src: 'https://storage.carrierx.com/c/f1f0f514-d5b8-4ed1-8ba1-7e30068671f4/santa_welcome.mp3',
  text: 'I\'m a programmer'
});
```

### Styling

Customize everything you need through CSS:

```CSS
.listen-button-widget .lbw-listen-button {
  background-color: #17b517;
}
```

### Build from source

Use NPM or Yarn:

```yarn build```
