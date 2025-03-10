
export const TMDB_CONFIG = {
    BASE_URl : 'https://api.themoviedb.org/3',
    API_KEY : process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept:'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    }
}

export const fetchPopularMovies = async ({query} : {query: string}) => {
    const endpoint = query 
    ?`${TMDB_CONFIG.BASE_URl}/search/movie?query=${encodeURIComponent(query)}`:
    `${TMDB_CONFIG.BASE_URl}/discover/movie?sort_by_popularity.desc`
    const response = await fetch(endpoint, {
        method : "GET",
        headers: TMDB_CONFIG.headers,
        
    });

    if(!response.ok) {
        throw new Error("Failed to fetch movies");
        
    }
    const data = await response.json();
    return data.results;

}   
//const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
//const options = {
 // method: 'GET',
 // headers: {
  //  accept: 'application/json',
//    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDc2ZmE2ZGYwMmI2MDZlMjg3OTZlZDMwM2MzODM0OSIsIm5iZiI6MTc0MTUzMzQxNi42ODEsInN1YiI6IjY3Y2RiMGU4Mjc5NGIwZDU5ODJhN2Y0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZazrpCbRroEUsurqjIaD_5wgMSJipComQBWVgZPULqk'
//  }
//};

//fetch(url, options)
//  .then(res => res.json())
 // .then(json => console.log(json))
 // .catch(err => console.error(err));