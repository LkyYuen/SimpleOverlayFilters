import React from "react"
import { Text } from "react-native"
import { Colors } from "../../constants"

export default TextCustom = props => {
    return (
        <Text
            {...props}
            allowFontScaling={false}
            onPress={props.onPress}
            style={props.style ? [{ color: Colors.txtGeneralColor }, props.style] : {}}
        >
            {props.children ? props.children : null}
        </Text>
    )
}