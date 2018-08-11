import { getMovies, getById, addMovie, deleteMovie } from "./db";

// 리졸버 지정을 해줘야함
const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
      },
      Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
}; 

export default resolvers;