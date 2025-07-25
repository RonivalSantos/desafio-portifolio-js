async function fetchProfileData() {
  const url = `https://raw.githubusercontent.com/RonivalSantos/desafio-portifolio-js/refs/heads/main/data/profile.json`;
  return (await fetch(url)).json();
}
