const newpokidiv=document.getElementById('newpoki')
const pokiimgdiv=document.getElementById('pokiimg')
const searchpokiDiv=document.getElementById('searchpoki')
const searchInputdiv=document.getElementById('searchinput')

const getPokiimg=(pokiNo)=>
  {
  const img=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokiNo}.png`
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokiNo}`)
  .then(response=>response.json())
  .then(json=>
    {
      pokiimgdiv.innerHTML=`<img src='${img}' width=300px height=300px>`
    })
  }

const getPokeinfo=(pokiNo)=>
  {
   fetch(`https://pokeapi.co/api/v2/pokemon/${pokiNo}`)
  .then(response=>response.json())
  .then(json=>
    {
      console.log('Name: ',json.name)
      document.getElementById('pokiname').innerText=json.name
      console.log('Ability: ',json.abilities[0].ability.name)
      document.getElementById('pokistat').innerText=json.abilities[0].ability.name
      console.log('PokiIndex: ',json.game_indices[3].game_index)
      pokiindex=json.game_indices[3].game_index
      getPokiimg(pokiindex)
    }) 
  }

const getRandomPoke=()=>
  {
    let randomno=Math.floor(Math.random()*100)
    getPokeinfo(randomno)
