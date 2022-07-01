const app = require("../../app.js");
const supertest = require("supertest");

describe("returns jason data for all students", () => {
  it("return an object with all the students", async () => {
    await supertest(app)
      .get("/students")
      .expect(200)
      .then((response) => {
        expect(response.body.students).toBeInstanceOf(Array);
        expect(response.body.students.length).toBe(25);
      });
  });

  it("returns an object with a number of students equal to or less than limit", async () => {
    await supertest(app)
      .get("/students?limit=10")
      .expect(200)
      .then((response) => {
        expect(response.body.students).toBeInstanceOf(Array);
        expect(response.body.students.length).toBe(10);
      });

    await supertest(app)
      .get("/students?limit=35")
      .expect(200)
      .then((response) => {
        expect(response.body.students).toBeInstanceOf(Array);
        expect(response.body.students.length).toBe(25);
      });

    await supertest(app)
      .get("/students?limit=0")
      .expect(200)
      .then((response) => {
        expect(response.body.students).toBeInstanceOf(Array);
        expect(response.body.students.length).toBe(25);
      });
  });

  //modify the api to take in a min id and a max id and returns all students by id range

  it("return an object with all the students", async () => {
    await supertest(app)
      .get("/students?min=3&max=10")
      .expect(200)
      .then((response) => {
        expect(response.body.students).toBeInstanceOf(Array);
        expect(response.body.students[0].id).toBe(3);
      });
  });
});
