import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../stylesheet/courierDetail.style'

import commonStyle from '../stylesheet/common.style';
import StarRating from 'react-native-star-rating';

export default class CourierDetail extends Component {
    constructor(props) {
        super(props);

        this.arrayBidsInReview = [{ 'userPhoto': 'https://bootdey.com/img/Content/avatar/avatar6.png', 'name': 'Danny Odita', 'ratingCount': 3, 'status': 'On Time', 'date': '23-06-2017' },

        { 'userPhoto': 'https://bootdey.com/img/Content/avatar/avatar6.png', 'name': 'Ram', 'ratingCount': 3, 'status': 'On Time', 'date': '12-09-2017' },

        { 'userPhoto': 'https://bootdey.com/img/Content/avatar/avatar6.png', 'name': 'Ram', 'ratingCount': 3, 'status': 'On Time', 'date': '15-09-2017' }
    ];
    }
    renderItem = (item, index) => {
        console.log(" Item is =========", item.item);

        return (
            <View style={{ marginLeft: '2%', marginRight: '2%' }}>
                <TouchableOpacity style={{ flexDirection: 'row' }}>

                    <View style={{ flexDirection: 'row', fontSize: 15, justifyContent: 'space-evenly', flex: 1 }}>
                        <View style={{ flex: 0.2 }}>
                            <Image source={{ uri: item.item.userPhoto }} style={{
                                width: 70, height: 70, borderRadius: 35
                            }} />
                        </View>

                        <View style={{ flex: 0.8 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Text style={[commonStyle.textDescriptionDetail, { flex: 0.2, alignSelf: 'flex-start' }]}>
                                    {item.item.name}
                                </Text>
                                <Text style={[commonStyle.textDescriptionDetail, { flex: 0.8, alignSelf: 'flex-end', right: '2%' }]}>Click to view Details</Text>
                            </View>

                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <View style={{ width: 20, width: '30%' }}>
                                    <StarRating
                                        // style={{width:30, height:20}}
                                        disabled={false}
                                        maxStars={5}
                                        rating={3}
                                        starSize={20}
                                        fullStarColor={'rgb(247, 205,74)'}
                                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    />
                                </View>

                                <Text style={commonStyle.statusTextInDetail}>{item.item.status}</Text>

                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={commonStyle.textDescriptionDetail}>Bid Amount: </Text>
                                <Text style={commonStyle.textDecorationDetail}>N</Text>
                                <Text style={commonStyle.textBoldDetail}> {item.item.bidAmount}</Text>
                            </View>


                            <View style={{ flexDirection: 'row' }}>

                                <Text style={commonStyle.textDescriptionDashboard}>
                                    {item.item.date}
                                </Text>
                                <TouchableOpacity style={styles.buttonNotSelected}>
                                    <Text>Change</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                </TouchableOpacity>
                <View style={styles.viewSingleLineCell} />

            </View>
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.arrayBidsInReview}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}