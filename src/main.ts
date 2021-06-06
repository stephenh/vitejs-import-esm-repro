import './style.css'
import memoizeOne from "memoize-one";
import "some-library";

console.log(memoizeOne(() => "asdf")());

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
