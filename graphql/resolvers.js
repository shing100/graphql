import { getMovies, getMovie, getSuggestions } from "./db";

// 리졸버 지정을 해줘야함
const resolvers = {
    Query: {
        movies: (_, {rating, limit}) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id)
    }
};
  
export default resolvers;