export default async function getResult(params) {
    const data = await fetch(`http://api.mathjs.org/v4/?expr=${params}`)
    return data.json()
}