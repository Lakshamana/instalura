import React, { Fragment, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import style from './style'
import getLikeimage from '../../service/likeImgService'

const Photo = ({ imageUrl, description, likes }) => {
  const [liked, setLiked] = useState(false)
  const [likeQty, setLikeQty] = useState(likes)

  const handleLikePress = () => {
    const inc = liked ? -1 : 1
    setLikeQty(likeQty + inc)
    setLiked(!liked)
  }

  return (
    <Fragment>
      <Image source={{ uri: imageUrl }} style={style.img}></Image>
      <Text>{description}</Text>
      <View style={style.wiewLike}>
        <TouchableOpacity style={style.like} onPress={handleLikePress}>
          <Image source={getLikeimage(liked)} style={style.like}></Image>
        </TouchableOpacity>
        <Text>{likeQty}</Text>
      </View>
    </Fragment>
  )
}

export default Photo
