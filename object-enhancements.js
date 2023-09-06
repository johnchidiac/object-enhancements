
function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  }
}

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;
const instructor = {
	firstName: 'Colt',
	[favoriteNumber]: "That's my favoriteNumber"
}


var instructor = {
	firstName: "Colt",
	sayHi () {
	  return "Hi!";
	},
	sayBye () {
	  return this.firstName + " says bye!";
	}
  }

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

function createAnimal(species, func, sound) {
	return {
		species,
		[func] () {
			return sound;
		}
	}
}