import React from 'react'
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome'

export function IconButton({iconSize, iconColor, iconName, action}) {
  return (
    <FontAwesomeIcon name={iconName} size={iconSize} color={iconColor} onPress={action}/>
  )
}

export default IconButton