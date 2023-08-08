import React, {useEffect,useState} from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const InvestorHome = ({route,navigation})=>{

  const [myUserData,setmyUserData] = useState();
  const [myusername,setmyusername] = useState();
  const [myuseremail,setmyuseremail] = useState();
  const [myshopname,setmyshopname] = useState();  
  const myEmail=route.params.myEmail; 
 const getUserDate = async () =>{

    try {
        const response = await fetch("https://arzachel.org/business_grow/investor/getinvestordetail.php?uemail="+myEmail);
        const MyData=await response.json();
        setmyUserData(MyData);
        setmyusername(MyData[0].user_name);
        setmyshopname(MyData[0].user_phone);
        setmyuseremail(MyData[0].user_email);
        // console.log(MyData);

    } catch (error) {
        console.log(error);
    }
};

useEffect( () => {
  getUserDate();
}),[];


   return (
    <View style={styles.container}>
        

    <View style={styles.item1}>
      <Image style={styles.imagestyle}  source={require("../../assets/profile.png")} />
      
    </View>

    <View style={styles.item2}>
      <Text>Name  : {myusername}</Text>
      <Text>Email  : {myuseremail}</Text>
      <Text>Phone  : {myshopname}</Text>
   
      <View
        style={{
          borderBottomColor: '#800080',
          borderBottomWidth: 2,
        }}
      />
    </View>
     
  
       

    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("StartupList",{myEmail : `${myEmail}`})}>
    <Image style={styles.lineimage}  source={require("../../assets/startup.png")} />
    <Text style={styles.linetext}>Explore StartupIdea</Text>

    </TouchableOpacity>

    </View>
    
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("FundraisingList",{myEmail : `${myEmail}`})}>
    <Image style={styles.lineimage}  source={require("../../assets/fund.png")} />
    <Text style={styles.linetext}>Explore FundRaising</Text>

    </TouchableOpacity>

    </View>


    
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1}   onPress={() => navigation.navigate("AddFeedback",{myEmail : `${myEmail}`})}>
    <Image style={styles.lineimage}  source={require("../../assets/feedback.png")} />
    <Text style={styles.linetext}>Feedbacks</Text>

    </TouchableOpacity>
    
    </View>

    
    

    
    <View style={styles.item}>
    <TouchableOpacity style={styles.column1} onPress={() => navigation.navigate("Logout")}>
    <Image style={styles.lineimage}  source={require("../../assets/logout.png")}  />
    <Text style={styles.linetext}>Logout</Text>

    </TouchableOpacity>

    </View>
     
    
  </View>

   );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start' ,
      marginTop:30,// if you want to fill rows left to right
    },
    item: {
      width: '50%' // is 50% of container width
    },
    item1: {
        width: '23%' // is 50% of container width
      },
    item2: {
        width: '70%', // is 50% of container width
        marginTop:12
      },

      imagestyle:{
          marginTop:10,
          marginStart:10
      }  ,
      column1:{
         alignContent:"center",
         padding:20,
         justifyContent: 'center',
         alignItems: 'center',
      },
      linetext:{
         textAlign:"center",
         fontSize:16

      },
      lineimage:{
        justifyContent: 'center',
        alignItems: 'center',

      },
  });

export default InvestorHome;