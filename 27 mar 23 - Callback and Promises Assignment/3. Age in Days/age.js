const person = { firstName: "Mithun", lastName: "S", age: 20 };

function ageinDays(person, callback) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const ageinDays = person.age * 365;
  callback(fullName, ageinDays);
}

function logResult(fullName, ageinDays) {
  console.log(
    `The person's full name is ${fullName} and their age in days is
${ageinDays}.`
  );
}

// Expected output.

ageinDays(person, logResult); 
