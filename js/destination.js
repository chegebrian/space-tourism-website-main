export default async function destination() {
  const res = await fetch("../data.json");
  const data = await res.json();
  console.log(data);
}

destination();
