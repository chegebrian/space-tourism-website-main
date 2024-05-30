const mainEl = document.querySelector(".main");
async function getCrew() {
  const response = await fetch("../data.json");
  const data = response.json();
  console.log(data);
  return data;
}

let index = 0;

async function displayCrew() {
  const data = await getCrew();
  console.log(data);
  let crew = data.crew[index];

  crew = {
    role: crew.role,
    name: crew.name,
    infor: crew.bio,
    image: crew.images,
  };

  console.log(crew);

  const markup = `
  <h1 class="playfair-display-bold"><span aria-hidden="true">02</span>Meet your crew</h1>
        <span class="role source-sans-3-regular">${crew.role}</span>
        <h3 class="name playfair-display-bold">${crew.name}</h3>
        <p class="crew-infor source-sans-3-regular text-center">
            ${crew.infor}
        </p>
        <div>
        ${data.crew.map(role => {
            return `<input type="radio" name="crew" id="${role}" />`
        }).join(" ")}
        </div>
        <img
          class="crew-image"
          src="${crew.image.webp}"
          alt=""
          onerror="src ='${crew.image.png}'"
        />
  `;

  mainEl.insertAdjacentHTML("beforeend", markup);
}

displayCrew();
