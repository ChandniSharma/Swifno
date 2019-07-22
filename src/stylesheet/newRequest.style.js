
export default {
    container: {
        flex: 1,
    },
    topHeadingView: {
        backgroundColor: 'rgb(246, 205, 74)',
        height: 50,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center'
        // marginTop: '10%',

    },
    textHeading: {
        marginLeft: '2%',

    },
    picker: {
        borderColor: 'rgb(246, 205, 74)',
        borderWidth: 1,
        width: '90%',
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    pickerViewBottomRow: {
        borderBottomColor: 'lightgray',
        borderWidth: 1,
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderTopColor: 'white',
        width: '90%',
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '5%'
    },

    textInputNotSelected: {
        borderColor: 'lightgray',
        borderWidth: 1,
        width: '90%',
        height: 40,
        alignSelf: 'center',
        marginTop: '2%',
        paddingLeft: 5,
    },
    textInputSelected: {
        borderColor: 'rgb(246, 205, 74)',
        borderWidth: 1,
        width: '90%',
        height: 40,
        alignSelf: 'center',
        marginTop: '2%'
    },

    buttonNotSelected: {
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 1,
        flex: 0.45
    },
    buttonSelected: {
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderColor: 'black',
        borderWidth: 1,
        flex: 0.45,
        backgroundColor: 'black',
    },
    viewBottomButtons: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: '5%'
    },
    mapImage: {
        width: '100%',
        height: '100%',
    },
    mapView: {
        width: '90%',
        height: 200,
        marginTop: '5%',
        alignSelf: 'center'
    },
    mapSummary: {
        width: '100%',
        height: '65%',

    },

    viewDots: {
        marginTop: '5%',
        marginBottom: '5%',
    },
    textRecipient: {
        marginLeft: '5%',
        marginTop: '5%',
        color: '#262626',
    },
    inputTextAreaStyle: {
        marginLeft: '5%',
        marginRight: '5%',
        height: 60,
        borderColor: 'lightgray',
        borderWidth: 1,
        marginTop: '5%',
        color: '#262626',
        paddingTop: 5,
        paddingLeft: 5,

    },
    viewSingleLine: {
        //marginTop:'1%',
        width: '100%',
        height: '1%',
        backgroundColor: 'lightgray',
        marginTop: '1%'

    },
    rememberView: {
        flexDirection: 'row',
        flex: 1,
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        height: 30,
        //  backgroundColor:'pink',
    },
    rememberView: {
        flexDirection: 'row',
        flex: 1,
        marginTop: '5%',

        marginLeft: '5%',
        marginRight: '5%',
        height: 30,
        //  backgroundColor:'pink',

    },
    ViewTickmark: {
        // marginRight: '-3%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: '100%',
        marginTop: '5%'
    },
    viewRememberText: {
        marginTop: '1%',
        marginLeft: '5%'
    },
    tickMarkView: {
        // backgroundColor:'blue',
        height: 40,
        flex: 0.1,
        // borderColor: 'gray',
        // borderWidth: .2,
        // shadowColor: 'rgba(0,0,0,0.5)',
        // shadowOffset: {
        //     width: .5,
        //     height: .5
        // },
        // shadowOpacity: 0.5,
        // shadowRadius: 1,
        //borderRadius: .2,
    },
    rememberBtn: {
        // flex: 0.8,
        // height: 20,
        justifyContent: 'center',
        // backgroundColor:'green',
    },
    rememberText: {
        // marginLeft:'2%',
        fontSize: 16,
        //  marginTop:'2%'
    },
    viewPackageDetail: {
        flexDirection: 'row',
        marginTop: '5%',
        marginLeft: '5%'
    },
    viewBox: {
        backgroundColor: 'rgb(233, 232, 229)',
        width: 30,
        height: 30,
        margin: '1%'
    },
    viewBoxYellow: {
        backgroundColor: 'rgb(246, 205, 74)',
        width: 30,
        height: 30,
        marginRight: '2%',
        marginTop: '2%',
        justifyContent: 'center',
        alignItems: 'center',
    },
}