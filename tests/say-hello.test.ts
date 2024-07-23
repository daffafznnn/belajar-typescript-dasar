import { sayHello } from '../src/say-hello';

describe("Hello", function () {
  it("Should Say Hello", function () {
    const name = "daffafznnn";
    const greeting = sayHello(name);
    expect(greeting).toBe("Hello daffafznnn");
  });
});
