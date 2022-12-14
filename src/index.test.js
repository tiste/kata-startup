class Kata {
  constructor(name) {
    this.name = name;
  }
}

it("run tests", () => {
  const kata = new Kata("startup");

  expect(kata.name).toBe("startup");
});
