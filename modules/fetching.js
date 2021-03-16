module.exports = async function fetchData() {
  const dataResponse = await fetch(`https://ghibliapi.herokuapp.com/films`)
  const jsonData = await dataResponse.json()
  return jsonData;
}