// Q1
let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
for (let i = 0; i < characters.length; i++) {
    console.log(characters[i]);
}

// Q2
let firstName = 'Harry';
let house = 'Gryffindor';
console.log(`Welcome, ${firstName} of ${house}!`);

// Q3
let characterName = 'Hermione';
console.log(characterName.toLowerCase());
console.log(characterName.toUpperCase());

// Q4
let spell = ' Expelliarmus ';
console.log(spell.trim());

// Q5
let quote = 'I solemnly swear that I am up to no good';
console.log(quote.slice(11, 16));

// Q6
let firstName1 = 'Ron';
let lastName = 'Weasley';
console.log(firstName1.concat(' ', lastName));

// Q7
let sentence = 'Draco is a good wizard';
console.log(sentence.replace('good', 'bad'));

// Q8
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop();
console.log(houses);

// Q9
let spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);

// Q10
let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
let newProfessors = professors.slice(1, 3);
console.log(newProfessors);

// Q11
let students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
students.splice(1, 2);
console.log(students);

// Q12
let phrase = ' Mischief Managed ';
console.log(phrase.trim().toLowerCase().concat(' - Harry'));

// Q13
let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards);

// Q14
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
console.log(message.slice(11, 19).concat(' Castle'));
