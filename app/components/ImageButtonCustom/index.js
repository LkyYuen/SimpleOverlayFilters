import React from "react"
import { TouchableOpacity, Image } from "react-native"

export default ImageButtonCustom = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
        >
            <Image
                source={props.image}
                style={props.styles}
                resizeMethod={"resize"}
                resizeMode={"contain"}
            />
        </TouchableOpacity>
    )
}