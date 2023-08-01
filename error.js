let text = "abc123" + "def456"
var neverReassigned	= {}
neverReassigned.name = "viniciusvviterbo"

var toBeReassigned = {}
toBeReassigned = { name: "ana" }
toBeReassigned.name = 1 
toBeReassigned = { name: "ana"}

let result = text.split(",").map(letter => {
	return letter.toUpperCase()
}).join("")
console.log(result)
