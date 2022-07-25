// My first Custom Component
// function SamplePage() {
// 	return (
// 		<div margin="20px">
// 			<img src="React.webp" width="10%" />
// 			<h1 fontWeight="bold">Fun facts about React</h1>
// 			<ul>
// 				<li>Was first released in 2013</li>
// 				<li>Was originally created by Jordan Walke</li>
// 				<li>Has well over 100K stars on Github</li>
// 				<li>Is maintained by Facebook</li>
// 				<li>Powers thousands of enterprixe apps, including mobile apps</li>
// 			</ul>
// 		</div>
// 	);
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<SamplePage />);

/**
 * Challenge:
 * Part 1: Create a page of your own usin a custom Page component
 *
 * it should return an ordered list with ethe reasons why you're excited about learning React
 *
 * Render your list to the page
 */

function Page() {
	return (
		<ol>
			<li>It's fun</li>
			<li>It's easy to learn</li>
			<li>It's hireable</li>
		</ol>
	);
}
const list = ReactDOM.createRoot(document.getElementById("root"));
list.render(<Page />);
