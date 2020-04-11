import React from 'react'
import { Text, View, Image } from 'react-native'
import style from './style'

const Header = ({ name, photoUrl }) => {
  return (
    <View style={style.header}>
      <Image source={{ uri: photoUrl }} style={style.userPhoto}></Image>
      <Text>{name}</Text>
    </View>
  )
}

export default Header
