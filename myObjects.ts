function createUser(a: { name: string; age: number }) {
  return `User created - ${a.name + " " + a.age}`;
}

function createDatabase({ dbName }: { dbName: string }) {
  console.log(dbName);
}

createDatabase({ dbName: "Sasi" });

const newDataBase = { dbName: "PROD", port: 5888 };

// Throws any error if we add another params that doesn't exist in function parameter
// createDatabase({ dbName: "PROD", port: 5888 });

// shouldn't be allowed

createDatabase(newDataBase);
