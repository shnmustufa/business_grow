import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,FlatList} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MyIdeas = ({route,navigation}) => {
  const myEmail=route.params.myEmail; 
  const [productdata,setproductdata] = useState("");

  var fetchInsertApi="https://arzachel.org/business_grow/user/get_myidea.php?uemail="+myEmail;
      var headers={
          'Accept':'application/json',
          'Content-Type':'application.json'
      };

   
      fetch(fetchInsertApi,
          {
             method:'GET',
             headers:headers, 
          }).then((response) => response.json())
          .then((response) =>
           {
               console.log(response);
               setproductdata(response);
           
           }
          ).catch((error) =>
          {
              alert("Error"+error);
          });
        




    return (
      <View> 
        <View >
      <Text style={{marginTop:10,fontSize:20,color:"#74B785",alignContent:'center',justifyContent:'center',textAlign:'center'}}>My StartUp Idea List</Text>
       
      </View>
      
      
             <FlatList 
              keyExtractor={(key) =>{
         return key.product_id;
             }}
             showsHorizontalScrollIndicator={false}
       
     data={productdata}
     renderItem={(element)=>{
         return (
          <View style={styles.container}> 
        
    
          
          <View style={styles.item1}>
           <Image style={styles.imagestyle}  source={{uri:"https://arzachel.org/business_grow/startup.png"}} />
           
          </View>
          
          <View style={styles.item2}>
          <TouchableOpacity
          onPress={() => navigation.navigate("DeleteIdea",{idea_id : element.item.idea_id,myEmail:myEmail})}>
          
           <Text> Startup Name  : {element.item.idea_name}</Text>
           <Text> Category  : {element.item.idea_category}</Text>
           <Text> Short Detail  : {element.item.idea_short_summary}</Text>
           <Text style={{color:'#74B785',textAlign:'center',marginTop:7,fontWeight:'bold'}}>+ Delete Idea</Text>
    
           
          </TouchableOpacity>
           <View
             style={{
               borderBottomColor: '#74B785',
               borderBottomWidth: 2,
             }}
           />
           
          </View>
          
          
          </View>


         );
     }}
     />
       

       
</View>


        
     );    
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor:'#ffffff' // if you want to fill rows left to right
    },
    item: {
      width: '50%' // is 50% of container width
    },
    item1: {
        width: '23%' // is 50% of container width
      },
    item2: {
        width: '77%', // is 50% of container width
        marginTop:22
      },
      item3: {
        width: '65%', // is 50% of container width
        
      },
      item4: {
        width: '35%', // is 50% of container width
        
      },

      imagestyle:{
          marginTop:10,
          marginStart:10,
          height:70,
          width:70
      },
    
  });


export default MyIdeas;