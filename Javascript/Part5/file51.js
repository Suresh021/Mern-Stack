const url = "https://jsonplaceholder.typicode.com/users"
async function fetchData() {
    const response = await fetch(url)
    const result = await response.json(response)
    console.log(result)
}
fetchData()