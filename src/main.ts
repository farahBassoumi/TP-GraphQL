import { createSchema, createYoga } from "graphql-yoga";
import { createServer } from "http";
import { Query } from "./resolvers/Query";
import { Todo } from "./resolvers/Todo";
import { User } from "./resolvers/User";
import {db} from "./db/db"
const fs = require("fs");
const path = require("path");
export const schema = createSchema({
    typeDefs: fs.readFileSync(
        path.join(__dirname, "schema/schema.graphql"),
        "utf-8"
    ),
    resolvers: {
        Query,
        Todo,
        User
    },
  

});

function main() {
    const yoga = createYoga({ schema, context:{db} });
    const server = createServer(yoga);
    server.listen(4000, () => {
      console.info("Server is running on http://localhost:4000/graphql");
    });
  }
  
  main();