async function getNewSection() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const json = await response.json()
  return json
}

export {
  getNewSection
}
