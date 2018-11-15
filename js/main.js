//4. object literal notation
//var team =  [
//{ 		
	//firstName: 'micheal',
	//lastName: 'jordan',
	//portrait: 'img/michealjordan.jpg',
	//title: 'co-founder'
//},
//{ 		
	//firstName: 'charles',
	//lastName: 'barkley',
	//portrait: 'img/charlesbarkley.jpg',
	//title: 'co-founder'
//},
//{ 		
	//firstName: 'magic',
	//lastName: 'johnson',
	//portrait: 'img/magicjohnson.jpg',
	//title: 'cto'
//},
//{ 		
	//firstName: 'scottie',
	//lastName: 'pippen',
	//portrait: 'img/scottiepippen.jpg',
	//title: 'cfo'
//},
//{ 		
	//firstName: 'david',
	//lastName: 'robinson',
	//portrait: 'img/davidrobinson.jpg',
	//title: 'cmo'
//}
//]
//5.
var team = [];

function Team(firstName, lastName, portrait, title) {
	
	this.firstName = firstName;
	this.lastName = lastName;
	this.portrait = portrait;
	this.title = title;

	populateHTML(this);

	pushToArray(team, this)
	
}
function pushToArray(array, item) {
	array.push(item);
}

Team.prototype.getFullName = function() {
	return this.lastname + ' ' + this.firstname;

}

new Team('micheal', 'jordan', 'img/michaeljordan.jpg', 'co-founder');
new Team('charles', 'barkley', 'img/charlesbarkley.jpg', 'co-founder');
new Team('magic', 'johnson', 'img/magicjohnson.jpg', 'cfo');
new Team('scottie', 'pippen', 'img/scottiepippen.jpg', 'cfo');
new Team('david', 'robinson', 'img/davidrobinson.jpg', 'cmo');

//10. Loop through array
for(prop in Team) {
	if(typeof(Team[prop]) == "function") {
			console.log(Team[prop]());
		}
	else {
	console.log(Team[prop]);
	}
}

function populateHTML(object) {
	var myDiv = document.createElement('div');
	var myH1 = document.createElement('h1');
	var myH2 = document.createElement('h2');
	var myP = document.createElement('p');

	myDiv.appendChild(myH1);
	myDiv.appendChild(myH2);
	myDiv.appendChild(myP);

	myDiv.className = 'bg-dark text-white p-5 col-12 col-sm-5 mx-auto mb-5'
	myDiv.style.minHeight = "300px";
	myDiv.style.backgroundImage = "url(" + object.portrait + ")";
	myDiv.style.backgroundRepeat = 'no-repeat';
	myDiv.style.backgroundSize = 'cover';

	myH1.innerText = object.firstName;
	myH2.innerText = object.lastName;
	myP.innerText = object.title;

	document.getElementsByClassName('row')[0].appendChild(myDiv);
}


