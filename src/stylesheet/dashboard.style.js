export default {
container:{
    flex: 1,
  },
buttonSegment:{
flex:0.5
} ,
viewSingleLineLeft:{
    backgroundColor:'yellow',
    flex:0.5,
    alignSelf: 'flex-start',
},
viewSingleLineRight:{
    backgroundColor:'yellow',
    flex:0.5,
    alignSelf: 'flex-end',
},

optionButton:{
  
},
    flatList:{
      flex: 1,
       marginTop: '2%',
      // backgroundColor: '#ffffff',
    },
    viewInner:{
        padding: 15,
        backgroundColor: 'white',
        borderBottomColor : 'gray',
        borderWidth: 0.8,
        // borderLeftWidth: 0.5,
        shadowColor: 'black',
        shadowOffset: {width:1.0,height:2},
        shadowOpacity: 0.5,
        shadowRadius: 1.5,
        elevation: 3,
       
    },
    viewOuter:{
      
       padding: 10,
    },
    viewContainNumber: {
      right: 20,
      top:20,
      position:'absolute',
    },
    

    titleBookConfirmation:{
        color: 'black',
         alignItems: 'center',
         justifyContent: 'center',
         fontSize: 18,
         fontWeight: 'bold',
         marginTop: 30
       },
       textTitle:{
        color: '#000000',
        fontSize: 16,
       },
       textTimeAndDate:{
        color: '#656565',
        fontSize: 13,
       },
       textDetail:{
        paddingTop:2,   
        color: '#656565',
        fontSize: 13,
       },

       buttonLeft: {
        borderRadius: 22,
        height: 55,
       // flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        marginRight:'2%'
    },
     buttonCenter: {
        borderRadius: 22,
        height: 55,
        width:200,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        alignSelf:'center',
       
    },
    buttonRight: {
        borderRadius: 22,
        height: 55,
       // flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        marginLeft:'2%'
    },
}