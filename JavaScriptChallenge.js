//the bitwise & operator compares these two binary numbers by each bit/digit,
//and if both the digits being compared are 1, sets that corresponding
//digit in the resulting number to 1. For example, the last digit in 0101 is 1,
//and the last digit in 0011 is 1, so the resulting digit in that spot
//will be 1. Then, the next digit in each number is 0 and 1, respectively,
//so the resulting digit in that spot will be 0.
function bitwiseAND()
{
	//7 decimal is equal to 111 binary
	//5 decimal is equal to 101 binary
	//So, the comparison below will return 0101, which it will display as a 5
	document.getElementById("bitAND").innerHTML = 7 & 5;
}

//the bitwise | operator works similar to the & operator, except that
//it will return a 1 if either bit being compared is a 1, not
//necessarily both
function bitwiseOR()
{
	//5 decimal is equal to 101 binary
	//3 decimal is equal to 011 binary
	//So, the comparison below will return 111, which it will display as a 7
	document.getElementById("bitOR").innerHTML = 5 | 3;
}

//the bitwise ^ operator returns a 1 if the bits being compared are
//different from each other
function bitwiseXOR()
{
	//8 decimal is equal to 1000 binary
	//3 decimal is equal to 0011 binary
	//So, the comparison below will return 1011, which it will display as an 11
	document.getElementById("bitXOR").innerHTML = 8 | 3;
}

//the .search method searches a string for the speficied value, and returns
//the position at which a found match starts
function textSearch()
{
	//for example, we search for the word "potato", and the first character
	//of "potato" starts at character position 22 of the sentence
	var text = "I'm not a huge fan of potato salad but it's alright";
	document.getElementById("txtSrch").innerHTML = text.search("potato");
}

function textReplace()
{
	var text = "MacOS is better than Windows";
	//finds the term "macos" (case insensitive) and replaces it with "potato".
	//At this point it will be: "potato is better than Windows"
	var wip1 = text.replace(/macos/i, "potato");
	//replaces the term "Windows" (case sensitive this time) with "MacOS".
	//At this point it will be: "potato is better than MacOS"
	var wip2 = wip1.replace("Windows", "MacOS");
	//replaces the term "potato" (case sensitive) with "Windows".
	//At this point it will be: "Windows is better than MacOS"
	var final = wip2.replace("potato", "Windows");
	
	document.getElementById("txtRplc").innerHTML = final;
}