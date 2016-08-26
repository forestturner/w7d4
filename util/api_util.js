
const fetchAllPokemon = function(success){
  $.ajax({
    method: 'GET',
    url: '/api/pokemon',

    success
  });
};

const API = {
  fetchAllPokemon
};

export default API;
