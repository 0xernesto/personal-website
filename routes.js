// This require statement returns a function.
// By placing the second set of parantheses, the returned function
// will be invoked immediately after the require statement executes.
const routes = require("next-routes")();

// We can define a new route mapping with routes.add().
// The ":" indicates a wildcard, which we can name whatever we want.
// .add(<URL Route>, <File Route>)
routes
	.add("/about", "/about")
	.add("/contact", "/contact")
	.add("/blog/posts", "/blog/posts")
	.add("/blog/:postId", "/blog/show")
	.add("projects/all", "/projects/all")
	.add("projects/:projectId", "/projects/show");

module.exports = routes;
