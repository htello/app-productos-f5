describe("#Prueba", () => {
  describe("suma", () => {
    it("suma 2 números", () => {
      const suma = (a, b) => {
        return a + b;
      };

      expect(suma(1, 2)).toEqual(3);
    });
  });
});
