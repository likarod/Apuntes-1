async function getPokemon(pokemon = "") {
    return new Promise((resolve, reject) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).catch(reject).then(data => data.status === 200 ? data.json() : reject(data.status)).then(async data => {
            if (data.count) {
                let res = [];
                for (let i = 0; i < data.results.length; i++) {
                    res.push(await (await fetch(data.results[i].url)).json());
                }
                resolve(res);
            }
            resolve([data]);
        });
    });
}

/*
Crea la función processPokemon que acepte como parámetro un string (el nombre del pokemon),
con dicho string, llama a la función asíncrona getPokemon (la que os doy).

getPokemon puede resolver o rechazar:
    resolve:
        recibirás un array de jsons como el qué encontrarás en pokemon.json
    reject:
        código de error
Si la función devuelve el array de jsons, deberás imprimir por consola:
    ["El pokemon " + nombre del pokemon + " tiene las habilidades: limber, impostor"] lista de habilidades (ejemplo: limber, imposter)

*/

function processPokemon (string) {
    getPokemon(string)
    .then((a)=> {
        console.log(a.map((resultadoArray) => 
        "El pokemon " + resultadoArray.name + " tiene las habilidades " + resultadoArray.abilities.map((result)=> result.ability.name).join(",")))
    })
    .catch((e)=> console.log(e))
};

processPokemon("");
/* 
1. Yo quiero leer el array y buscar lo que estoy pidiendo. 
*/
