import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../../stylesheet/myPackages.style'
import HeaderMenuAndBell from '../common/HeaderMenuAndBell';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import Input from '../common/Input';
import { SafeAreaView } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import * as CONST from '../../constants/Constant';
import MyPackageCell from './MyPackageCell';
import commonStyle from '../../stylesheet/common.style';
import StarRating from 'react-native-star-rating';

export default class MyPackageDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeliveryScheduled: false,
            isArrivedToVendor: true,
            isPaid: false,
            isDeliveryDetail: true,
            isCancelRequest: true,
            isDuplicateRequest: false,
            isRefundRequest: false,
        },
            this.arrayBidsInReview = [{ 'userPhoto': 'https://bootdey.com/img/Content/avatar/avatar6.png', 'name': 'vendor', 'ratingCount': 3, 'status': 'Awarded', 'bidAmount': '23.00', 'date': '23 July 2016' },

            { 'userPhoto': 'https://bootdey.com/img/Content/avatar/avatar6.png', 'name': 'vendor', 'ratingCount': 3, 'status': 'Awarded', 'bidAmount': '23.00', 'date': '23 July 2016' }];
    }
    getDeliveryDetail = () => {
        this.setState({ isDeliveryDetail: true });
    }
    getBidsInReview = () => {
        this.setState({ isDeliveryDetail: false });
    }

    renderItem = (item, index) => {
        console.log(" Item is =========", item.item);

        return (
            <View style={styles.viewOuter}>
                <View style={styles.viewInner}>
                    <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }}>

                        <View style={{ flexDirection: 'row', fontSize: 15 }}>
                            <Image source={{ uri: item.item.userPhoto }} style={{
                                width: 70, height: 70, borderRadius: 35
                            }} />
                            <View style={{ marginLeft: '5%', marginTop: '3%' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[commonStyle.textTitleDashboard, { flex: 0.5 }]}>
                                        {item.item.name}
                                    </Text>
                                    <Text style={[commonStyle.textDescriptionDashboard, { flex: 0.5 }]}>Click to view Details</Text>
                                </View>

                                <View styl={{ flexDirection: 'row' }}>
                                    <View style={{ width:20}}>
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
                                    <Text style={commonStyle.textDescriptionDashboard}>
                                        {item.item.ratingCount}
                                    </Text>
                                    <Text>{item.item.status}</Text>
                                </View>

                                <Text style={commonStyle.textPriceDashboard}>
                                    {item.item.bidAmount}
                                </Text>

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

                </View>
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <View style={styles.container}>
                    {this.state.isDeliveryScheduled ? <View style={[styles.deliveryView, { backgroundColor: 'rgb(0,0,0)', marginTop: '5%' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', flex: 0.8 }}>
                                <Text style={commonStyle.locationName}> Package Name: </Text>
                                <Text style={commonStyle.locationName}>Package 1</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 0.3 }}>
                                <IconFeather name='clock' style={{ fontSize: 12, color: 'white' }} />
                                <Text style={commonStyle.locationName}> 3d 2h 32 min</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={commonStyle.locationName}> From: </Text>
                            <Text style={commonStyle.locationName}>Location 1</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={commonStyle.locationName}> To: </Text>
                            <Text style={commonStyle.locationName}>Location 2</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={commonStyle.locationName}> Status: </Text>
                            <Text style={commonStyle.locationName}> Open for Bidding</Text>
                        </View>

                    </View> : <View />}

                    {this.state.isArrivedToVendor ?
                        <View style={[styles.deliveryView, { backgroundColor: 'rgb(0,0,0)', marginTop: '5%' }]}>
                            <View style={[styles.viewRow, , { marginTop: '2%' }]}>
                                <View style={{ flexDirection: 'row', flex: 0.7 }}>
                                    <Text style={commonStyle.locationName}>Package Name: </Text>
                                    <Text style={commonStyle.locationName}>Package 1</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 0.3, }}>
                                    <Text style={commonStyle.locationName}>Awared To:</Text>
                                    <Text style={commonStyle.locationName}>Vendor1</Text>
                                </View>
                            </View>

                            <View style={styles.viewRow}>
                                <View style={{ flexDirection: 'row', flex: 0.83 }}>
                                    <Text style={commonStyle.locationName}>From: </Text>
                                    <Text style={commonStyle.locationName}>Location 1</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 0.14 }}>
                                    <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: "white", fontSize: 13 }}>N</Text>
                                    <Text style={commonStyle.textPriceDashboard}>600.00</Text>
                                </View>
                            </View>

                            <View style={styles.viewRow}>
                                <View style={{ flexDirection: 'row', flex: 0.75 }}>
                                    <Text style={commonStyle.locationName}>To: </Text>
                                    <Text style={commonStyle.locationName}>Location 2</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 0.25 }}>
                                    <IconFeather name='clock' style={{ fontSize: 12, color: 'white' }} />
                                    <Text style={commonStyle.locationName}>3d 2h 32m</Text>
                                </View>
                            </View>

                            <View style={[styles.viewRow, { marginBottom: '2%' }]}>
                                <View style={{ flexDirection: 'row', flex: 0.43 }}>
                                    <Text style={commonStyle.locationName}>Status: </Text>
                                    <Text style={commonStyle.locationName}>Color Selected</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 0.65, marginRight: '2%' }}>
                                    <TouchableOpacity style={styles.buttonMakePayment}>
                                        <Text style={commonStyle.locationName}> Make Payment </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonRequestPickup}>
                                        <Text style={commonStyle.textRequestPickup}> Request Pickup </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View> : <View />}

                    {this.state.isPaid ?
                        <View style={[styles.deliveryView, { backgroundColor: 'rgb(0,0,0)', marginTop: '5%' }]}>
                            <View style={[styles.viewRow, , { marginTop: '2%' }]}>
                                <View style={{ flexDirection: 'row', flex: 0.7 }}>
                                    <Text style={commonStyle.locationName}>Package Name: </Text>
                                    <Text style={commonStyle.locationName}>Package 1</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 0.3, }}>
                                    <Text style={commonStyle.locationName}>Awared To:</Text>
                                    <Text style={commonStyle.locationName}>Vendor1</Text>
                                </View>
                            </View>

                            <View style={styles.viewRow}>
                                <View style={{ flexDirection: 'row', flex: 0.83 }}>
                                    <Text style={commonStyle.locationName}>From: </Text>
                                    <Text style={commonStyle.locationName}>Location 1</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 0.14 }}>
                                    <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: "white", fontSize: 13 }}>N</Text>
                                    <Text style={commonStyle.textPriceDashboard}>600.00</Text>
                                </View>
                            </View>

                            <View style={styles.viewRow}>
                                <View style={{ flexDirection: 'row', flex: 0.75 }}>
                                    <Text style={commonStyle.locationName}>To: </Text>
                                    <Text style={commonStyle.locationName}>Location 2</Text>
                                </View>

                            </View>

                            <View style={[styles.viewRow, { marginBottom: '2%' }]}>
                                <View style={{ flexDirection: 'row', flex: 0.6 }}>
                                    <Text style={commonStyle.locationName}>Status: </Text>
                                    <Text style={commonStyle.locationName}>Color Selected</Text>
                                </View>
                                <View style={styles.viewPaidButton}>
                                    <TouchableOpacity style={styles.buttonPaid}>
                                        <Text style={commonStyle.locationName}> Paid </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonRequestPickup}>
                                        <Text style={commonStyle.textRequestPickup}> Track Package </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View> : <View />}

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 44 }}>
                        <TouchableOpacity onPress={() => this.getDeliveryDetail()} style={styles.buttonSegment}>
                            <Text style={styles.textTopBtn}>Delivery Details</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.getBidsInReview()} style={styles.buttonSegment}>
                            <Text styles={styles.textTopBtn}>Bids In Review</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', height: '0.5%', flex: 0.009 }}>
                        {this.state.isDeliveryDetail ? <Animatable.View style={styles.viewSingleLineLeft} /> : <View style={styles.viewSingleLineEmpty} />}
                        {!this.state.isDeliveryDetail ? <Animatable.View style={styles.viewSingleLineRight} /> : null}
                        {/* {this.state.isDeliveryDetail ? <Animatable.View style={styles.viewSingleLineLeft} />
                            : <Animatable.View style={styles.viewSingleLineRight} />} */}
                    </View>
                    <View style={[styles.viewSingleLine, { flex: 0.003 }]} />

                    {/* Recepient Detail */}
                    {this.state.isDeliveryDetail ?
                        <View>
                            <View style={{ marginLeft: '2%', marginBottom: '2%', marginTop: '1%' }}>
                                <Text>Recepient Details</Text>
                                <View style={styles.viewPackageDetail}>
                                    <Text style={commonStyle.textRecepientDetail}>Recepient Name:</Text>
                                    <Text style={commonStyle.textRecepientDetail}>User1 </Text>
                                </View>
                                <View style={styles.viewPackageDetail}>
                                    <Text style={commonStyle.textRecepientDetail}>Phone:</Text>
                                    <Text style={commonStyle.textRecepientDetail}>+9191987654321 </Text>
                                </View>
                                <View style={styles.viewPackageDetail}>
                                    <Text style={styles.textRecepientDetail}>Email:</Text>
                                    <Text style={styles.textRecepientDetail}>xyz@gmaikcom</Text>
                                </View>
                            </View>
                            <View style={[styles.viewSingleLine, { flex: 0.003 }]} />


                            <View style={{ marginLeft: '2%', marginBottom: '2%' }}>
                                <Text>Package Details</Text>
                                <View style={styles.viewPackageDetail}>
                                    <Text style={commonStyle.textRecepientDetail}>Package Group:</Text>
                                    <Text style={commonStyle.textRecepientDetail}>Package 1</Text>
                                </View>
                                <View style={styles.viewPackageDetail}>
                                    <Text style={commonStyle.textRecepientDetail}>Category:</Text>
                                    <Text style={commonStyle.textRecepientDetail}>Category1</Text>
                                </View>
                                <View style={styles.viewPackageDetail}>
                                    <Text style={styles.textRecepientDetail}>Package Name:</Text>
                                    <Text style={styles.textRecepientDetail}>Package1</Text>
                                </View>
                                <View style={styles.viewPackageDetail}>
                                    <Text style={styles.textRecepientDetail}>Package Size:</Text>
                                    <Text style={styles.textRecepientDetail}>400</Text>
                                </View>
                                <View style={styles.viewPackageDetail}>
                                    <Text style={styles.textRecepientDetail}>Delivery Duration:</Text>
                                    <Text style={styles.textRecepientDetail}>30 Min</Text>
                                </View>
                                <View style={styles.viewPackageDetail}>
                                    <Text style={styles.textRecepientDetail}>Pickup Time:</Text>
                                    <Text style={styles.textRecepientDetail}>1:30</Text>
                                </View>
                                <View style={styles.viewPackageDetail}>
                                    <Text style={styles.textRecepientDetail}>Item Value:</Text>
                                    <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: "black", fontSize: 13 }}> N</Text>

                                    <Text style={styles.textRecepientDetail}>560</Text>
                                </View>

                                {/* View boxes  */}
                                <View style={styles.viewPackageDetail}>
                                    <View style={styles.viewBox} />
                                    <View style={styles.viewBox} />
                                    <View style={styles.viewBox} />
                                    <View style={styles.viewBox} />
                                    <View style={styles.viewBox} />
                                </View>
                            </View>
                            <View style={[styles.viewSingleLine, { flex: 0.003 }]} />

                            <View style={{ marginLeft: '2%', marginBottom: '2%' }}>
                                <Text>Additional Details:</Text>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </Text>
                            </View>
                            <View style={[styles.viewSingleLine, { flex: 0.003 }]} />

                            <View style={[styles.viewPackageDetail, { alignSelf: 'center' }]}>
                                <View style={this.state.isCancelRequest ? styles.buttonSelected : styles.buttonNotSelected}>
                                    <TouchableOpacity >
                                        <View style={{ flexDirection: 'row' }}>
                                            <IconAntDesign name='close' color={this.state.isCancelRequest ? 'white' : 'black'} style={{ fontSize: 14 }} />
                                            <Text numberOfLines={2} style={this.state.isCancelRequest ? styles.textSelected : styles.textNotSelected}>Cancel{'\n'}Request</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={this.state.isDuplicateRequest ? styles.buttonSelected : styles.buttonNotSelected}>
                                    <TouchableOpacity>
                                        <View style={{ flexDirection: 'row' }}>
                                            <IconAntDesign name='copy1' style={{ fontSize: 14 }} />
                                            <Text numberOfLines={2} color={this.state.isDuplicateRequest ? 'white' : 'black'} style={this.state.isDuplicateRequest ? styles.textSelected : styles.textNotSelected}>Duplicate{'\n'}Request</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={this.state.isRefundRequest ? styles.buttonSelected : styles.buttonNotSelected}>
                                    <TouchableOpacity>
                                        <View style={{ flexDirection: 'row' }}>
                                            <IconFontAwesome name='money' style={{ fontSize: 14 }} />
                                            <Text numberOfLines={2} color={this.state.isRefundRequest ? 'white' : 'black'} style={this.state.isRefundRequest ? styles.textSelected : styles.textNotSelected}> Request{'\n'}Refund</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View> :
                        <View style={{ backgroundColor: 'red', flex: 1 }}>
                            <FlatList
                                data={this.arrayBidsInReview}
                                renderItem={this.renderItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>}
                </View>
            </SafeAreaView>
        )
    }
}