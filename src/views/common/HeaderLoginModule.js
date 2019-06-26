import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default class HeaderLoginModule extends Component{

    onPressBack = () =>{
       // this.props.navigation.navigate.goBack();
    }
    render(){

        return(
            <View style={styles.headerView}>
                <TouchableOpacity onPress={this.onPressBack()} style={styles.backButton}>
                <Icon name="arrowleft" color="black" style={{fontSize:30}} />
                </TouchableOpacity>
                 <Text style={styles.titleStyle}> {this.props.viewName}</Text>
            </View>
        )
    }
}

const styles  = {
headerView:{
    backgroundColor:'yellow',
    flexDirection: 'row',
    flex:1, 
},
backButton:{
    alignSelf: 'flex-start',
    marginLeft: '2%',
  //  flex:0.2
},
titleStyle:{
    color:'black',
    fontFamily:'Montserrat-Regular',
   // fontWeight:'200',
    fontSize:14,
    alignSelf:'center',
    flex:0.9,
    textAlign:'center',
    justifyContent:'center',
   // backgroundColor:'red'
   }
}