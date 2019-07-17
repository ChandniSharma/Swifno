import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, Switch } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/signup.style'
import commonStyles from '../stylesheet/common.style';
import * as Animatable from 'react-native-animatable';
import Input from './common/Input';
import Logo from './common/Logo';
import HeaderLoginModule from './common/HeaderLoginModule'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderMenuAndBell from './common/HeaderMenuAndBell';

export default class MySettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            uploadPicture: '',
            isBidReceived:true,
            isBidStatus: true, 
        }
    }

    fadeInMainView = () => this.refs.mainView.fadeIn(2000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    fadeIn = () => this.refs.titleText.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeInDownHeader = () => this.refs.headerView.fadeInDown(1000);

    moveTextUp1 = () => this.refs.viewTxtInputCat.fadeInUp(1000).then(this.moveSecondViewUp());

    moveTextUp2 = () => this.refs.viewTxtInputSubCat.fadeInUp(2000).then(endState => endState.finished ? "finish " : console.log('finish not'));

    moveToForgotPasswordView = () => {
        this.props.navigation.navigate('ForgotPasswordComponent');
    }
    onClickRememberMe() {
        this.setState({ isRemember: !this.state.isRemember });
    }
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                    <HeaderMenuAndBell viewName={'My Settings'} navigation={this.props.navigation}  />

                <KeyboardAwareScrollView style={styles.container}>
                    <View style={{ flex: 1, marginBottom: '2%' }}>
                        <View style={{ backgroundColor: 'white', flex: 1 }}>

                            <Text>Profile Details</Text>
                            <View style={{ flexDirection: 'row', flex:0.3 }}>
                                <Text>Merchant Key:</Text>
                                <Text style={{textDecorationLine: 'underline'}}> 7fcl56ytrjkluop56</Text>
                            </View>


                            <View style={{ flex: 0.4 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: '2%' }}>
                                    <IconSimpleLine name="user" style={styles.icon} />
                                    <Input
                                        label={'First Name'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'First Name'}
                                        onChangeText={(text) => this.setState({ userName: text })}
                                        value={this.state.userName}
                                        charLimit={30}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: '2%' }}>
                                    <IconSimpleLine name="user" style={styles.icon} />
                                    <Input
                                        label={'Last Name'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'First Name'}
                                        onChangeText={(text) => this.setState({ userName: text })}
                                        value={this.state.userName}
                                        charLimit={30}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: '2%' }}>
                                    <IconSimpleLine name="phone" style={styles.icon} />
                                    <Input
                                        label={'Phone No'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'Phone Number'}
                                        //keyboardType= 'number-pad'
                                        onChangeText={(text) => this.setState({ phoneNumber: text })}
                                        value={this.state.phoneNumber}
                                        charLimit={30}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: '2%' }}>
                                    <IconSimpleLine name="camera" style={styles.icon} />
                                    <Input
                                        label={'Upload Picture'}
                                        style={commonStyles.inputStyle}
                                        placeholder={'First Name'}
                                        onChangeText={(text) => this.setState({ userName: text })}
                                        value={this.state.userName}
                                        charLimit={30}
                                    />
                                    <View>
                                        <TouchableOpacity>
                                            <Text> Browse</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Image source={{uri:'https://bootdey.com/img/Content/avatar/avatar6.png'}} style={{ width: 60, height: 60, margin:'2%'}} />

                            </View>
                            <View style={{flex:0.3}}>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text>Bid Received</Text>
                                    <View>
                                        <Switch
                                        //  onValueChange = {props.toggleSwitch1}
                                        //  value = {props.switch1Value}
                                        />
                                    </View>

                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text>Bid Status</Text>
                                    <View>
                                        <Switch
                                        //  onValueChange = {props.toggleSwitch1}
                                        //  value = {props.switch1Value}
                                        />
                                    </View>
                                </View>

                                <View style={styles.buttonNotSelected}>
                                    <TouchableOpacity style={[styles.signupButton]}>
                                        <Text style={styles.textSelected}>Submit</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={styles.buttonSelected}>
                                    <TouchableOpacity style={[styles.signupButton]} onPress={() => this.props.navigation.navigate('Login')}>
                                        <Text style={styles.signupText}>Change Password</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}
