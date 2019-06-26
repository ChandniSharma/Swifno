import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/login.style'
import * as Animatable from 'react-native-animatable';
import Input from './common/Input';
import Logo from './common/Logo';
import HeaderLoginModule from './common/HeaderLoginModule'
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterialIcons  from 'react-native-vector-icons/MaterialIcons';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }

    fadeInMainView = () => this.refs.mainView.fadeIn(2000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    fadeIn = () => this.refs.titleText.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeInDownHeader = () => this.refs.headerView.fadeInDown(1000);

    moveTextUp1 = () => this.refs.viewTxtInputCat.fadeInUp(1000).then(this.moveSecondViewUp());

    moveTextUp2 = () => this.refs.viewTxtInputSubCat.fadeInUp(2000).then(endState => endState.finished ? "finish " : console.log('finish not'));

moveToForgotPasswordView = () =>{
this.props.navigation.navigate('ForgotPasswordComponent');
}
    render() {
        return (
            <SafeAreaView>
                <KeyboardAwareScrollView >
                    <View style={{flex:1,backgroundColor:'rgb(245,245,245)'}}>
                <HeaderLoginModule viewName={'Login'} />
                    <View style={{ backgroundColor: 'white' }}>
                       
                        <Text style={styles.loginText}> Swifno</Text>
                        
                       <View style={{flexDirection:'row', justifyContent: 'center',}}>
                           <IconSimpleLine name= "user" style={{fontSize:22, marginLeft:'5%', marginTop:'5%'}} />
                           <Input
                             label={'User Name'}
                                style={styles.inputStyle}
                                placeholder={'User Name'}
                                onChangeText={(text) => this.setState({ userName: text })}
                                value={this.state.userName}
                                charLimit={30}
                            />
                       </View>
                            
                       <View style={{flexDirection:'row'}}>
                           <IconMaterialIcons name= "lock-open" style={{fontSize:22, marginLeft:'5%', marginTop:'5%'}} />
                            <Input
                             label={'Password'}
                                style={styles.inputStyle}
                                placeholder={'Password'}
                                secureTextEntry={true}
                                onChangeText={(text) => this.setState({ password: text })}
                                value={this.state.password}
                            />

</View>

                        </View>
                        <View style={styles.rememberView}>
                        
                            <TouchableOpacity style={styles.tickMarkView}>
                                <Image />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.rememberBtn}  >
                                <Text style={styles.rememberText}> Remember me</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity underlayColor="#25b6ad" style={[styles.loginButton]}>
                            <Text style={styles.textButtonTitle}>Login</Text>
                        </TouchableOpacity>

                            <TouchableOpacity style={styles.forgotPwdBtn} onPress={()=> this.props.navigation.navigate('ForgotPasswordComponent')}>
                                <Text style={styles.forgotPwdText}> Forgot Password?</Text>
                            </TouchableOpacity>

                            <Text style={styles.orText}> Or</Text>
                            <TouchableOpacity underlayColor="#25b6ad" style={styles.facebookBtn}>
                               
                               <Text>Facebook login</Text>
                           </TouchableOpacity>
                       
                   <View style={{flexDirection:'row', alignSelf:'center'}}>
    <Text>Don't have an account </Text>
    <TouchableOpacity underlayColor="#25b6ad" style={[styles.signupButton]}>
                            <Text style={styles.signupText}>signup</Text>
                        </TouchableOpacity>
                   </View>
                    
            </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}
