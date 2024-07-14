function greet(name) {
  return new Promise((resolve) => {
    const greeting = `HelloJ ${name}!`;
    resolve(greeting);
  });
}

greet("Mithun").then((message) => console.log(message)); 
