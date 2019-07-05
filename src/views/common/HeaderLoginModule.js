import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default class HeaderLoginModule extends Component {

    onPressBack = () => {
      
         this.props.navigation.goBack();
    }
    render() {

        return (
            <View style={styles.headerView}>
                <TouchableOpacity onPress={()=>this.onPressBack()} style={styles.backButton}>
                    <Icon name="arrowleft" color="black" style={{ fontSize: 30 }} />
                </TouchableOpacity>
                <Text style={styles.titleStyle}> {this.props.viewName}</Text>
            </View>
        )
    }
}

const styles = {
    headerView: {
        backgroundColor: 'rgb(246, 205, 74)',
        flexDirection: 'row',
       
        height:64,
        justifyContent:'center',
        marginTop:Platform.OS === 'ios'?'-12%':'0%'
    },
    backButton: {
        //alignSelf: 'flex-start',
       // marginLeft: '1%',
        justifyContent:'center',
       
    },
    titleStyle: {
        color: 'black',
        // fontFamily: 'Montserrat-Regular',
        // fontWeight:'200',
        fontSize: 20,
        alignSelf: 'center',
        flex: 0.9,
        textAlign: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    }
}