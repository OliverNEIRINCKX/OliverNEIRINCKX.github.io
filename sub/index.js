fetch('https://jsonplaceholder.typicode.com/todos/3')
		.then(resp => resp.json())
		.then(todo => document.getElementById("demo").innerHTML = JSON.stringify(todo))
