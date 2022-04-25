//fetch using DnD5eAPI - place information in UL
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    //clear previous results
  document.getElementById('subs').innerHTML =''
  document.getElementById('class').innerHTML =''
    //collect data from field input
    const choice = document.querySelector('input').value.toLowerCase()
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
    // parse response as JSON
      .then(res => res.json()) 
      .then(data => {
          console.log(data)
          document.querySelector('#desc').innerHTML = data.desc
          document.querySelector('#name').innerHTML = data.name
      data.subclasses.forEach( element => {
          //create li
          const li = document.createElement('li')
          //add text to li
          li.textContent = element.name
          //append the li to ul
          document.querySelector('#subs').appendChild(li) 
      })
      data.classes.forEach( element => {
        //create li
        const li = document.createElement('li')
        //add text to li
        li.textContent = element.name
        //append the li to ul
        document.querySelector('#class').appendChild(li) 
    })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

