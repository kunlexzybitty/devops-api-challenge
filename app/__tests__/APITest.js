const supertest = require("supertest");
const server = require("../index");
const request =  supertest(server);


test ("Fetch Todos", (done) => {

    request.get("/todo")
    .expect(200)
    .expect("Content-Type", /json/)
    .end(function (err, res) {
        if(err) return done(err);
        
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.length).toBe(5);
        server.close();
        done();
    })
})

