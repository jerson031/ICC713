const apiURL = 'https://pokeapi.co/api/v2/pokemon';

let pokemones = [];

const filtrox = [];
let misPokemones = []  ;
let modalEdicion = [] ;
var nombre = document.getElementById("nombre");
const drawApp = () => {
  document.getElementById("app").innerHTML = `
    <h1 class="text-center pt-2">Mis pokemones</h1>
      <div class="d-flex p-3">
        <div class="col-xs-2 col-md-4">
            <ol id="lista-pokemones"></ol>
            
        </div>
        <div class="col-xs-10 col-md-8">
          <div id="pokemon-card" class="d-flex flex-wrap"></div>
          <div id="modal" class="d-flex flex-wrap"></div>
          <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          </div>
      </div>
    </div>
   
  `
};

const getPokemones = async () => {
  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    pokemones = data.results;
    
    
    crearLista();
  } catch (error) {
    console.log(error);
  
  }
};




drawApp();
getPokemones();


const addPokemon = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const { name } = data;
    const{cantidad}=data;
    
    // Utilizamos la desetructuración para obtener la propiedad front_default de la propiedad sprites
    const { front_default } = data.sprites;

    // Mapeamos los stats del pokemon para solo obtener el nombre y puntaje de cada una
    const stats = data.stats.map(stat => {
      return {
        name: stat.stat.name,
        base_stat: stat.base_stat
      }
    });
    crearPokemonCard(name ,cantidad,stats, front_default)
 
    
  } catch (error) {
    console.log(error);
  }
};



// innerHTML y Template String
const crearLista = () => {
  const lista = pokemones.map(poke => `<li class="mb-4">${poke.name} <button class="btn btn-info ml-2" onclick="addPokemon('${poke.url.toString()}');">Agregar</button></li>`);
  document.getElementById("lista-pokemones").innerHTML = lista.join('');
}

const crearPokemonCard = (name,cantidad=1, stats, imageSrc) => {

  misPokemones.forEach(name=> {
    if (name == name) {
        filtrox.push(cantidad++);
    }
});
  console.log(filtrox)
  misPokemones.push({
    
    name,
    cantidad,
    imageSrc,
    stats
  });

  misPokemonesCards();
  
  miEdicion();
}





 
const misPokemonesCards = () => {
 
  document.getElementById("pokemon-card").innerHTML = misPokemones.map((pokemon, i) => pokemonCard(pokemon, i) ).join('');
  
  // Utilizamos el join que nuestro arreglo pase a ser solo un conjunto de código HTML

}
const miEdicion = () => {
 
  document.getElementById("modal").innerHTML = misPokemones.map((pokemon, i) => Editar(pokemon, i) ).join('');
 


  // Utilizamos el join que nuestro arreglo pase a ser solo un conjunto de código HTML

}

const pokemonCard = (pokemon, i) => {
 console.log(pokemon.name);
  // Generamos el HTML de cada card
  return `
  <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    </div>
    <div class="col-xs-12 col-md-6 mb-2">
      <div class="card">
        <div class="card-body">
        <h4 class="text-center">${pokemon.name}</h4>
          <h4 id ="cont" class="text-center">${pokemon.cantidad}</h4>
          <div class="d-flex flex-wrap align-items-center">
            <div class="col-sm-12 col-md-6">
              <img class="card-img-top" style="max-height: 200px; max-width: 200px;" src="${pokemon.imageSrc}" alt="${pokemon.name}">
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="card-text">
                ${ crearStats ( pokemon.stats ) }
                <div class="d-flex justify-content-center">
                  <button class="btn btn-danger" onclick="deleteCard(${i})">Eliminar</button>
                <button class="btn btn-danger" onclick="Editar();">Editar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

}



const Editar = (pokemon,i) =>{
  console.log(pokemon.name);
 
  return `
 
    <div class="col-xs-12 col-md-6 mb-2">
   
      <div class="card">
      <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Editar Pokemon</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="card-body">
 
        <h4 class="text-center">Nombre : ${pokemon.name}</h4>
          <h4 id ="cont" class="text-center"> Cantidad actual : ${pokemon.cantidad}</h4>
          <div class="d-flex flex-wrap align-items-center">
            <div class="col-sm-12 col-md-6">
            
            
            <img class="card-img-top" style="max-height: 200px; max-width: 200px;" src="${pokemon.imageSrc}" alt="${pokemon.name}">
            </div>
            <h4 class="text-center">Nueva cantidad</h4>
            <input type="number" class="card-left"> 
            <div class="d-flex justify-content-left">
           
            <button type="button" class="btn btn-secondary" data-dismiss="modal"> Cerrar </button>
            <button class="btn btn-primary" onclick="${filtrox}">Guardar Cambios</button>
            </div>

            <div class="col-sm-12 col-md-6">
            </div>
              </div>
            </div>
          </div>
        </div>
      `;
           



}

const crearStats = (stats) => {
  // Utilizamos .map para mutar el arreglo y retornar un div con el nombre en negrita y un span con el valor del stat
  return stats.map(stat => `<div><strong>${stat.name}: </strong><span>${stat.base_stat}</span></div>`).join('');
}
const deleteCard = (index) => {
  misPokemones.splice(index, 1);
  misPokemonesCards();
}
