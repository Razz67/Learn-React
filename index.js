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
 * 
 * Challenge:
 * Part 2:
 * - Add a 'header' element with a nested 'nav' element.  Inside the 'nav',
 * include a 'img' element with the React log inside (src="React.webp") and
 * make sure to set the width to something more manageable so it doesn't take
 * up the whole screen
 * - Add an 'h1' with some text describing the page. (E.g. "Reasons I'm excited
 * to learn React"). Place it above the ordered list.
 * - add a 'footer' after the list that says:
 *    "copyright 2022 <last name> development.  All rights reserved."
 */

function Page() {
	return (
		<div>
			<header>
				<nav>
					<img width="10%" src="React.webp" />
				</nav>
			</header>
			<h1>Reasons I'm excited about learning React</h1>
			<ol>
				<li>It's fun</li>
				<li>It's easy to learn</li>
				<li>It's hireable</li>
			</ol>
			<footer>
				&copy; 2022 Stephine Rasberry Development.  All rights reserved.
			</footer>
		</div>
	);
}
const list = ReactDOM.createRoot(document.getElementById("root"));
list.render(<Page />);
