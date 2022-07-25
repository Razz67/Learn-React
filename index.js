// My first Custom Component
function SamplePage() {
	return (
		<div>
			<img src="./React.webp" width="5%" />
			<h1 style={{ fontWeighstylet: "bold" }}>Fun facts about React</h1>
			<ul>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100K stars on Github</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of enterprixe apps, including mobile apps</li>
			</ul>
		</div>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(SamplePage());
