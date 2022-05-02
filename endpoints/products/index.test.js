const handlers = require("./index");

describe("EndPoints", () => {
  describe("products", () => {
    //get
    describe("get", () => {
      it("return to products json", async () => {
        //mocks para axios
        const axios = {
          get: jest.fn().mockResolvedValue({ data: 1 }),
        };
        //mocks para objeto res
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };

        await handlers({ axios }).get({}, res);
        // console.log(res.status.mock.calls);
        expect(res.status.mock.calls).toEqual([[200]]);
        expect(res.send.mock.calls).toEqual([[1]]);
      });
    });

    //post
    describe("post", () => {
      it("create a resurce", async () => {
        //mocks para axios
        const axios = {
          post: jest.fn().mockResolvedValue({ data: 1 }),
        };
        //mocks para objeto res
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        //mocks para objeto req
        const req = {
          body: "request body",
        };
        await handlers({ axios }).post(req, res);
        expect(res.status.mock.calls).toEqual([[201]]);
        expect(res.send.mock.calls).toEqual([[1]]);
        expect(axios.post.mock.calls).toEqual([
          ["https://app-f5.htello.repl.co/productos", "request body"],
        ]);
      });
    });

    //put
    describe("put", () => {
      it("update resource", async () => {
        //mocks para axios
        const axios = {
          put: jest.fn().mockResolvedValue({ data: 1 }),
        };
        //mocks para req
        const req = {
          body: "request body",
          params: {
            id: 12,
          },
        };
        //mocks para res
        const res = {
          sendStatus: jest.fn(),
        };
        await handlers({ axios }).put(req, res);

        expect(axios.put.mock.calls).toEqual([
          ["https://app-f5.htello.repl.co/productos/12", "request body"]
        ]);
        expect(res.sendStatus.mock.calls).toEqual([[204]]);
      });
    });

    //delete
    describe("Delete", () => {
      it("delete a resource", async () => {
        const axios = {
          delete: jest.fn(),
        };
        const req = {
          params: {
            id: 54
          },
        };
        const res = {
          sendStatus: jest.fn()
        };
        await handlers({ axios }).delete(req, res);
        expect(axios.delete.mock.calls).toEqual([
          ["https://app-f5.htello.repl.co/productos/54"]
        ]);
        expect(res.sendStatus.mock.calls).toEqual([[204]]);
      });
    });
  });
});
