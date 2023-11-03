import './style.css'
import { displayMovies } from './displayMovies'
import movieData from './movie-data.json'
import { handleSubmit } from './formHandler'
import {barConfig} from './chartConfig'
import { doughnutConfig } from './donughtChart'
import { scatterConfig } from './scatterChart'
import {genreCounts} from './scatterChart'
let moviesContainer = document.querySelector('#Movie-container')
const barctx = document.getElementById('barChart');
const doughnutctx = document.getElementById('donutChart');
const scatterctx = document.getElementById('ScatterplotsChart')
const form = document.querySelector('form')



displayMovies(movieData);
form.addEventListener('submit', (e) => {

  handleSubmit(e, movieData, moviesContainer)
  let lastestMovie = movieData[movieData.length-1]
  barChart.data.labels.push(lastestMovie.title)
  barChart.data.datasets[0].data.push(lastestMovie.domestic)
console.log(lastestMovie.genre)
  console.log(genreCounts)

  for (const key in genreCounts) {
    if(lastestMovie.genre === key) {
    console.log(genreCounts[key] = genreCounts[key] +1) 
    }
  }
  console.log(genreCounts)
  doughnutChart.data.labels.push(lastestMovie.title)
  doughnutChart.data.datasets[0].data =  Object.values(genreCounts).map(value => value)
  console.log(doughnutChart.data.datasets[0].data)

  
  barChart.update()
  doughnutChart.update()
  form.reset()
 

})

const barChart = barConfig(barctx, movieData)
const doughnutChart = doughnutConfig(doughnutctx, movieData)
const scatterChart = scatterConfig(scatterctx, movieData)

//why can i use instance here but not innot after last event

let data = JSON.parse(localStorage.getItem('formData'))
console.log(data)
if (data) {
  for (let i = 0; i < data.length; i++){
    barChart.data.labels.push(data[i].title)
    barChart.data.datasets[0].data.push(data[i].domestic)
    barChart.update()
    
  }
  window.addEventListener('load', (e) => {
    moviesContainer.innerHTML = ""
    let newData = displayMovies(data)
    newData += displayMovies(movieData)
    })
  
}
document.getElementById('delete-Added-Movies').addEventListener('click',(e)=> {
  localStorage.clear()
  barChart.update()
  doughnutChart.update()
  window.location.reload()

})










