const chai = require("chai");
const chaiHttp = require("chai-http");
const router = require("./server");
const products = require("./routes/products");
const should = chai.should();

chai.use(chaiHttp);

describe("GET /products", () => {
  it("should get all products", done => {
    chai
      .request(router)
      .get("/products")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(4);
        done();
      });
  });
});

describe("GET /inventory", () => {
  it("should get all inventory", done => {
    chai
      .request(router)
      .get("/products/inventory")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(168);
        done();
      });
  });
});

describe("GET /products/inventory", () => {
  it("should get all inventory by product id", done => {
    chai
      .request(router)
      .get("/products/inventory")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(168);
        done();
      });
  });
});
