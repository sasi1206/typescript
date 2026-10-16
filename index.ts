type userType = "minor" | "major";

type newType = { firstname: string; lastname: string; age: number };

type newMappedType = {
  name: string;
  age: number;
  userType: userType;
};

// type is like schema, we can define set of rules and use it wherever we want. we can use in on array but putting [] after type. instead of using pre-defined types like string, number,boolean, we can create our own types and use it. userType is an example.  we can pass the type as a parameter to function or we can use it as return type of function. we can use the type directly while creating array of that type or use the type whenever we are performing operations in them same goes for return type. though direct-type is easier to use.

// const users = [
//   { firstname: "John", lastname: "Doe", age: 17 },
//   { firstname: "Jane", lastname: "Smith", age: 25 },
//   { firstname: "Alice", lastname: "Johnson", age: 15 },
//   { firstname: "Bob", lastname: "Brown", age: 30 },
// ];

// const mappedUsers = users.map((user: newType) => {
//   const userType: userType = user.age < 18 ? "minor" : "major";
//   const newUser: newMappedType = {
//     name: `${user.firstname} ${user.lastname}`,
//     age: user.age,
//     userType,
//   };
//   return newUser;
// });

const users: newType[] = [
  { firstname: "John", lastname: "Doe", age: 17 },
  { firstname: "Jane", lastname: "Smith", age: 25 },
  { firstname: "Alice", lastname: "Johnson", age: 15 },
  { firstname: "Bob", lastname: "Brown", age: 30 },
];

const mappedUsers: newMappedType[] = users.map((user) => {
  const userType: userType = user.age < 18 ? "minor" : "major";
  return {
    name: `${user.firstname} ${user.lastname}`,
    age: user.age,
    userType,
  };
});
