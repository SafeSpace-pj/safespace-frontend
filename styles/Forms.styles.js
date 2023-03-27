import { StyleSheet } from "react-native"

export default StyleSheet.create({
    upper:{
        height:'40%',borderBottomRightRadius:20,borderBottomLeftRadius:20, width:'100%',backgroundColor: 'red',overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
      },
      upperTitle:{
        color:'white',
        fontFamily:'Poppins_700Bold',
        fontSize:24
      },
      body:{
        paddingHorizontal:'8%',
        position:'absolute',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
      },
      uppertexts:{
        alignItems:'center',
        marginBottom:54

      },
      subtitle:{
        fontSize:12,
        fontFamily:'Poppins_400Regular', 
        color:'white'
      },

    //   forms
      formView:{
        width:'100%',backgroundColor:'white',shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:3,
        paddingVertical:28,
        paddingHorizontal:30,
        borderRadius:8,
        alignItems:'center',
        width:'100%'
      },
      formText:{
        alignItems:'center'
      },
      formTitle:{
        fontFamily:'Poppins_700Bold',
        fontSize:16,
        color:'#616161'
      },
      formsubtext:{
        fontFamily:'Poppins_400Regular',
        fontSize:11,
        color:'#616161'
      },
      input:{
        // backgroundColor:'white',
        color:'#616161',
        fontFamily:'Poppins_400Regular',
        
      },
      radioMView:{
        flexDirection:'row',
        justifyContent:'space-evenly',marginBottom:10
      },
      radioitem:{
        flexDirection:'row',alignItems:'center'
      },
      radioLabel:{
        fontFamily:'Poppins_400Regular',
        fontSize:11
      },
      submitBtn:{
        height:40,
        borderRadius:4,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center'
      },
      submitBtntxt:{
        fontFamily:'Poppins_500Medium',
        fontSize:12,
        color:'white'
      },
      ResetView:{
        width:'100%',
        alignItems:'flex-end', marginTop:8
      },
      ResetText:{
        fontFamily:'Poppins_400Regular',
        fontSize:12,
      },
      

      //auth View
      AuthView:{
        width:'100%',
      },
      AuthBtn:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#21d1ff',
        flexDirection:'row',
        height:40,
        borderRadius:4,
        marginBottom:20,
        overflow:'hidden'
      }

})