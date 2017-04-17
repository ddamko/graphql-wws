const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
import { Schema } from './schema';

import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';

const PORT = 4000;
const server = express();

server.use('*', cors());

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema: Schema }));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

server.listen(PORT, () => 
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);