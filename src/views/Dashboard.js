import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import styles from '../stylesheet/dashboard.style'
import HeaderLoginModule from './common/HeaderLoginModule';
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

            { "TokenID": "#127656", "Date": "12th September 2018", "PersonCount": "5 Persons", "address": "45/1, Baikunth Nagar", "City": "Bhopal", "time": "4:00pm-5:00pm" },

            { "TokenID": "#123456", "Date": "12th September 2018", "PersonCount": "2 Persons", "address": "45/1, Baikunth Nagar", "City": "Bhopal", "time": "6:00pm-7:00pm" }

            ],

            isCurrentActivitySelected: true,
            isDeliveries: false,
            isPendingRequests: false,
            isRefundRequests: false,
        }
    }
    getCurrentActivity() {
        this.setState({ isCurrentActivitySelected: true });
    }
    getNotification() {
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
                        <Text>
                            {item.item.PersonCount}
                        </Text>
                    </View>
                </View>
            </View>);


    }
    render() {
        return (

            <SafeAreaView>

                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.getCurrentActivity()} style={styles.buttonSegment}>
                            <Text>Current Activity</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.getNotification()} style={styles.buttonSegment}>
                            <Text>Notifications</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        {this.state.isCurrentActivitySelected ? <Animatable.View style={styles.viewSingleLineLeft} />
                            : <Animatable.View style={styles.viewSingleLineRight} />}
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.getOptionValue(CONST.DELIVERIES)} style={styles.buttonLeft}>
                            <Text>Deliveries</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.getOptionValue(CONST.PENDING_REVIEWS)} style={styles.buttonCenter}>
                            <Text>Pending Reviews</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.getOptionValue(CONST.REFUND_REQUESTS)} style={styles.buttonRight}>
                            <Text>Refund Requests</Text>
                        </TouchableOpacity>

                    </View>
                    <FlatList style={styles.flatList}
                        data={this.state.arrayList}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />

                  <IconAntDesign name="pluscircle" style={{fontSize:25}} />

                </View>
            </SafeAreaView>

        )
    }
}