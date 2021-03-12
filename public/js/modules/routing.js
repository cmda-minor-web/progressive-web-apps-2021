// Routie to ID
function routeHandler(data) {
  const overview = document.getElementById('container')
  const detailpage = document.getElementById('detailpage')
  const feedback = document.getElementById('feedback')
  
  routie({
    ':id': function (id) {
      let filtermovie = data.filter(movie => movie.id == id)[0]
      
      const description = document.getElementById('description')
      description.innerHTML = filtermovie.description
      
      const director = document.getElementById('director')
      director.innerHTML = filtermovie.director
      
      const release_date = document.getElementById('release_date')
      release_date.innerHTML = filtermovie.release_date
      
      overview.classList.toggle('hidden')
      detailpage.classList.toggle('hidden')
      feedback.classList.toggle('hidden')
    },
    '': function (){
      overview.classList.remove('hidden')
      detailpage.classList.add('hidden')
      feedback.classList.remove('hidden')
    }
  })
}

export {routeHandler};