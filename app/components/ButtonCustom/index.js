import React from "react"
import { TouchableOpacity, Platform } from "react-native"
import { Colors } from "../../constants"

export default ButtonCustom = props => {
    return (
        <TouchableOpacity
            disabled={props.disabled ? props.disabled : false}
            style={[{
                width: props.buttonWidth || "100%", 
                backgroundColor: props.backgroundColor || "black",
                borderRadius: props.isRounded ? 7 : 0,
                justifyContent: 'center', 
                alignSelf: 'center', 
                alignItems: 'center', 
                height: props.buttonHeight || 50
            }].concat(props.style || [])}
            onPress={props.onPress}
        >
            <TextCustom
                style={[{
                    color: props.textColor || Colors.txtGeneralColor, textAlign: 'center',
                    fontWeight: Platform.OS == 'ios' ? '600' : 'normal', alignSelf: 'center',
                    fontSize: props.fontSize || 18
                }].concat(props.textStyle || [])}
            >
                {props.title}
            </TextCustom>
        </TouchableOpacity>
    )
}