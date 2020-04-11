function readFeed() {
  return fetch('http://10.0.2.2:3030/feed').then(res => res.json())
}

export default readFeed
