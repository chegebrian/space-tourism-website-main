const mainEl = document.querySelector(".main");

let index = 0;

async function getTechData() {
  const res = await fetch("../data.json");
  const data = res.json();
  return data;
}

function changeTechData(newIndex) {
  index = newIndex;
  displayTechData(index);
  
}

async function displayTechData() {
  const data = await getTechData();
  console.log(data);
  let tech = data.technology[index];

  tech = {
    name: tech.name,
    description: tech.description,
    image: tech.images,
  };

  console.log(tech);

  const markup = `
  <h1><span aria-hidden="true">03</span>Space launch 101</h1>
        <img
          src="${tech.image.potrait}"
          alt=""
          onerror="src='${tech.image.landscape}'"
        />
        <div>
        ${data.technology.map((name, index) => {
          return `<button id="${name}" onClick="changeTechData(${index})">${index + 1}</button>`;
        }).join(" ")}
        </div>
        <span>The terminology...</span>
        <h2>${tech.name}</h2>
        <p class="text-center">
          ${tech.description}
        </p>
  `;

  mainEl.innerHTML = "";
  mainEl.insertAdjacentHTML("beforeend", markup);
}

displayTechData();
