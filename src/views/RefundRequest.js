import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from '../stylesheet/myPackages.style'
import IconFeather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-navigation';
import commonStyle from '../stylesheet/common.style';
import HeaderLoginModule from './common/HeaderLoginModule'

export default class TrackPackage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <HeaderLoginModule viewName={'Track Package'} navigation={this.props.navigation} />

                <View style={styles.container}>
                    <View style={styles.topBlackView}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={commonStyle.locationName}> 2 Event Booklets </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={commonStyle.locationName}> Delivery Id: </Text>
                            <Text style={commonStyle.locationName}>req439</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={commonStyle.locationName}> Paid Amount: </Text>
                            <Text style={commonStyle.locationName}>1012.00</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={commonStyle.locationName}> From: </Text>
                            <Text style={commonStyle.locationName}>46 Ago Palace Way Lagos, Nigeria</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={commonStyle.locationName}> To: </Text>
                            <Text style={commonStyle.locationName}>Bishop Howells Memorial Grammar School Bariga, Beside CMS Grammar School Bariga</Text>
                        </View>

                    </View>



                </View>
            </SafeAreaView>
        )
    }
}