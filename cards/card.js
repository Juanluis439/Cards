const datos = [
    {
        id: "carta1",
        imageSrc: "/img/ash.jpeg",
        name: "Ash Ketchum",
        firstName: "Ash",
        lastName: "Ketchum",
        age: 10,
        height: "1.65m",
        weight: "54kg"
      },
    {
      id: "carta2",
        imageSrc: "/img/tyson.jpeg",
        name: "Tyson Granger",
        firstName: "Tyson",
        lastName: "Granger",
        age: 13,
        height: "1.48m",
        weight: "50kg" 
      },
    {
      id: "carta3",
        imageSrc: "/img/yugi.jpeg",
        name: "Yugi Moto",
        firstName: "Yugi",
        lastName: "Moto",
        age: 15,
        height: "1.53m",
        weight: "55kg" 
      },    
];

const cardsHTML = datos.map((cardData) => {
  return ` <div id="${cardData.id}">
  <img src="${cardData.imageSrc}" alt="${cardData.name}">
  <h2>${cardData.name}</h2>
  <p>Nombre: ${cardData.firstName}</p>
  <p>Apellido: ${cardData.lastName}</p>
  <p>Edad: ${cardData.age}</p>
  <p>Altura: ${cardData.height}</p>
  <p>Peso: ${cardData.weight}</p>
</div>`;
});

console.log(datos)









/*const cardsHTML = datos.map((cardData) => {
    return `
      <div id="${cardData.id}">
        <img src="${cardData.imageSrc}" alt="${cardData.name}">
        <h2>${cardData.name}</h2>
        <p>Nombre: ${cardData.firstName}</p>
        <p>Apellido: ${cardData.lastName}</p>
        <p>Edad: ${cardData.age}</p>
        <p>Altura: ${cardData.height}</p>
        <p>Peso: ${cardData.weight}</p>
      </div>`;
  });*/

