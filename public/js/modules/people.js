function renderPeople(dataPeople) {
    dataPeople.forEach((person) => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card',)
        const link =document.createElement('a')
        link.href=`#${person.id}`
        
        const h1 = document.createElement('h1')
        h1.textContent = person.name

        const int = document.createElement('int')
        int.textContent = person.age
        
        let container = document.getElementById('container');
        container.appendChild(link)
        card.appendChild(h1)
        link.appendChild(card)
        
        // let a = data.map(key => ({id: key.id, title: key.title, description: key.description}));
    })
}

export {renderPeople};