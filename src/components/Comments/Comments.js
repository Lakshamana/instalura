import React, { Fragment, useState } from 'react'
import {
  FlatList,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity
} from 'react-native'
import sendImg from '../../../resources/img/send.png'
import style from './style'

const Comments = ({ comments }) => {
  const [comment, setComment] = useState('')
  const [commentList, setCommentList] = useState(comments)

  const addComment = () => {
    const newComment = {
      text: comment,
      date: new Date().toISOString(),
      userName: 'me'
    }
    setCommentList([...commentList, newComment])
    setComment('')
  }

  return (
    <Fragment>
      <FlatList
        data={commentList}
        keyExtractor={(_, idx) => '' + idx}
        renderItem={({ item }) => (
          <View>
            <Text>{item.userName}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <View style={style.inline}>
        <TextInput
          placeholder="Deixe seu comentário"
          style={style.input}
          onChangeText={txt => setComment(txt)}
          value={comment}
        />
        <TouchableOpacity onPress={addComment}>
          <Image source={sendImg} style={style.send} />
        </TouchableOpacity>
      </View>
    </Fragment>
  )
}

export default Comments
