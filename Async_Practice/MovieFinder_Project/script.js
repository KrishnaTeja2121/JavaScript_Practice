//api=http://img.omdbapi.com/?35855857=[yourkey]&s=

//http://www.omdbapi.com/?apikey=[yourkey]&


document.addEventListener("DOMContentLoaded",()=>{
    const movieForm=document.getElementById("movieForm");
    const movieResult=document.getElementById("movieResults");
    movieForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const movieName=document.getElementById("movieInput").value;
        console.log(movieName);   
        searchMovies(movieName);   
    });


    //search for movies

    async function searchMovies(movieName){
        try {
            movieResult.innerHTML='<div class="loading">Searching Movies........</div>'
            const response=await fetch(`http://www.omdbapi.com/?apikey=14e82aca&s=${movieName}`);
            const movieData=await response.json();
            console.log(movieData);            
            if((movieData.response==="False"))  {
                throw new Error("No Movies Exists");
            } 
            displayMovies(movieData.Search);                 
        } catch (error) {
            movieResult.innerHTML=`
            <div class="error-message"> 
            "Error Fetching Movies.....PLease try again"
            </div>
            `;
        }
    }

    // display all the movies
    function displayMovies(movies) {
        movieResults.innerHTML = `
                  <div class="movies-grid">
                      ${movies
                        .map(
                          (movie) => `
                          <div class="movie-card">
                              <img 
                                  src="${
                                    movie.Poster !== "N/A"
                                      ? movie.Poster
                                      : "https://via.placeholder.com/300x450?text=No+Poster"
                                  }" 
                                  alt="${movie.Title}"
                                  class="movie-poster"
                                 
                              >
                              <div class="movie-info">
                                  <h3 class="movie-title">${movie.Title}</h3>
                                  <div class="movie-year">${movie.Year}</div>
                              </div>
                          </div>
                      `
                        )
                        .join("")}
                  </div>
              `;
      }
    
});





