'use strict';

function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function () {
      return 'hello';
    }
  };
}

// console.log(createMyObject());

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

const oldObj = {
  cats: 'cats',
  dogs: 'dogs',
};
const newObj = updateObject(oldObj);

// console.log(newObj);

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

const person = personMaker();
// console.log(person.fullName());

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

// console.log(keyDeleter(sampleObj));

function makeStudentsReport(data) {
  return data.map(obj => `${obj.name}: ${obj.grade}`);
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

// console.log(makeStudentsReport(testData));

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  return students.map(obj => {
    obj.status = 'In Summer school';
    return obj;
  });
}

// console.log(enrollInSummerSchool(studentData));

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  return items.find(obj => obj.id === idNum);
}

// console.log(findById(scratchData, 22));

// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  let matchedKeys = true;
  for (let i = 0; i < expectedKeys.length; i++) {
    if (!object.hasOwnProperty(expectedKeys[i])) {
      return false;
    }
  }
  return matchedKeys;
}

// console.log(validateKeys(objectA, expectedKeys));
// console.log(validateKeys(objectB, expectedKeys));

const loaf = {
  flour: 300,
  water: 210,
  hydration: function () {
    return (this.water / this.flour) * 100;
  }
};

// console.log(loaf.flour);
// console.log(loaf.water);
// console.log(loaf.hydration());

const newObject = {
  foo: 'Scott',
  bar: 'David',
  fum: 'Dowding',
  quux: 'James',
  spam: 'Joseph',
};

// for (const key in newObject) {
//   console.log(`${key}: ${newObject[key]}`);
// }

const myObject = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

// console.log(myObject.meals[3]);

const myArray = [
  {
    name: 'Scott Dowding',
    jobTitle: 'Web Developer',
  },
  {
    name: 'James Dowding',
    jobTitle: 'Plumber',
    boss: 'Mike Delicio',
  },
  {
    name: 'David Dowding',
    jobTitle: 'QA Engineer',
    boss: 'Dave Wyman',
  }
];

// myArray.forEach(obj => {
//   console.log(`Name: ${obj.name} Job Title: ${obj.jobTitle}`);
// });

// myArray.forEach(obj => {
//   if (obj.hasOwnProperty('boss')) {
//     console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.boss}.`);
//   } else {
//     console.log(`${obj.jobTitle} ${obj.name} doesn't report to anybody.`);
//   }
// });

function decode(word) {
  const decChars = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
  };

  if (decChars.hasOwnProperty(word[0])) {
    return word[decChars[word[0]] - 1];
  } else {
    return ' ';
  }
}

function decodeWords(words) {
  const wordsArr = words.split(' ');
  const decArr = wordsArr.map(word => decode(word));
  return decArr.join('');
}

// console.log(decodeWords('craft block argon meter bells brown croon droop'));

function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function() {
      console.log(
        `${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}.`
      );
    },
    evaluateFight: function(character) {
      let yourDamage = 0;
      let characterDamage = 0;

      if (this.defense > character.attack) {
        yourDamage = 0
      } else {
        yourDamage = character.attack = this.defense 
      }

      if (character.defense > this.attack) {
        characterDamage = 0
      } else {
        characterDamage = this.attack - character.defense;
      }

      console.log(`Your opponent takes ${characterDamage} damage and you receive ${yourDamage} damage`);
    }
  };
}

const characters = [  
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'wizard staff'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'string and arrow blade'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'anduril'),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'bow and arrow')
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 8, 4, 'hadhafang'));

const character = characters.find(character => {
  return character.nickname === 'aragorn';
});

const hobbits = characters.filter(character => character.race === 'Hobbit');

const highAttacks = characters.filter(character => character.attack > 5);