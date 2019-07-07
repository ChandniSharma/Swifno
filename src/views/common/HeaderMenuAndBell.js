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


export default  class HeaderMenuAndBell extends Component {

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
              <IconEntypo name="menu"  style={{ fontSize: 30, padding: '2%' }}  onPress = {()=>this.props.navigation.openDrawer()}/>
               <Text style={styles.titleStyle}> {viewName}</Text>

                <TouchableOpacity style={ {marginBottom:'3%', alignSelf: 'flex-end'}} onPress={onPressBell}>
                    <IconEvilIcons name="search" color="black" style={{ fontSize: 30, tintColor: 'white' }} />
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
    mainView:{
        flexDirection: 'row', height: 48, width: '100%', alignItems: 'space-between', justifyContent: 'center',
        backgroundColor: 'rgb(246, 205, 74)', 
    },
    imgSideTitle: {
        color: 'white',
        // fontSize: 21,

        alignSelf: 'flex-start',
        //  fontFamily: 'Montserrat-Bold',
        flex: 0.3,
        width: 50,
        height: 40
    },
    titleStyle: {
        color: 'black',
        fontFamily: 'Montserrat-Regular',
        // fontWeight:'200',
        fontSize: 20,
        alignSelf: 'center',
        flex: 0.9,
        textAlign: 'center',
        justifyContent: 'center',


    },
   
    bellButton: {
        width: 64,
        height: 64,
        right: '5%',
        alignSelf: 'flex-end',


    },
    bellIcon: {
        width: 64,
        height: 64,
    }
}