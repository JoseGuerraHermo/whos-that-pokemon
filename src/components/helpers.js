export const reveal = () => {
  const pokemonToGuess = document.querySelector('.pokearea_img')
  const questionM = document.querySelector('.pokearea_q')
  const wrongAns = document.querySelectorAll('.ex')
  const pokeballs = document.querySelectorAll('.pokeballImg')

  questionM.innerHTML = ''
  pokemonToGuess.classList.remove('siluet')
  wrongAns.forEach((x) => (x.style.display = 'block'))
  pokeballs.forEach((pkb) => (pkb.style.display = 'block'))
}
export const hide = () => {
  const pokemonToGuess = document.querySelector('.pokearea_img')
  const questionM = document.querySelector('.pokearea_q')
  const wrongAns = document.querySelectorAll('.ex')
  const pokeballs = document.querySelectorAll('.pokeballImg')

  questionM.innerHTML = '?'
  pokemonToGuess.classList.add('siluet')
  wrongAns.forEach((x) => (x.style.display = 'none'))
  pokeballs.forEach((pkb) => (pkb.style.display = 'none'))
}
export const RandomNumb = () => {
  let randonmNumbList = []
  while (randonmNumbList.length < 3) {
    let n = Math.floor(Math.random() * (150 - 0 + 1) + 0)
    if (randonmNumbList.indexOf(n) === -1) randonmNumbList.push(n)
  }
  return randonmNumbList
}
const random3 = () => {
  let randonmNumbList = []
  while (randonmNumbList.length < 3) {
    let n = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    if (randonmNumbList.indexOf(n) === -1) randonmNumbList.push(n)
  }
  return randonmNumbList
}
export const randomOrder = () => {
  const arr = random3()
  const firstButton = document.querySelector('.buttonZero')
  const secondButton = document.querySelector('.buttonOne')
  const thirdButton = document.querySelector('.buttonTwo')

  firstButton.setAttribute('style', `order: ${arr[0]};`)
  secondButton.setAttribute('style', `order: ${arr[1]};`)
  thirdButton.setAttribute('style', `order: ${arr[2]};`)
}
export const animationPoints = () => {
  const animation = document.querySelector('.board_points-score')
  animation.classList.toggle('pointUp')
  setTimeout(() => {
    animation.classList.toggle('pointUp')
  }, 1000)
}
export const loadingImg = () => {
  const imgPokemon = document.querySelector('.pokearea_img')
  imgPokemon.setAttribute('style', 'visibility: hidden;')
  imgPokemon.addEventListener(
    'load',
    () => {
      imgPokemon.setAttribute('style', 'visibility: block;')
    },
    false,
  )
}
