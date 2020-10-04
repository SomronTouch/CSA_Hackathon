// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js
export default async () => {
  return fetch('http://localhost:8080/fires')
    .then(res => res.json())
}
