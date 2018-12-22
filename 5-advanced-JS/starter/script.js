// function constructor

const Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function(){
  console.log(2018 - this.yearOfBirth);
};

const john = new Person('John', 1995, 'teacher');

john.calculateAge();




/*
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