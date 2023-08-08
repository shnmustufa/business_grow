import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,Picker,ScrollView,FlatList} from "react-native";
import React,{useState,useEffect} from "react";
import Checkbox from "expo-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Button, Card, Title, Paragraph,Searchbar  } from 'react-native-paper';


const StartupList = ({route,navigation}) => {

    const myEmail=route.params.myEmail; 
    const [productdata,setproductdata] = useState("");
   
    var fetchInsertApi2="https://arzachel.org/business_grow/investor/getallstartuplist.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };
  
        const getUserDate = async () =>{
          if(productdata =="")
          {
     


            fetch(fetchInsertApi2,
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

            }

          };

          useEffect( () => {
            getUserDate();
            return () => {

          }
          }),[];
            
   
          return(
            <ScrollView
          
            >
            <View style={styles.container}> 
            
          
    
        
       
        <View style={styles.item2}>
    
    
    
    
        <FlatList 
            style={{paddingBottom:50}}
             keyExtractor={(key) =>{
             return key.idea_id;
                 }}
                 showsHorizontalScrollIndicator={false}
           
         data={productdata}
         renderItem={(element)=>{
             return (
              
              <Card style={{padding:5,marginTop:15,borderRadius:22}}>
              
              <TouchableOpacity  >
             
              <Card.Content>
              <View style={styles.container}> 
               <View style={styles.item4}>
               <Image style={styles.imagestyle}  source={{uri:"https://arzachel.org/business_grow/startup.png"}} />
           
               </View>
               <View style={styles.item5}>
               <Title style={{color:'black',paddingTop:5,fontSize:15,fontWeight:'bold'}}> &nbsp;&nbsp;Idea Name : {element.item.idea_name}</Title>
             
               <Paragraph  style={{color:'black',marginLeft:9}}>Idea Category : {element.item.idea_category}{'\n'}
                Phone No : {element.item.phone_no}{'\n'}
                Email Address : {element.item.user_email}{'\n'}
                Idea Summary : {element.item.idea_short_summary}
                Idea Detail : {element.item.idea_short_summary}</Paragraph>
               </View>
               </View>
             
               
              </Card.Content>
              </TouchableOpacity>
      
      
            {/* <Card.Title style={{marginTop:130}} title="Card Title" subtitle="Card Subtitle"  left={LeftContent} /> */}
              
            </Card>
            
    
    
             );
         }}
         />
       </View>
          </View>
          </ScrollView>
         
    
          
        );
    }
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          backgroundColor:'white',
          justifyContent: 'center',alignItems: 'center'
           // if you want to fill rows left to right
        },
        container2: {
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          // borderWidth:2,
          margin:5,
          // borderColor:'black',
          backgroundColor:'white',
          justifyContent: 'center',alignItems: 'center'
           // if you want to fill rows left to right
        },
        item: {
          width: '15%' // is 50% of container width
        },
        item1: {
            width: '85%' // is 50% of container width
          },
          item5: {
            width: '75%' // is 50% of container width
          },
          item4: {
            width: '25%' // is 50% of container width
          },
          item2: {
            width: '100%' // is 50% of container width
          },
          imagestyle:{
            height:80,
            width:80,
            marginTop:18,
            marginLeft:10,
            alignSelf: 'center',
        },
        imagestyle2:{
          height:100,
          width:100,
          marginTop:18,
          marginLeft:10,
          alignSelf: 'center',
      },
        
        
      });
    

   export default StartupList;