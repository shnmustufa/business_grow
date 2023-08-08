import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,ScrollView,FlatList} from "react-native";
import React,{useState,useEffect} from "react";
import { Avatar, Button, Card, Title, Paragraph,Searchbar  } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const ExploreStartup = ({route,navigation})=>{
  const myEmail=route.params.myEmail;
     
   
    const [productdata,setproductdata] = useState("");
   
    var fetchInsertApi2="https://lrtextile.com.pk/projectmart/investor/fetch_allidea.php";
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
          
          <Card style={{padding:5,marginTop:15,borderRadius:22,backgroundColor:'#D3D3D3'}}>
          
          <TouchableOpacity onPress={() => navigation.navigate("IdeaDetail",{ideaid : element.item.idea_id,myEmail:myEmail})} >
         
          <Card.Cover source={{ uri: "https://lrtextile.com.pk/projectmart/pitcher/"+element.item.idea_img }} style={{height:175}}/>
          <Card.Content>
          <Title style={{color:'black',paddingTop:5,fontSize:15,fontWeight:'bold'}}> &nbsp;&nbsp;Idea Name : {element.item.idea_name}</Title>
         
          <Paragraph  style={{color:'black',marginLeft:9}}>Idea Category : {element.item.idea_category}{'\n'}
            Amount Required : Rs {element.item.amount_required}{'\n'}
            Share Equity : {element.item.share_equity}{'\n'}
            Idea Summary : {element.item.idea_summary}</Paragraph>
           
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
      item2: {
        width: '100%' // is 50% of container width
      },
      imagestyle:{
        height:23,
        width:23,
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

export default ExploreStartup;