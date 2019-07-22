
import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../../stylesheet/newRequest.style'
import HeaderMenuAndBell from '../common/HeaderMenuAndBell';
import { SafeAreaView } from 'react-navigation';
import commonStyle from '../../stylesheet/common.style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';


export default class NewRequestSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowSummaryView: false,
        }
    }

    render() {
        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <View style={{ flex: 1 }}>
                    <HeaderMenuAndBell viewName={'New Request Summary'} isShowLeftButton={true} isShowRightButton={false} navigation={this.props.navigation} />

                    <View style={styles.mapSummary}>
                        <Image source={require('../../assets/Images/new_request_summary.png')} style={styles.mapImage} />
                    </View>

                   
                    {!this.state.isShowSummaryView ?
                       <View style={{ height: '35%' }}>
                       {/* <View style={styles.viewSingleLine} /> */}
                       <View style={{ flexDirection: 'row' }}>
                           <View style={{ flex: 0.2, justifyContent: 'center', marginLeft: '2%', marginTop: '2%' }}>
                               <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} style={{
                                   width: 70, height: 70, borderRadius: 35,
                               }} />

                           </View>

                           <View style={{ marginLeft: '5%', justifyContent: 'center', flex: 0.7 }}>
                               <View style={{ flexDirection: 'row' }}>
                                   <Text style={commonStyle.textTitleSubmitReview}>4 Empty Boxes 1244* 1200 </Text>
                               </View>

                               <View style={{ flexDirection: 'row' }}>
                                   <Text style={commonStyle.textTitleSubmitReview}>Estimated Quote: </Text>
                                   <Text style={commonStyle.textDescriptionDetail}> None</Text>
                               </View>

                               <View style={{ flexDirection: 'row' }}>
                                   <Text style={commonStyle.textTitleSubmitReview}>Delivery Speed</Text>
                                   <Text style={commonStyle.textDescriptionDetail}> Same day</Text>
                               </View>
                           </View>

                           <View style={[styles.viewBoxYellow, { flex: 0.1 }]} onPress={()=>this.setState({isShowSummaryView:true}) }>
                               <IconAntDesign name='plus' fontSize={16} />
                           </View>

                       </View>
                       <View style={styles.viewBottomButtons}>
                           <TouchableOpacity style={[styles.buttonNotSelected]}>
                               <Text style={commonStyle.textNotSelected}>Cancel</Text>
                           </TouchableOpacity>

                           <TouchableOpacity style={[styles.buttonSelected]} >
                               <Text style={commonStyle.textSelected}>Submit</Text>
                           </TouchableOpacity>
                       </View>
                   </View>
                        : <View>
                            { /* Pickup location */}
                            <View style={{
                                padding: 15,
                                backgroundColor: 'white',
                                borderBottomColor: 'lightgray',
                                borderWidth: 0.4,
                                shadowColor: 'lightGray',
                                shadowOpacity: 0.4,
                                shadowRadius: 1.5,
                                elevation: 3,
                                borderColor: 'rgba(0, 0,0, 0)'
                            }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#000000',
                                        fontSize: 14,
                                        flex: 8,
                                        fontWeight: "bold"
                                    }}>Pickup Location</Text>
                                    <Text>Edit</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>State:</Text>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}> Maiduguri - Central, Borno</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>Address:</Text>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}> Baby, Maiduguri, Nigeria</Text>
                                </View>
                            </View>


                            { /* Dropoff location */}
                            <View style={{
                                padding: 15,
                                backgroundColor: 'white',
                                borderBottomColor: 'lightgray',
                                borderWidth: 0.4,
                                shadowColor: 'lightGray',
                                shadowOpacity: 0.4,
                                shadowRadius: 1.5,
                                elevation: 3,
                                borderColor: 'rgba(0, 0,0, 0)'
                            }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#000000',
                                        fontSize: 14,
                                        flex: 8,
                                        fontWeight: "bold"
                                    }}>Dropoff Location</Text>
                                    <Text>Edit</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>State:</Text>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}> Mayo-Belwo, Adamawa</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>Address:</Text>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}> Nigerian Prison Service, Vela, Nigeria</Text>
                                </View>
                            </View>


                            { /* Recepient Details */}
                            <View style={{
                                padding: 15,
                                backgroundColor: 'white',
                                borderBottomColor: 'lightgray',
                                borderWidth: 0.4,
                                shadowColor: 'lightGray',
                                shadowOpacity: 0.4,
                                shadowRadius: 1.5,
                                elevation: 3,
                                borderColor: 'rgba(0, 0,0, 0)'
                            }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#000000',
                                        fontSize: 14,
                                        flex: 8,
                                        fontWeight: "bold"
                                    }}>Recepient Details</Text>
                                    <Text>Edit</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>Name:</Text>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}> Mr Ugochukwu Nwosu (Computer Science)</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>Email:</Text>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}> xyz@gmaikcom</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>Phone:</Text>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}> +91 987654321</Text>
                                </View>
                            </View>



                            { /* Package Details */}
                            <View style={{
                                padding: 15,
                                backgroundColor: 'white',
                                borderBottomColor: 'lightgray',
                                borderWidth: 0.4,
                                shadowColor: 'lightGray',
                                shadowOpacity: 0.4,
                                shadowRadius: 1.5,
                                elevation: 3,
                                borderColor: 'rgba(0, 0,0, 0)'
                            }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#000000',
                                        fontSize: 14,
                                        flex: 8,
                                        fontWeight: "bold"
                                    }}>Package Details</Text>
                                    <Text>Edit</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>Group:</Text>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}> Home, Office & Schools</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>Category:</Text>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}> Containers - Bags/Boxes</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>Package Name:</Text>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}> 4 Empty Boxes (460 x 460 x 410)</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>Speed:</Text>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}> Same Day Size: Medium</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>Pickup Period:</Text>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}> 08:00am - 06:00am</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>Item Value:</Text>

                                    <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'double', color: "black", fontSize: 13 }}> N</Text>
                                    <Text style={{
                                        color: '#000000',
                                        fontSize: 13,
                                        fontWeight: '700'
                                    }}> 0</Text>
                                </View>
                            </View>


                            { /* Additional Details */}
                            <View style={{
                                padding: 15,
                                backgroundColor: 'white',
                                borderBottomColor: 'lightgray',
                                borderWidth: 0.4,
                                shadowColor: 'lightGray',
                                shadowOpacity: 0.4,
                                shadowRadius: 1.5,
                                elevation: 3,
                                borderColor: 'rgba(0, 0,0, 0)'
                            }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#000000',
                                        fontSize: 14,
                                        flex: 8,
                                        fontWeight: "bold"
                                    }}>Recepient Details</Text>
                                    <Text>Edit</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>Enter Additional Information e.g. number, weight, or special pickup/delivery considerations</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>Estimated Quote:</Text>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}> None</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}>Speed:</Text>
                                    <Text style={{
                                        color: '#262626',
                                        fontSize: 13,
                                    }}> Same Day</Text>
                                </View>
                            </View>
                        </View>}
                </View>

            </SafeAreaView>

        )
    }
}

