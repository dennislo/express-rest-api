import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';

export default ({ config, db }) => {
  let api = Router();

  // mount resources e.g facets
  api.use('/facets', facets.get({ config, db }));
  api.get('/facet/:id', facets.getById({ config, db }));
  api.post('/facet', facets.create({ config, db }));
  api.put('/facet', facets.update({ config, db }));
  api.delete('/facet', facets.remove({ config, db }));

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
}
