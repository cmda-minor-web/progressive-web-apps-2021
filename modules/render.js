// Using renderMovies function to add variables for each parameter in the database
function renderMovies(data) {
    data.forEach((movie) => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card',)
        const link =document.createElement('a')
        link.href=`#${movie.id}`
        
        const h1 = document.createElement('h1')
        h1.textContent = movie.title
        
        const p = document.createElement('p')
        movie.description = movie.description.substring(0, 300)
        p.textContent = `${movie.description}...`
        
        const int = document.createElement('int')
        int.textContent = movie.release_date
        
        let container = document.getElementById('container');
        container.appendChild(link)
        card.appendChild(h1)
        link.appendChild(card)
        
        // let a = data.map(key => ({id: key.id, title: key.title, description: key.description}));
    })
}

export {renderMovies};