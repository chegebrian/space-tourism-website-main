const mainEl = document.querySelector(".main");

async function destination() {
  const res = await fetch("../data.json");
  const data = await res.json();
  return data;
}

async function renderMarkup() {
  const data = await destination();
  let { destinations } = data;

  destinations = {
    description: destinations[0].description,
    distance: destinations[0].distance,
    name: destinations[0].name,
    travel: destinations[0].travel,
    images: destinations[0].images
  }
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
        ${data.destinations.map(destination => {
          return `<li><a href="../html/destination-${destination.name}.html">${destination.name}</a></li>`
        })}
        </ul>

        <h2>Moon</h2>

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

mainEl.insertAdjacentHTML('beforeend', markup);
}

renderMarkup();
