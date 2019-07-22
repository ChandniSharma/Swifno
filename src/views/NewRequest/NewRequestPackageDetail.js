import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import styles from '../../stylesheet/newRequest.style'
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-navigation';
import commonStyle from '../../stylesheet/common.style';
import HeaderLoginModule from '../common/HeaderLoginModule'
import { Picker } from 'react-native-picker-dropdown'
import DateTimePicker from "react-native-modal-datetime-picker";
import HeaderMenuAndBell from '../common/HeaderMenuAndBell';
import Input from '../common/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class NewRequestPackageDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: 'india',
            isDateTimePickerVisible: false,

        }
        this.onValueChange = this.handleValueChange.bind(this)

    }

    handleValueChange(state) {
        this.setState({ state })
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
    };

    // mode = 'date'  (by default)
    // Datepicker? 'date' Timepicker? 'time' Both? 'datetime'

    render() {
        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <KeyboardAwareScrollView style={styles.container}>

                    <View style={{ flex: 1 }}>

                        <HeaderMenuAndBell viewName={'New Request'} isShowLeftButton={true} isShowRightButton={false} navigation={this.props.navigation} />

                        {/* dot view */}
                        <View style={styles.viewDots} />
                        <View style={styles.topHeadingView}>
                            <Text style={styles.textHeading}>Enter Package Details</Text>
                        </View>

                        <View style={styles.pickerViewBottomRow}>
                            <Picker
                                selectedValue={this.state.state}
                                onValueChange={this.onValueChange}
                                mode="dialog"

                            >
                                <Picker.Item label="Madhya Pradesh" value="MP" />
                                <Picker.Item label="Rajasthan" value="RJ" />
                                <Picker.Item label="Gujrat" value="GJ" />
                                <Picker.Item label="Chhatisgarh" value="CH" />
                            </Picker>
                        </View>

                        <View style={styles.pickerViewBottomRow}>
                            <Picker
                                selectedValue={this.state.state}
                                onValueChange={this.onValueChange}
                                mode="dialog"
                            >
                                <Picker.Item label="Madhya Pradesh" value="MP" />
                                <Picker.Item label="Rajasthan" value="RJ" />
                                <Picker.Item label="Gujrat" value="GJ" />
                                <Picker.Item label="Chhatisgarh" value="CH" />
                            </Picker>
                        </View>

                        <View style={styles.pickerViewBottomRow}>
                            <TextInput
                                placeholder='Package Name/Description'
                            />
                        </View>

                        <View style={styles.pickerViewBottomRow}>
                            <Picker
                                selectedValue={this.state.state}
                                onValueChange={this.onValueChange}
                                mode="dialog"

                            >
                                <Picker.Item label="Madhya Pradesh" value="MP" />
                                <Picker.Item label="Rajasthan" value="RJ" />
                                <Picker.Item label="Gujrat" value="GJ" />
                                <Picker.Item label="Chhatisgarh" value="CH" />
                            </Picker>
                        </View>
                        <Text style={styles.textRecipient}>Pickup Time Period</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity onPress={this.showDateTimePicker}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text >Start Time</Text>
                                    <IconAntDesign name='clockcircleo' style={{ fontSize: 14 }} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.showDateTimePicker}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>End Time</Text>
                                    <IconAntDesign name='clockcircleo' style={{ fontSize: 14 }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <DateTimePicker
                            mode="time"
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={this.hideDateTimePicker}
                        />

                        <View style={styles.rememberView}>

                            <TouchableOpacity style={styles.tickMarkView} >
                                {this.state.isRemember ? <IconMaterialIcons name="check-box" color="gray" style={styles.iconCheckBox} /> : <IconMaterialIcons name="check-box-outline-blank" color="gray" style={styles.iconCheckBox} />}
                            </TouchableOpacity>

                            <View style={{ flex: 0.8, marginTop: '1.5%' }}>
                                <TouchableOpacity style={styles.rememberBtn} >
                                    <Text style={styles.rememberText}> Insurance Required</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.pickerViewBottomRow}>
                            <TextInput
                                placeholder='Item Value'
                            />
                        </View>

                         {/* View boxes  */}
                         <View style={styles.viewPackageDetail}>
                                    <View style={styles.viewBox} />
                                    <View style={styles.viewBox} />
                                    <View style={styles.viewBox} />
                                    <View style={styles.viewBox} />
                                    <View style={styles.viewBox} />
                                </View>

                        <View style={styles.viewBottomButtons}>
                            <TouchableOpacity style={[styles.buttonNotSelected]}  onPress={() => this.props.navigation.navigate('NewRequestDropoffLocation')}>
                                <Text style={commonStyle.textNotSelected}>Back</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.buttonSelected]}  onPress={() => this.props.navigation.navigate('NewRequestSummary')}>
                                <Text style={commonStyle.textSelected}>Next</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>)
    }
    render1() {
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <View>
                    <Text>State</Text>
                    <Picker
                        selectedValue={this.state.state}
                        onValueChange={this.onValueChange}
                        mode="dialog"
                    >
                        <Picker.Item label="India" value="india" />
                        <Picker.Item label="UK" value="uk" />
                        <Picker.Item label="USA" value="usa" />
                        <Picker.Item label="Australia" value="australia" />
                    </Picker>
                </View>

                <>
                    <Button title="Time Picker" onPress={this.showDateTimePicker} />
                    <DateTimePicker
                        mode="time"
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                    />
                </>
            </SafeAreaView>
        )
    }
}