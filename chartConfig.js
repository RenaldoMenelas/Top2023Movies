export const barConfig = (ctx,movieData) => {
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: movieData.map(value => value.title),
      datasets: [{
        label: 'Domestic Gross',
        data: movieData.map(value => value.domestic),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
};
