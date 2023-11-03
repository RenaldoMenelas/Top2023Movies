export const doughnutConfig = (donutctx, movieData) => {
    let genreCounts = {}
     
    for (let i = 0; i < movieData.length; i++){
        if (!genreCounts[movieData[i].genre]) {
            genreCounts[movieData[i].genre] = 1
        }
        else{
            genreCounts[movieData[i].genre]++
        }
    }
   
    
    return new Chart(donutctx, {
    type: 'doughnut',
     labels: ' genre Domestic Gross',
      data: {
        labels: [...new Set(movieData.map(value => value.genre))],
        datasets: [{
          label: 'Domestic Gross',
          data:  Object.values(genreCounts).map(value => value),
          borderWidth: 1
        }]
    },
   
    })
   
  };
