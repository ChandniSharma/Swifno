// Re-use in 17, 18, 19, 20
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class PackageDetail extends Component {
  render() {
    return (
    <View>
     <View>
        <View>
             <Text>Recepient Details</Text>
             <Text>Recipient's Name:</Text> 
             <Text>User 1</Text>
             <Text>Phone:</Text>
             <Text>+91 987654321</Text>
             <Text>Email:</Text> 
             <Text>support@user.com</Text>
        </View>
        
         <View>
             <Text>Package Details</Text>
             <Text>Package Group:</Text> 
             <Text>Package 1</Text>
             <Text>Category:</Text>
             <Text>Category1</Text>
             <Text>Package Name:</Text> 
             <Text>Package1</Text>
             <Text>Package Size:</Text> 
             <Text>400</Text>
             <Text>Delivery Duration:</Text>
             <Text>30 Min</Text>
             <Text>Pickup Time:</Text> 
             <Text>1:30</Text>
             <Text>Item Value:</Text> 
             <Text>44460</Text>
        </View>
       
        <View>
             <Text>Additional Details:</Text>
             <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </Text> 
        </View>
             
      </View>
    </View>  
    );
  }
}

