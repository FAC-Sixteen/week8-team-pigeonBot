const test = require('tape');
const supertest = require('supertest');
const app = require('../app');
const error = require('../controllers/error');

test('Tape is working', (t) => {
   t.equal(1, 1, "1 should equal 1");
   t.end();
});

test('Home route returns 200', (t) => {
    supertest(app)
    .get('/')
    .expect(200)
    .end((err, res) => {
        const actual = res.status;
        const expected = 200;
        t.error(err, "No error");
        t.equal(actual, expected, "Should receive status code of 200");
        t.end();
    })
});

test('404 error should return "Page not found"', (t) => {
    supertest(app)
    .get('/bad-path')
    .expect(404)
    .end((err, res) => {
        const actual = res.text.includes("Page not found");
        const expected = true;
        t.error(err, "No error");
        t.equal(actual, expected, "Should serve a page with text 'Page not found'");
        t.end();
    })
});

// test('500 error should return "Internal server error"', (t) => {
//     supertest(app)
//     .expect(500)
//     .end((err, res) => {
//         const actual = res.text.includes("Internal server error");
//         const expected = true;
//         t.error(err, "No error");
//         t.equal(actual, expected, "Should serve a page with text 'Internal server error'");
//         t.end();
//     })
// })

