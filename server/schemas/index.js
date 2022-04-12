const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString,GraphQLList } = graphql;
const userData = require("../data.json");
const UserType = require('./typeDefs/UserTypes');


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return userData;
            }
        }
    }
});
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parent, args) {
                userData.push({ id: userData.length + 1, firstName: args.firstName, lastName: args.lastName, email: args.email, password: args.password });
                return args
            }
        }
    }
});
module.exports = new graphql.GraphQLSchema({ query: RootQuery, mutation: Mutation });