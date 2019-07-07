import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
//import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
//import Logo from './logo';
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import IconEntypo from 'react-native-vector-icons/Entypo';
//import Hamburger from 'react-native-hamburger';
import Icon from "react-native-vector-icons/AntDesign";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";


export default class HeaderMenuAndBell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isScrollDown: false,
            headerColorMix: ['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)'],
            headerColor: ['rgb(42, 173,177)', 'rgb(93, 152, 179)'],
            isContactInfoClick: false,
            isDropDownclick: false,
            isSideMenuClick: false,
            isSearchbarDataShow: false,
            isCrossClick: false,
            active: false,
            isBottomMobileShow: true,
            mobileNumber: '',
            isNotificationShow: false,
        }
    }

    render() {
        const { colors, onPressPopup, onPressBell, isNotificationShow, notificationCount, isBackButtonShow, viewName } = this.props;
        return (
            <View style={styles.mainView}>
                <TouchableOpacity style={styles.imageLeft} onPress={() => this.onPressBack()}>
                    <IconEntypo name="menu" style={styles.icon} onPress={() => this.props.navigation.openDrawer()} />
                </TouchableOpacity>

                <Text style={styles.titleStyle}> {viewName}</Text>

                <TouchableOpacity style={styles.imageRight} onPress={onPressBell}>
                    <IconEvilIcons name="search" color="black" style={styles.icon} />
                </TouchableOpacity>
            </View>
        )
    }
}


// eslint-disable-next-line

//   export default connect(
//       mapStateToProps,
//       null
//     )(HeaderMenuAndBell);

const styles = {
    mainView: {
        flexDirection: 'row',
        height: 64,
        width: '100%',
        alignItems: 'space-between',
        justifyContent: 'center',
        backgroundColor: 'rgb(246, 205, 74)',
    },
    imageLeft: {
        flex: 0.15,
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'pink'
    },

    titleStyle: {
        color: 'black',
        // fontFamily: 'Montserrat-Regular',
        // fontWeight:'200',
        fontSize: 20,
        alignSelf: 'center',
        flex: 0.7,
        //alignItems: 'center',
        textAlign:'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'red'
    },
    imageRight: {

        flex: 0.15,
        height: '100%',
        justifyContent: 'center'
    },
    icon:{
        fontSize: 30, alignSelf:'center'
    }
}