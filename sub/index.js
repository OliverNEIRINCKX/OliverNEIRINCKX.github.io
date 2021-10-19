

 fetch('https://jsonplaceholder.typicode.com/todos')
		        .then(resp => resp.json())
                .then(todo => {
                    let text = "";
                    for (let x in todo) {
                        let thing = todo[x];
                        for (let y in thing) {
                            text += thing[y] + "<br>"
                        }
                        text += "<br>"
                    }
                    return text;
                })
                .then(todo => document.getElementById("demo").innerHTML= todo)

       

 