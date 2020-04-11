import React, { Fragment, useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { Header } from './src/components/Header'
import { Photo } from './src/components/Photo'
import { Comments } from './src/components/Comments'
import readFeed from './src/service/feedService'

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    readFeed().then(data => setData(data))
  }, [])

  return (
    <FlatList
      data={data}
      keyExtractor={item => '' + item.id}
      renderItem={({ item }) => (
        <Fragment>
          <Header name={item.userName} photoUrl={item.userURL} />
          <Photo
            imageUrl={item.url}
            description={item.description}
            likes={item.likes}
          />
          <Comments comments={item.comentarios} />
        </Fragment>
      )}
    ></FlatList>
  )
}

export default App
