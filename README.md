# Marketier UI 🎚️
**A material-like input-component library for Vue 3.**  
Currently under development.

<br/>

## Installation ⚙️
via NPM
```bash
npm install --save marketier-ui
```
*(yarn coming soon)*

<br/>

## Import ⤵️
Global components
```javascript
// Import Marketier UI
import MarketierUI from "marketier-ui";

// Import component style
import "marketier-ui/dist/style.css";

// Create app
const app = createApp(App);

// Use components
app.use(MarketierUI);

// Lastly mount app
app.mount("#app");
```
*(local imports coming soon)*

<br/>

## Usage 🪛
Minimal setup
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

## What is this "Marketier" 🤔
Marketier is a SaaS marketing and management platform currently in its early development.  
As a result of the need for a component library this package was created.  
<br/>
[Learn more about Marketier](https://marketier.solutions)  
<br/>

## License 📜
[MIT](http://opensource.org/licenses/MIT) – 2022
