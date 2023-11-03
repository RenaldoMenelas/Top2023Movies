export function displayMovies(movies) {
  
  
  movies.forEach(element => {
  document.querySelector('#Movie-container').innerHTML +=
      
      `
      <li class="movie-card">
      <h3>${element.title}</h3>
      <p>Critic Score: ${element.criticScore}<p>
      <p>Audience Score: ${element.audienceScore}<p>
      <p>Domestic Total: $${element.domestic}<p>
      <p>Genre: ${element.genre}<p>
    </li>
    `


  });
   
  }