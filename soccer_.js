/* javascript for soccer.html
            by PJ Sheldon    */


var person = 1;                                 // global variable for person starts with one since one is called in the html                               
var age = 1;                                    // global variable for age starting at 1

function addFields() {                          // adding more fields function
	person++;                                   // person variable adds plus
	age++;                                      // age variable plus 1
	var par = document.getElementById("parent");// get the parent div tag
	var divAdd = document.createElement("div"); // creating an element div tag

	/* The HTML that will be added to parent element created  to make morw child and text fields while adding number for thw person label and adding age id number*/
	divAdd.innerHTML = '<div><label class="label">Age of Person ' + person + ': </label></div><div class="content"><input id="age' + age + '" type="text" name="age" placeholder="Age"></div>';

	par.appendChild(divAdd);                    // adding child to the parent
}

function check() {
	var el;                                     // local variable that will be defined later 
	var getAge = "age";                         // local variable that holds the word age for the getElementById cancatination
	var junior = 0;                             // local variable of junior set to zero
	var inter = 0;                              // local variable of intermediate set to zero
	var senior = 0;                             // local variable of senior set to zero
	var count = 0;                              // local variable of count set to zero

	var text = document.getElementById("final");// local variable to call to the paragraph above the text fields


	for (var i = 1; el = document.getElementById(getAge + i).value; i++) { //for loop that makes the get the value of all the dynamic text fields by id
		if (el >= 4 && el <= 7) {               // if statement for the junior parameters
			junior += 1;                        // if the number is true add 1 the junior local vairable
			count += 1;                         // if the number is true add 1 the count local vairable
		}

		else if (el >= 8 && el <= 11) {         // if statment for the intmediate parameters
			inter += 1;                         // if the number is true add 1 the inter local vairable
			count += 1;                         // if the number is true add 1 the count local vairable
		}

		else if (el >= 12 && el <= 15) {        // if statement for the senior parameters
			senior += 1;                        // if the number is true add 1 the senior local vairable
			count += 1;                         // if the number is true add 1 the count local vairable
		}

		else {
			alert("Error: please enter an age between 4 and 15"); // when the does not hi any of those paramenter out side of age 4 and 15
		}

		// the text that replaces  the paragraph above the text fields with the results of the count that are made in the parameter above
		text.innerHTML = "Sign Up Total: " + count + " .....Junior Total: " + junior + " ......Intermediate Total: " + inter + " .....Senior Total: " + senior		
	}

	
}