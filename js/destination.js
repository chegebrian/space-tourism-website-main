const mainEl = document.querySelector(".main");

async function destination() {
  const res = await fetch("../data.json");
  const data = await res.json();
  return data;
}

let index = 0;

async function changeTab(newIndex) {
  index = newIndex;
  renderMarkup(index);
}

async function renderMarkup() {
  const data = await destination();

  let destinations = data.destinations[index];

  destinations = {
    description: destinations.description,
    distance: destinations.distance,
    name: destinations.name,
    travel: destinations.travel,
    images: destinations.images,
  };
  console.log(destinations);

  // render destination

  const markup = `
  <h1 class="roboto-bold text-start"><span aria-hidden="true">01</span>Pick your destination</h1>
        <img
          src="${destinations.images.webp}"
          alt="image-moon"
          srcset=""
          onerror="this.src='${destinations.images.png}'"
        />

        <ul class="destination">
        ${data.destinations.map((destination, index) => {
          return `<li><a onClick="changeTab(${index})" class="lato-bold color">${destination.name}</a></li>`;
        })}
        </ul>

        <h2 class="roboto-bold">${destinations.name}</h2>

        <p class="content text-center lato-regular color">
          ${destinations.description}
        </p>
        <ul class="destination-infor flex">
        <div>
        
        <li class="text-center roboto-regular color font-size-sm margin-bt">Avg. distance</li>
        <li class="text-center roboto-regular font-size-lg">${destinations.distance}</li>
        </div>
          <div>
          <li class="text-center roboto-regular color font-size-sm margin-bt">Est. travel time</li>
          <li class="text-center roboto-regular font-size-lg">${destinations.travel}</li>
          </div>
        </ul>
`;
  mainEl.innerHTML = "";
  mainEl.insertAdjacentHTML("beforeend", markup);
}

renderMarkup();
