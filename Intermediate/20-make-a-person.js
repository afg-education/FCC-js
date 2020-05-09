var Person = function (firstAndLast) {
  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];

  // Complete the method below and implement the others similarly
  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return firstName + " " + lastName;
  };

  this.setFirstName = function (param) {
    firstName = param;
  }
  this.setLastName = function (param) {
    lastName = param;
  }
  this.setFullName = function (param) {
    firstName = param.split(" ")[0];
    lastName = param.split(" ")[1];
  }
};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName())
bob.getFullName();