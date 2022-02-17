import React from 'react'
import {StatusBar } from 'react-native'

export default function Statusbar ({color}) {
    return (
        <StatusBar
          barStyle='dark-content'
          hidden={false}
          backgroundColor={color}
          translucent={true}
        />
    )
}
