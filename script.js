// Add all the DOM selectors
const main = document.querySelector("main")
const voicesSelect = document.getElementById("voices")
const textArea = document.getElementById("text")
const readBtn = document.getElementById("read")
const toggleBtn = document.getElementById("toggle")
const closeBtn = document.getElementById("close")

// 2 Create our array of DATA. it's gonna be an array of OBJECTS that have 2 things (img, text)
const data = [
	{
		image: "./img/drink.jpg",
		text: "I'm Thirsty"
	},
	{
		image: "./img/food.jpg",
		text: "I'm Hungry"
	},
	{
		image: "./img/tired.jpg",
		text: "I'm Tired"
	},
	{
		image: "./img/hurt.jpg",
		text: "I'm Hurt"
	},
	{
		image: "./img/happy.jpg",
		text: "I'm Happy"
	},
	{
		image: "./img/angry.jpg",
		text: "I'm Angry"
	},
	{
		image: "./img/sad.jpg",
		text: "I'm Sad"
	},
	{
		image: "./img/scared.jpg",
		text: "I'm Scared"
	},
	{
		image: "./img/outside.jpg",
		text: "I Want To Go Outside"
	},
	{
		image: "./img/home.jpg",
		text: "I Want To Go Home"
	},
	{
		image: "./img/school.jpg",
		text: "I Want To Go To School"
	},
	{
		image: "./img/grandma.jpg",
		text: "I Want To Go To Grandmas"
	}
]

data.forEach(createBox)

// create speech boxes
function createBox(item) {
	console.log(item)
	const box = document.createElement("div")

	// instead of using item.image and item.text, I will use destructuring
	// because this item is in OBJ with these two properties
	const { image, text } = item
	box.classList.add("box")
	box.innerHTML = `
		<img src="${image}" alt="${text}" />
		<p class="info">${text}</p>
		
	`

	// to do - speak event
	main.appendChild(box)
}
