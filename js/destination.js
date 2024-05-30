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
  <h1><span aria-hidden="true">01</span>Pick your destination</h1>
        <img
          src="${destinations.images.webp}"
          alt="image-moon"
          srcset=""
          onerror="this.src='${destinations.images.png}'"
        />

        <ul class="destination">
        ${data.destinations.map((destination, index) => {
          return `<li><a onClick="changeTab(${index})">${destination.name}</a></li>`;
        })}
        </ul>

        <h2>${destinations.name}</h2>

        <p class="content text-center">
          ${destinations.description}
        </p>
        <ul class="destination-infor">
          <li>Avg. distance</li>
          <li>${destinations.distance}</li>
          <li>Est. travel time</li>
          <li>${destinations.travel}</li>
        </ul>
`;
  mainEl.innerHTML = "";
  mainEl.insertAdjacentHTML("beforeend", markup);
}

renderMarkup();
