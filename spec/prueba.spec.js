const { Activity, Repository } = require("../scripts/index");

describe("la clase Repository", () => {
  let repository;

  beforeEach(() => {
    repository = new Repository();
  });

  it("debe estar definida", () => {
    expect(Repository).toBeDefined();
  });

  it("debe ser una clase", () => {
    expect(typeof Repository.prototype.constructor).toBe("function");
  });

  it("debe ser una clase de la instancia Repository", () => {
    expect(repository instanceof Repository).toBe(true);
  });

  it("debe tener el método createActivity()", () => {
    expect(repository.createActivity).toBeDefined();
  });
  
  it("debe tener el método getAllActivities()", () => {
    expect(repository.getAllActivities).toBeDefined();
  });

  it("debe tener el método deleteActivity()", () => {
    expect(repository.deleteActivity).toBeDefined();
  });

});
