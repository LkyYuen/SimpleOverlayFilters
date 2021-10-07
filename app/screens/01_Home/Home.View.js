import React, { } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const HomeView = props => {

    return (
        <View style={{ flex: 1 }}>
            {
                props.resetSuccess ?
                <Content padder style={{ margin: 10 }}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        resizeMode='contain'
                        source={{ uri: R.images.fundMbb }}
                    />
                    <TextCustom style={[styles.titleLabelText, { marginTop: 15, marginBottom: 30 }]}>{R.translate('reset/request/messages/success-1')}</TextCustom>
                    <TextCustom style={[styles.titleLabelText, { marginTop: 10 }]}>{R.translate('reset/request/messages/success-2')}</TextCustom>
                    <TextCustom style={styles.inputLabelText}
                        onPress={() => RootNavigation.navigate('Contact', {
                            fromPage: 'ResetPassword'
                        })}>{R.translate('reset/request/messages/success-3')}
                    </TextCustom>
                </Content>
                :
                <Content padder style={{ margin: 10 }}>
                    <TextCustom style={[styles.titleLabelText, { marginBottom: 15 }]}>{R.translate('reset/request/messages/info-1')}</TextCustom>
                    <TextCustom style={[styles.titleLabelText, { marginBottom: 15 }]}>{R.translate('app/reset/reset-password-desc-1')}</TextCustom>
                    <Form style={styles.formContainer}>
                        <TextInputCustom
                            label={R.translate('global/form/email.placeholder')}
                            placeholder={R.translate('global/form/email.placeholder')}
                            placeholderTextColor={whiteLabelTheme.placeHolderColor}
                            callback={value => props.setEmail(value)}
                            value={props.email}
                            required={true}
                            borderBottomColor={componentTheme.textInputTheme.textInputBottomBorderColor}
                            backgroundColor={componentTheme.textInputTheme.textInputBackgroundColor}
                            type={"email-address"}
                            errMsg={props.emailErrMsg}
                        />
                        <ButtonCustom
                            isGradient={true}
                            colors={componentTheme.buttonTheme.buttonPositiveColor}
                            gradientStyle={{ marginTop: 15, width: '100%', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}
                            title={R.translate('app/form/submit.button')}
                            fontSize={15}
                            textColor={componentTheme.buttonTheme.buttonTitleColor}
                            textStyle={{ textAlign: 'center' }}
                            buttonHeight={50}
                            buttonWidth={'100%'}
                            onPress={props.onResetPasswordPress}
                        />
                    </Form>
                </Content>
            }
            
        </View>
    )
}

export default HomeView