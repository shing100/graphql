# graphql-yoga
    npm install graphql-yoga
    or
    yarn add graphql-yoga

    npm install -g babel-cli

    yarn global add babel-cli --ignore-engines
    yarn add node-fetch


    이후 .babelrc 파일 설정
    {
    "presets": [
        "env", "stage-3"
        ]
    }

    yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev

> 그래프큐엘 깃헙
>> https://github.com/prismagraphql/graphql-yoga

    설정
    schema.graphql
    reolvers.js


```javascript
// index.js
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
 });
server.start(() => console.log('Server is running on localhost:4000'));
```

## 데이터베이스가 변경되었을 경우
    type Mutation {
        addMovie(name: String!, score: Int!): Movie!
    }

- 영화 json data
    - https//yts.am/api#list_movies
    - https://yts.am/api/v2/list_movies.json

- node-fatch
    - https://github.com/bitinn/node-fetch

- axios
    - node-fatch 보다는 axios 를 사용하는 것이 좋음
    - underfatch, overfatch를 막을 수 있음