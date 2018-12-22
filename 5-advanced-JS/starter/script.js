/*
// function constructor
const Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function(){
  console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

const john = new Person('John', 1995, 'teacher');
const jane = new Person('Jane', 1969, 'designer');
const mark = new Person('Mark', 1949, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
*/

/*
// Object.create
const personProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfBirth);
  }
};

const john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1995;
john.job = 'teacher';

const jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer' }
})
*/

/*
// functions returning functions
interviewQuestion = (job) => {
  if (job === 'designer') {
    return name => {
      console.log(name + ', can you explain what UX design is?');
    } 
  } else if (job === 'teacher') {
    return name => {
      console.log('What subject do you teach, ' + name + '?');
    }
  }
}

const teacherQuestion = interviewQuestion('teacher');
teacherQuestion('jane');

const designerQuestion = interviewQuestion('designer');
designerQuestion('john');

interviewQuestion('designer')('mark');
*/

/*
// immediately invoked function expressions (IIFE)
// can't access score variable from outside
// what's inside of paranthesis cannot be a statement, must be an expression
(() => {
  const score = 5;
  console.log(score);
})();

((goodLuck) => {
  const score = Math.random() * 10;
  console.log(score - goodLuck);
})(5);
*/

/*
// Closures
// inner functions have access to outer function variables even
// after the are popped from the execution stack
// vars still on the scope chain
retirement = (retirementAge) => {
  const a = ' years left until retirement.';
  return (yearOfBirth) => {
    const age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

const retirementUS = retirement(66);
const retirementGermany = retirement(65);
const retirementIceland = retirement(67);

retirementGermany(1995);
retirementUS(1995);
retirementIceland(1995);

// example two of closure
interviewQuestion = job => {
  return name => {
    if (job === 'designer') {
      console.log(name + ', what is UX design?');
    } else if (job === 'teacher') {
      console.log('what do you teach?');
    }
  }
}

interviewQuestion('designer')('jane');
*/

// bind, call, and apply

const john = {
  name: 'John',
  age: 23,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log(`Good ${timeOfDay}! I am ${this.name}`);
    } else if (style === 'friendly'){
      console.log(`Hey! What\'s up, I am ${this.name}`);
    }
  }
};

const emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

john.presentation('formal', 'morning');

// allows us to explicitly set 'this' variable
john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

// bind allows us to preset some arguments (currying)
const johnFormal = john.presentation.bind(john, 'formal');
johnFormal('morning');

const emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('evening');

/* extra shit
const barker = state => ({
  bark: () => console.log('woof, i am ' + state.name)
})

const driver = state => ({
  drive: () => state.position = state.position + state.speed
})

const murderRobotDog = name => {
  let state = {
    name,
    speed: 100,
    position: 0
  }

  return Object.assign(
    {},
    barker(state),
    driver(state)
  )
}

console.log(murderRobotDog.bark());
*/