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