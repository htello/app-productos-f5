const handlers = ({ axios }) => ({
  get: async (req, res) => {
    const { data } = await axios.get(
      "https://app-f5.htello.repl.co/productos"
    );
    res.status(200).send(data);
  },

  post: async (req, res) => {
    const { body } = req;
    const { data } = await axios.post(
      "https://app-f5.htello.repl.co/productos",
      body
    );
    res.status(201).send(data);
  },

  put: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    await axios.put(`https://app-f5.htello.repl.co/productos/${id}`, body);
    res.sendStatus(204);
  },

  delete: async (req, res) => {
    const { id } = req.params;
    await axios.delete(`https://app-f5.htello.repl.co/productos/${id}`);
    res.sendStatus(204);
  },
});

module.exports = handlers;
