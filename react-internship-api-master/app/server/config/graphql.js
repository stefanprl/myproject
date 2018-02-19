const expressGraphQL = require('express-graphql');

module.exports.init = initGraphQL;

function initGraphQL(app) {
  const schema = require('../../graphQL/schema/schema');

  app.use('/graphql', expressGraphQL({
    graphiql: true, // development tool that allows us to make queries on owr dev server,
    schema,
  }));
}
