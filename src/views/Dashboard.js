import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator,ScrollView, FlatList } from 'react-native';
import styles from '../stylesheet/dashboard.style'
import HeaderMenuAndBell from './common/HeaderMenuAndBell';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Input from './common/Input';
import { SafeAreaView } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import * as CONST from '../constants/Constant';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

            arrayList: [{ "TokenID": "#121256", "Date": "12th September 2018", "PersonCount": "2 Persons", "address": "45/1, Baikunth Nagar", "City": "Bhopal", "time": "6:00pm-7:00pm" },

            { "TokenID": "#123462", "Date": "18th September 2018", "PersonCount": "2 Persons", "address": "45/1, Baikunth Nagar", "City": "Bhopal", "time": "6:00pm-7:00pm" },

            { "TokenID": "#123896", "Date": "12th October 2018", "PersonCount": "1 Persons", "address": "45/1, Baikunth Nagar", "City": "Bhopal", "time": "9:00pm-10:00pm" },

            // { "TokenID": "#127656", "Date": "12th September 2018", "PersonCount": "5 Persons", "address": "45/1, Baikunth Nagar", "City": "Bhopal", "time": "4:00pm-5:00pm" },

            // { "TokenID": "#123456", "Date": "12th September 2018", "PersonCount": "2 Persons", "address": "45/1, Baikunth Nagar", "City": "Bhopal", "time": "6:00pm-7:00pm" }

            ],

            isCurrentActivitySelected: true,
            isDeliveries: false,
            isPendingRequests: false,
            isRefundRequests: false,
        }
    }
    getCurrentActivity =()=> {
         this.setState({ isCurrentActivitySelected: true });
    }
    getNotification =()=> {
         this.setState({ isCurrentActivitySelected: false });

    }

    getOptionValue(optionName) {

        if (optionName === CONST.DELIVERIES) {
            this.setState({ isDeliveries: true });
        } if (optionName === CONST.PENDING_REVIEWS) {
            this.setState({ isPendingRequests: true });
        } if (optionName === CONST.REFUND_REQUESTS) {
            this.setState({ isRefundRequests: true });
        }
    }
    renderItem = (item, index) => {
        console.log(" Item is ", item.item);
        let strTokenId = "TokenId: " + item.item.TokenID;

        return (
            <View style={styles.viewOuter}>
                <View style={styles.viewInner}>
                    <View >
                        <Text style={styles.textTitle}>
                            {strTokenId}
                        </Text>
                        <Text style={styles.textTimeAndDate}>
                            {item.item.Date}
                        </Text>
                        <Text style={styles.textTimeAndDate}>
                            {item.item.time}
                        </Text>
                        <Text style={styles.textDetail}>
                            {item.item.address}
                        </Text>
                        <Text style={styles.textDetail}>
                            {item.item.City}
                        </Text>
                    </View>
                    <View style={styles.viewContainNumber}>
                        {/* <Text>
                            {item.item.PersonCount}
                        </Text> */}
                    </View>
                </View>
            </View>);


    }
    render() {
        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <View style={{ flex: 1 }}>

                    <HeaderMenuAndBell viewName={'Dashboard'} navigation={this.props.navigation}/>

                    <View style={{ flexDirection: 'row', marginBottom:'2%' , flex:0.11,  justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={()=>this.getCurrentActivity()} style={styles.buttonSegment}>
                            <Text style={styles.textTopBtn}>Current Activity</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.getNotification()} style={styles.buttonSegment}>
                            <Text style={styles.textTopBtn}>Notifications</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'row',width:'100%', height:'0.5%', flex:0.005}}>
                    {this.state.isCurrentActivitySelected ? <Animatable.View style={styles.viewSingleLineLeft} />:<View style={styles.viewSingleLineEmpty}/>}
                  {!this.state.isCurrentActivitySelected ? <Animatable.View style={styles.viewSingleLineRight} /> :null}
                        {/* {this.state.isCurrentActivitySelected ? <Animatable.View style={styles.viewSingleLineLeft} />
                            : <Animatable.View style={styles.viewSingleLineRight} />} */}
                    </View>
                    <View style={[styles.viewSingleLine, {flex:0.005} ]} />

                 {this.state.isCurrentActivitySelected? 
                 <View style={{flex:0.2}}>
                 <ScrollView horizontal={true} style={[styles.scrollView]}>
                    <View style={{ flexDirection: 'row', marginTop:'2%',  width:'120%',justifyContent: 'space-evenly' }}>
                        <TouchableOpacity onPress={()=> this.getOptionValue(CONST.DELIVERIES)} style={styles.buttonLeft}>
                            <Text style={styles.textButton}>Deliveries</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.getOptionValue(CONST.PENDING_REVIEWS)} style={styles.buttonCenter}>
                            <Text style={styles.textButton}>Pending Reviews</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.getOptionValue(CONST.REFUND_REQUESTS)} style={styles.buttonRight}>
                            <Text style={styles.textButton}>Refund Requests</Text>
                        </TouchableOpacity>

                    </View>
                    </ScrollView>
                    </View>  :null}
                    <FlatList style={[styles.flatList, {flex:0.75}]}
                        data={this.state.arrayList}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />

                  <IconAntDesign name="pluscircle" style={{fontSize:55, alignSelf:'flex-end', right:'2%', flex:0.15}} />

                </View>
            </SafeAreaView>

        )
    }
}