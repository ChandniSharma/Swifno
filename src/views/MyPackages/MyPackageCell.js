import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../../stylesheet/dashboard.style'
import commonStyles from '../../stylesheet/common.style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import * as Animatable from 'react-native-animatable';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class MyPackageCell extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { item, index } = this.props
console.log(" Props is ==== ", this.props);
        
        return (
            <View style={styles.viewOuter}>
                <View style={styles.viewInner}>
                    <View >
                    {item.map((value, index) => (
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Text style={[commonStyles.textTitleDashboard, { flex: 0.8 }]}>
                                {item.key}
                            </Text>
                             <Text style={[commonStyles.textTimeDashboard, { flex: 0.2 }]}>
                                {item.value}
                            </Text> 
                        </View>

                    ))}
                      

                      
                       

                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'pink' }}>
                       
                        {/* icon and button  */}
                        <View>
                        <TouchableOpacity>
                            <View style={styles.viewIconAndButton}>
                                <IconAntDesign name="eye" style={styles.iconStyle} />
                                <Text>see </Text>
                            </View>
                        </TouchableOpacity>
                        </View>

                        <View>
                        <TouchableOpacity>
                            <View style={styles.viewIconAndButton}>
                                <IconAntDesign name="eye" style={styles.iconStyle} />
                                <Text>see </Text>
                            </View>
                        </TouchableOpacity>
                        </View>

                        <View>
                        <TouchableOpacity>
                            <View style={styles.viewIconAndButton}>
                                <IconAntDesign name="eye" style={styles.iconStyle} />
                                <Text>Track packages </Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                       
                    </View>
                </View>
            </View>
        )
    }

}