let count = 0

export const handleSubmit = (e, movieData, moviesContainer) => {
    e.preventDefault()
    count++
    
    // Extract values from the form input fields
    const title = e.target[0].value
    const criticScore = parseInt(e.target[1].value)
    const audienceScore = parseInt(e.target[2].value)
    const domestic = parseInt(e.target[3].value)
    const genre = e.target[4].value

   //creating object to push all form data into moviedata Json file 
    let inputValues = {
        criticScore: criticScore,
        audienceScore: audienceScore,
        domestic: domestic,
        genre: genre,
        title: title
    }
    movieData.push(inputValues)
    // Create and set content for various elements within the movie card
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    h3.textContent = `${inputValues.title}`

    const p_Critic = document.createElement('p')
    p_Critic.textContent = `Critic Score: ${inputValues.criticScore}`
  
    const p_Audience = document.createElement('p')
    p_Audience.textContent = `Audience Score: ${inputValues.audienceScore}`
  
    const p_Domestic = document.createElement('p')
    p_Domestic.textContent = `Domestic Total: $${inputValues.domestic}`
  
    const p_Genre = document.createElement('p')
    p_Genre.textContent = `Genre: ${inputValues.genre}`

    // Set a unique identifier for the movie card 
    li.setAttribute('id', `${count}`)

    // Append all elements to the movie card
    li.appendChild(h3)
    li.appendChild(p_Critic)
    li.appendChild(p_Audience)
    li.appendChild(p_Domestic)
    li.appendChild(p_Genre)

    // Add a CSS class for styling
    li.classList.add('movie-card')
    
    // Insert the new movie card to DOM to the beginning of the movies container
    moviesContainer.insertBefore(li, moviesContainer.firstChild)

    //storing and retrieving new form data entries
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    storedFormData.push(inputValues);
    localStorage.setItem('formData', JSON.stringify(storedFormData));
   

    
    
}
