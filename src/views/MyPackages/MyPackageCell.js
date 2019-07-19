import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../../stylesheet/myPackages.style'
import commonStyles from '../../stylesheet/common.style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
                    <View>
                        <View>
                            <Text style={commonStyles.textDescriptionDashboard}>My Package</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={commonStyles.textDescriptionDashboard}>From:</Text>
                                    <Text style={commonStyles.textDescriptionDashboard}>Location1</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={commonStyles.textDescriptionDashboard}>To</Text>
                                    <Text style={commonStyles.textDescriptionDashboard}>Location2</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={commonStyles.textDescriptionDashboard}>Schdeuled Date:</Text>
                                <Text style={commonStyles.textDescriptionDashboard}>23 Nov 2006</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={commonStyles.textDescriptionDashboard}>Status:</Text>
                                <Text style={commonStyles.textDescriptionDashboard}>Awarded</Text>
                                <Text style={commonStyles.textBold}>(</Text>
                                    <Text style={commonStyles.textDecoration}>N</Text>
                                    <Text style={commonStyles.textBold}>34.00)</Text>

                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={commonStyles.textDescriptionDashboard}>Operator:</Text>
                                <Text style={commonStyles.textDescriptionDashboard}>Operator 1</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewSingleLineCell}/>
                    <View style={{ flexDirection: 'row'}}>

                        {/* icon and button  */}
                        <View >
                            <TouchableOpacity>
                                <View style={styles.viewIconAndText}>
                                    <IconAntDesign name="eye" style={styles.iconStyle} />
                                    <Text>View Details </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <View style={styles.viewIconAndText}>
                                    <IconEntypo name="location-pin" style={styles.iconStyle} />
                                    <Text>Track Package </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <View style={styles.viewIconAndText}>
                                    <IconMaterialIcons name="message" style={styles.iconStyle} />
                                    <Text>Give Feedback</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        )
    }

}