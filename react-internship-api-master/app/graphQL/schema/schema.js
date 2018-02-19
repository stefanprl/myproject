/**
 * Contains all information required by GraphQL to understand what our app data looks like
 */
require('es6-promise').polyfill();
const User = require('../../database/models').User;
const UserRole = require('../../database/models').UserRole;
const graphQl = require('graphql');

const {
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} = graphQl;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    userRole: {
      type: UserRoleType,
      resolve(parentValue, args) {
        return UserRole.findById(parentValue.userRoleId);
      }
    }
  }),
});

/*
const CompanyType = new GraphQLObjectType({
  name: 'Company',
  // GOOD PRACTICE fields in closures for closure scopes
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType), // many to one (users to company),
      resolve(parentValue, args) {
        return fetch(`${BASE_URL}/companies/${parentValue.id}/users`)
          .then(response => response.json());
      }
    },
  }),
});
*/


const UserRoleType = new GraphQLObjectType({
  name: 'UserRole', // required
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return User.findAll({
          where: {
            userRoleId: parentValue.id
          }
        });
      }
    }
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    userRoles: {
      type: new GraphQLList(UserRoleType),
      resolve() {
        return UserRole.findAll();
      }
    },
    userRole: {
      type: UserRoleType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        // get into the DB and query the actual data
        return UserRole.findById(args.id);
      },
    },
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        return User.findById(args.id);
      },
    }
  }
});

// const UsersMutations = {
//   addUser: {
//     type: UserType,
//     args: {
//       username: { type: new GraphQLNonNull(GraphQLString) },  // not null
//       age: { type: new GraphQLNonNull(GraphQLInt) },          // not null
//       companyId: { type: GraphQLString },                     // nullable
//     },
//     resolve(parentValue, { username, age }) {
//       const headers = new Headers();
//       headers.append('Content-Type', 'application/json');
//
//       return fetch(`${BASE_URL}/users`, {
//         method: 'POST',
//         body: JSON.stringify({ username, age }),
//         headers,
//       })
//         .then(response => response.json());
//     }
//   },
//   editUser: {
//     type: UserType,
//     args: {
//       id: { type: new GraphQLNonNull(GraphQLString) },  // not null
//       username: { type: new GraphQLNonNull(GraphQLString) },  // not null
//       age: { type: new GraphQLNonNull(GraphQLInt) },          // not null
//       companyId: { type: GraphQLString },                     // nullable
//     },
//     resolve(parentValue, { id, username, age, companyId }) {
//       const headers = new Headers();
//       headers.append('Content-Type', 'application/json');
//
//       return fetch(`${BASE_URL}/users/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ username, age, companyId }),
//         headers,
//       })
//         .then(response => response.json());
//     }
//   },
//   deleteUser: {
//     type: UserType,
//     args: {
//       id: { type: new GraphQLNonNull(GraphQLString) },
//     },
//     resolve(parentValue, { id }) {
//       return fetch(`${BASE_URL}/users/${id}`, {
//         method: 'DELETE',
//       })
//         .then(response => response.json());
//     },
//   },
// };

// const CompaniesMutations = {
//   addCompany: {
//     type: CompanyType,
//     args: {
//       name: { type: new GraphQLNonNull(GraphQLString) },  // not null
//       description: { type: GraphQLString },                     // nullable
//     },
//     resolve(parentValue, { name, description }) {
//       const headers = new Headers();
//       headers.append('Content-Type', 'application/json');
//
//       return fetch(`${BASE_URL}/companies`, {
//         method: 'POST',
//         body: JSON.stringify({ name, description }),
//         headers,
//       })
//         .then(response => response.json());
//     }
//   },
//   editCompany: {
//     type: CompanyType,
//     args: {
//       id: { type: new GraphQLNonNull(GraphQLString) },          // not null
//       name: { type: new GraphQLNonNull(GraphQLString) },        // not null
//       description: { type: GraphQLString },                     // nullable
//     },
//     resolve(parentValue, { id, name, description }) {
//       const headers = new Headers();
//       headers.append('Content-Type', 'application/json');
//
//       return fetch(`${BASE_URL}/companies/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ id, name, description }),
//         headers,
//       })
//         .then(response => response.json());
//     }
//   },
//   deleteCompany: {
//     type: CompanyType,
//     args: {
//       id: { type: new GraphQLNonNull(GraphQLString) },
//     },
//     resolve(parentValue, { id }) {
//       return fetch(`${BASE_URL}/companies/${id}`, {
//         method: 'DELETE',
//       })
//         .then(response => response.json());
//     },
//   },
// };
//
// const RootMutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     ...UsersMutations,
//     ...CompaniesMutations,
//   },
// });

module.exports = new GraphQLSchema({
  query: RootQuery,
  // mutation: RootMutation,
});
