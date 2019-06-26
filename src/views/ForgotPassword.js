import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/forgotPassword.style'
import * as Animatable from 'react-native-animatable';
import { isEmpty } from "lodash";
import HeaderLoginModule from './common/HeaderLoginModule'; 
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from './common/Input';


export default class ForgotPasswordComponent extends Component {
    constructor(props) {
        super(props);
      this.state ={
          email:'',
      }
    }
    // fadeInDownHeader = () => this.refs.headerView.fadeInDown(1000);
    // fadeInMainView = () => this.refs.mainView.fadeIn(2000).then(endState => console.log(endState.finished ? 'fadein finished':" cancelled"))

    // _navigateToGetStartedView = () => {
    //     this.props.navigation.navigate("Signup");
    //   }

      componentDidMount(){
        // this.fadeInDownHeader();
        // this.fadeInMainView();
    }
    
    render() {
        
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <KeyboardAwareScrollView>

                <HeaderLoginModule viewName={'Forgot Password'} />

                    {/* here is the key image */}
                    <Image></Image>
                    <Text> We just need your registered Email id to send you password reset instruction.</Text>

                    <View style={{flexDirection:'row'}}>
                        <IconMaterialCommunity color={'gray'} style={{fontSize:14}} />
                    <Input
                             label={'email'}
                                style={styles.inputStyle}
                                placeholder={'Email'}
                                onChangeText={(text) => this.setState({ email: text })}
                                value={this.state.email}
                                charLimit={30}
                            />
                    </View>
                    
                       <View style={{flexDirection:'row', flex:1, justifyContent:'space-evenly'}}>

                       <TouchableOpacity underlayColor="#25b6ad" style={[styles.loginButton]} onPress={()=> this.props.navigation.goBack()}>
                            <Text style={styles.textButtonTitle}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity underlayColor="#25b6ad" style={[styles.loginButton]} onPress={()=> this.props.navigation.goBack()}>
                            <Text style={styles.textButtonTitle}>Submit</Text>
                        </TouchableOpacity>

                       </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>

        )
    }
}

{/* */ }
                // </View> */}