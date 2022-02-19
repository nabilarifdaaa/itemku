import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Divider = () => {
  return (
    <View style={styles.container}/>
  )
}

export default Divider 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',
        height: 10,
        width: '100%'
    }
})