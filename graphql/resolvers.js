import { getMovies } from "./db";

// 리졸버 지정을 해줘야함
const resolvers = {
    Query: {
        movies: () => getMovies()
    }
}; 
 
export default resolvers;