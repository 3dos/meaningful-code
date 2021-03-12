type Person = {
  name: string;
  age: number;
}

/** Extract names */
const extractNames = (people: Person[]) => {
  let names = [];
  for (const person of people) {
    names.push(person.name);
  }
  return names;
}
