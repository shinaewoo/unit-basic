const fetchProduct = require("../async.js");

describe("Async", () => {
  it("async-done", (done) => {
    fetchProduct().then((data) => {
      expect(data).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });
  it("async-return", () => {
    return fetchProduct().then((data) => {
      expect(data).toEqual({ item: "Milk", price: 200 });
    });
  });
  it("async-await", async () => {
    const data = await fetchProduct();
    expect(data).toEqual({ item: "Milk", price: 200 });
  });
  it("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });
  it("async-reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
