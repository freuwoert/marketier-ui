# Marketier UI
#### A material-like UI input-component library for Vue 3.
<br/>

## Installation
via NPM install
```bash
npm install --save marketier-ui
```
<br/>

## Usage
**Minimal setup**
```html
<mui-input type="text" v-model="value"/>
```
<br/>

### Parameters
| Parameters | Type | Default | Description |
|--|--|--|--|
| type | `String` | `text` | Input type. Available types: `text`, `password`, `number`|
| label | `String` | `''` | Label of the input; *go-to parameter to indicate the use of the input.* |
| placeholder | `String` | `''` | Placeholder of the input; *like a label but it doesn't make way for the entered value - it fades instead.* |
| helper | `String` | `''` | Helper text displayed underneath the input |
| required | `Boolean` | `false` | Whether or not the input is required |
| disabled | `Boolean` | `false` | Whether or not the input is disabled |
| pattern | `String` | `''` | Validation pattern (regex) |
| noBorder | `Boolean` | `false` | If set to `true` the input will not have a border surrounding the label, value and placeholder |

<br/>

## License
[MIT](http://opensource.org/licenses/MIT)