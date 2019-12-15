import "./styles.css";
import { objectExample } from "./data";
import { objectToText } from "./manipulation";

document.getElementById("app").innerHTML = `
<h1>Array / Object Exercises</h1>

<h2>Simple Object</h2>
<pre>
${objectToText(objectExample)}
</pre>
`;
