# Understanding what JSX compiles into

- JSX stands for JavaScript XML
- JSX allows us to write HTML in React
- It makes writing UI components easier to read and more expressive
- Browser cannot understand JSX directly.
- When React code is compiled, JSX like `<h1>Hello</h1>` is transformed into
  `React.createElement("h1",null,"Hello")`, which creates a JavaScript object
  describing the UI.
- React then uses this object to update the real DOM efficiently

````javaScript
import React from "react"

console.log(
    React.createElement("hi",null,"Hello from createElement")
)

/*

### Output of React.createElement

```js
{
  $$typeof: Symbol(react.transitional.element),
  type: "h1",
  key: null,
  props: {
    children: "Hello from createElement"
  },
  ref: null
}

*/

````
