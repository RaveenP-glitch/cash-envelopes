import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './_db.js';

//types
import { typeDefs } from './schema.js';

const resolvers = {
    Query: {
        games() {
            return db.games;
        },
        authors() {
            return db.authors;
        },    
        reviews() {
            return db.reviews;
        },
        review(_, args) {
            return db.reviews.find(review => review.id === args.id);
        },
        author(_, args) {
            return db.authors.find(author => author.id === args.id);
        },
        game(_, args) {
            return db.games.find(game => game.id === args.id);
        }
    }
}

//server setup
const server = new ApolloServer({
    // typeDefs -- definitions of schema or types of data available on the server
    typeDefs,

    // resolvers
    resolvers
   

})

const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000,
    }
})

console.log(`🚀 Server ready at ${url}`);


