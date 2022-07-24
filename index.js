// Imperative way to render an h1
// const myElement = document.getElementById("root");
// let content = document.createElement("h1");
// content.innerText = "My heading in JS";
// myElement.appendChild(content);

// Declaritive way to render h1 using JSX
// ReactDOM.render(
// <h1>This is JSX!</h1>,
// 	document.getElementById("root")
// );

// const NavBar = (
// 	<nav>
// 		<h1>My Website</h1>
// 		<ul>
// 			<li>About</li>
// 			<li>Prices</li>
// 			<li>Contact</li>
// 		</ul>
// 	</nav>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(NavBar);

const samplePage = (
	<div style={{margin: "20px"}}>
		<img src="./React.webp" style={{ width: "5%" }} />
		<h1 style={{fontWeighstylet: "bold"}}>Fun facts about React</h1>
		<ul>
			<li>Was first released in 2013</li>
			<li>Was originally created by Jordan Walke</li>
			<li>Has well over 100K stars on Github</li>
			<li>Is maintained by Facebook</li>
			<li>Powers thousands of enterprixe apps, including mobile apps</li>
		</ul>
	</div>
);
ReactDOM.createRoot(document.getElementById("root")).render(samplePage);
