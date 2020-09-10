import React from "react";
import Movie from "./Movie";

function Movies() {
  const getMovies = () => {
    return [
      {
        imageUrl:
          "https://image.tmdb.org/t/p/w300_and_h450_bestv2/q5uZqd324Tug2xWxL72j18ZzK2Z.jpg",
        productName: "Movie 1",
        releasedDate: "May 31, 2016",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 4,
        numOfReviews: 2
      },
      {
        imageUrl:
          "https://image.tmdb.org/t/p/w300_and_h450_bestv2/9xNOiv6DZZjH7ABoUUDP0ZynouU.jpg",
        productName: "Movie 2",
        releasedDate: "October 31, 2016",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 2,
        numOfReviews: 12
      },
      {
        imageUrl:
          "https://image.tmdb.org/t/p/w300_and_h450_bestv2/3ghImmHdp4RnC3UkL6hpLayclnb.jpg",
        productName: "Movie 3",
        releasedDate: "July 30, 2016",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 5,
        numOfReviews: 2
      }
    ];
  };

  const movies = getMovies();

  const listMovies = movies.map((movie) => (
    <Movie key={movie.productName} data={movie} />
  ));

  return (
    <div>
      <ul>{listMovies}</ul>
    </div>
  );
}

export default Movies;
