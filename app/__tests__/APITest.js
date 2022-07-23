const supertest = require("supertest");
const app = require("../index");
const request =  supertest(app);


test ("Fetch Todos", (done) => {

    request.get("/todo")
    .expect(200)
    .expect("Content-Type", /json/)
    .end(function (err, res) {
        if(err) return done(err);
        
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.length).toBe(5);

        done();
    })
})