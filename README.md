# Vue.js Cascading Signup 🏄 🌊

A simple Vue.js component designed to build cascading forms

Give it a try [here](https://98mprice.github.io/vue-cascading-signup/.) 😊  

![](https://raw.githubusercontent.com/98mprice/vue-cascading-signup/master/example.gif)

## How to install
You can use npm, like so...
```
npm i vue-cascading-signup
```

...or you can add it directly to your HTML page from the cdn:
```html
<link rel="stylesheet" href="https://unpkg.com/vue-cascading-signup@0.1.3/dist/vue-cascading-signup.css">
...
<script src="https://unpkg.com/vue-cascading-signup@0.1.3/dist/vue-cascading-signup.umd.min.js"></script>
```

## Examples

You can compile & run the example with...
```
npm run serve
```

...or check out the demo page [here](https://github.com/98mprice/vue-cascading-signup/blob/master/index.html))

## Guide
To setup, you need 2 separate objects.

The first is the model that will be manipulated by `vue-cascading-signup`...
```javascript
form: {
  'name': '',
  'cell phone': '',
  ...
},
```

You can add these in the `model` prop. You should also pass the current key with `model_key`.

For example,
```html
<cascading-row
  :model_key="name" :model="form">
  Name:
</cascading-row>
```

...and the second are the options that modify the appearance:
```javascript
options: {
  'Name': [
    {
      type: String
    }
  ],
  'Cell Phone': [
    {
      text: '+27',
      type: String
    },
    ...
  ],
  ...
}
```

The key of each object in `options` should match the key of `form`. i.e. 'Cell Phone' -> 'cell phone' (caps don't matter 🙂)

Inside each of the `options` objects, you can stack parts to form part of each `cascading-row`.

### Options available
* `type`: Required. Can be `String` or `Number`. If it's `Number`, validation will be applied to only allow for digits 0-9.
* `text`: Optional. If you add this, it'll just add text (no input). Use it to add prefixes/suffixes.
* `maxLength`: Optional. This enforces a maximum number of characters.
* `requires`: Optional. This is the minimum number of characters to be entered before the next row cascades. So, if you need the whole row to be filled out, this should match `maxLength`
* `width`: (Number) Optional. The width of this element.

You can pass these options in the `parts` prop:
```html
<cascading-row
  :model_key="name" :model="form"
  :parts="options['Name']">
  Name:
</cascading-row>
```

### Props available
* `model`: Optional. The model that will be edited. Remember to add the `model_key` prop to specify which object to modify.
* `parts`: Optional. Options regarding the appearance of this row.
* `dependant`: Optional. This enforces the 'cascading' effect.
* `font_size`: (Number) Optional. Font size for row.

---

And that's it 🙏. Other than Vue.js there are no other dependancies.

If you'd like to, please submit a pull request. I'll review it as fast as I can. Thanks!
