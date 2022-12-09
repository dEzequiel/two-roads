const { expect } = require("@jest/globals");
const User = require("./user");

describe("User entity object function constructor and prototype", () => {
  const sut = new User(
    "user1",
    "password",
    "user1@email",
    "admin",
    "2022-12-05"
  );

  

  test("Creates object via constructor function", () => {
    expect(sut).toBeTruthy();
  });

  test("Object properties should come from prototype, inheritance", () => {
    // Arrange
    const expectedProperties = {
      1: "username",
      2: "password",
      3: "email",
      4: "role",
      5: "createdAt",
    };
    
    //Assert
    for (const property in expectedProperties) {
      expect(sut.hasOwnProperty(property)).toBeFalsy();
    }
  });
});
