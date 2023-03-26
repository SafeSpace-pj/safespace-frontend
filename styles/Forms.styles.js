import { StyleSheet } from "react-native"

export default StyleSheet.create({
    upper:{
        height:'40%',borderBottomRightRadius:20,borderBottomLeftRadius:20, width:'100%',backgroundColor: 'red',overflow:'hidden',
        alignItems:'center',
        justifyContent:'center'
      },
      upperTitle:{
        color:'white',
        fontFamily:'Poppins_700Bold',
        fontSize:24
      },
      body:{
        paddingHorizontal:'10%',
        position:'absolute',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
      },
      uppertexts:{
        alignItems:'center'
      },
      subtitle:{
        fontSize:12,
        fontFamily:'Poppins_400Regular', 
        color:'white'
      },
      formView:{
        width:'100%',backgroundColor:'white',shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }
})