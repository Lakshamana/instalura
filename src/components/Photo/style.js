import { Dimensions } from 'react-native'
import { StyleSheet } from 'react-native'

const { width } = Dimensions.get('screen')
const style = StyleSheet.create({
  img: {
    width,
    height: width
  },
  like: {
    width: 40,
    height: 40,
    margin: 5
  },
  wiewLike: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'space-between'
  }
})

export default style
