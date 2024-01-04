const request = require("supertest")
const app = require("../index");
const { user, task } = require("../utils/data");


let token = '';

require("dotenv").config();


describe("POST /api/login", () => {
    test("should login", async () => {
        return request(app)
            .post("/api/login")
            .send(user)
            .expect(200)
            .then(({body})=>{
            token = body.accessToken
            })
    });
});


let taskId = " "
describe("POST /api/task", () => {
    test("should create a task", async () => {
        console.log(token)
        return request(app)
            .post("/api/task")
            .set('Authorization', `Bearer ${token}`)
            .send(task)
            .expect(200)
            .then(({body})=>{
                console.log(body)
            taskId = body.data.id
            })
    });
});

describe("GET /api/task", () => {
    it("should return all tasks", async () => {
        return request(app)
            .get("/api/task")
            .set('Authorization', `Bearer ${token}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
            })
    });
});
