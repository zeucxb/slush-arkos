process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server.js');
const User = require('../models/user')();

const should = chai.should();
chai.use(chaiHttp);

describe('Users', function() {

    User.collection.drop();

    beforeEach(function(done) {
        const newUser = new User({
            firstname: 'Eliseu',
            lastname: 'Codinhoto'
        });
        newUser.save(() => {
            done();
        });
    });

    afterEach(function(done) {
        User.collection.drop();
        done();
    });

    it('should list ALL users on /users GET', function(done) {
        chai.request(server)
            .get('/users')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('success');
                res.body.should.have.property('response');
                res.body.success.should.be.true;
                res.body.response.should.be.a('array');
                done();
            });
    });

    it('should list a SINGLE user on /user/<id> GET', function(done) {
        const newUser = new User({
            firstname: 'Zeu',
            lastname: 'Cxb'
        });

        newUser.save(function(err, user) {

            chai.request(server)
                .get('/user/' + user.id)
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('success');
                    res.body.should.have.property('response');
                    res.body.success.should.be.true;
                    res.body.response.should.be.a('object');
                    res.body.response.should.have.property('_id');
                    res.body.response.should.have.property('firstname');
                    res.body.response.should.have.property('lastname');
                    res.body.response.firstname.should.equal('Zeu');
                    res.body.response.lastname.should.equal('Cxb');
                    res.body.response._id.should.equal(user.id);
                    done();
                });
        });
    });

    it('should add a SINGLE user on /users POST', function(done) {
        chai.request(server)
            .post('/users')
            .send({'firstname': 'Eliseu', 'lastname': 'Codinhoto'})
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('success');
                res.body.should.have.property('response');
                res.body.success.should.be.true;
                res.body.response.should.be.a('object');
                res.body.response.should.have.property('_id');
                res.body.response.should.have.property('firstname');
                res.body.response.should.have.property('lastname');
                res.body.response.firstname.should.equal('Eliseu');
                res.body.response.lastname.should.equal('Codinhoto');
                done();
            });
    });

    it('should fail trying add a SINGLE user on /users POST', function(done) {
        chai.request(server)
            .post('/users')
            .send({})
            .end(function(err, res) {
                res.should.have.status(400);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('success');
                res.body.should.have.property('response');
                res.body.success.should.be.false;
                res.body.response.should.equal('Bad Request');
                done();
            });
    });
});