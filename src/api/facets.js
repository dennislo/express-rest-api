import facets from '../models/facets';

/** GET / - List all entities */
const get = ({ config, db }) => (req, res) => {
  console.log(config);
  console.log(db);
  res.json([4, 5, 6]);
};

/** GET /:id - Return a given entity */
const getById = ({ config, db }) => (req, res) => {
  console.log(req.params.id);
  res.json(facets);
};

/** POST / - Create a new entity */
const create = ({ config, db }) => ({ body }, res) => {
  body.id = facets.length.toString(36);
  facets.push(body);
  res.json(body);
};

/** PUT /:id - Update a given entity */
const update = ({ config, db }) => ({ facet, body }, res) => {
  for (let key in body) {
    if (key !== 'id') {
      facet[key] = body[key];
    }
  }
  res.sendStatus(204);
};

/** DELETE /:id - Delete a given entity */
const remove = ({ config, db }) => ({ facet }, res) => {
  facets.splice(facets.indexOf(facet), 1);
  res.sendStatus(204);
};

export default {
  get,
  getById,
  create,
  update,
  remove
};