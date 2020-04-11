const requires = {
  s2: require('../../resources/img/s2.png'),
  's2-checked': require('../../resources/img/s2-checked.png')
}

const getImage = liked => {
  const imgFileName = liked ? 's2-checked' : 's2'
  return requires[imgFileName]
}

export default getImage
