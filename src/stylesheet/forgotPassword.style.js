import { Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;
let top;
const statusBarHeight = Platform.OS === 'ios' ? 0 : 0;

export default {

    container: {
        flex: 1,
    },
    viewMain:{
        flex:1
    },
    image: {
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom:'5%'
    },
   
    buttonSelected: {
        borderRadius: 10,
        height: 55,
         flex:0.4,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'black',
       
       
    },
    buttonNotSelected:{
        borderRadius: 10,
        height: 55,
         flex:0.4,
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
       
        borderColor: 'black',
        borderWidth: 1,
    },
    textSelected:{
      color:'white',
      fontSize: 18,
    },
    icon:{
        fontSize:22, marginLeft:'5%', marginTop:'5%'
     },
    textNotSelected:{
      color:'black',
      fontSize: 18,
    },
    inputStyle: {
        marginLeft: '5%',
        marginRight: '5%',
        height: 55,
        backgroundColor: 'white',
        marginTop: '5%',
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: 8,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
        fontSize: 18,
        color: '#262626',
        paddingTop: 21,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    textDescription:{
        color:'black',
        fontSize: 18,
         margin:'5%',
        textAlign:'center',
                lineHeight: 20,
        
    }, 
    errorText: {
        margin: '2%',
        color: 'red',
        alignSelf: 'center',
    },

   
}