import {View,Text,StyleSheet,TextInput,Button,TouchableOpacity,Alert,Image,FlatList,ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from "@react-native-picker/picker";
import { Constants } from "expo-constants";




const AddFeedback = ({route,navigation}) => {
    const myEmail=route.params.myEmail; 
    const [feedbacktext,setfeedbacktext] = useState("");
   
    
   
    const submit= () =>{
        if(feedbacktext !=""  )
        {
        var fetchInsertApi="https://arzachel.org/business_grow/user/add_feedback.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            s_email:myEmail,
            feedback:feedbacktext,
           
            

        };
        fetch(fetchInsertApi,
            {
               method:'POST',
               headers:headers,
               body:JSON.stringify(Data), 
            }).then((response) => response.json())
            .then((response) =>
             {
                 if(response[0].Message == "Feedback has been Register")
                 {
                    
                    alert('Feedback Submitted');
                    setfeedbacktext("");
                    navigation.navigate("AddFeedback",{myEmail : myEmail});
                 }
                 else{
                  alert('Feedback Not been Register Please Try Again');
                 }
             }
            ).catch((error) =>
            {
                alert("Error"+error);
            });

        }
        else{
            alert('please fill all the field');
        }

    };
  
 



 


  
 
     return (
        <ScrollView
      
        >
        <View style={styles.mainscreen}>
           
            <View>
            <Text style={styles.mainhaider}>Add Feedback</Text>
            </View>

      
            <View>
             <Text style={styles.labels}>Feedback Text</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#74B785"
              autoCorrect={false}
              value={feedbacktext}
              onChangeText={(actualdata) => setfeedbacktext(actualdata)}
             />
         </View>
        
            

         
        

        

       
       
   
         <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#74B785",
          },
       ]}
        onPress={() => submit()}
       >
           <Text style={styles.buttonstyle}>Add Feedback</Text>
   
         </TouchableOpacity>
             
   
        </View>

        </ScrollView>
   
   
      );    
 };
 
 
 
 const styles = StyleSheet.create({
         
    mainscreen:{
   
        padding:20,
        marginTop:5,

 
     },
     imagestyle:{
      flexDirection: 'row', justifyContent: 'space-between'
     },
     container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
     },
     mainhaider:{
         fontSize:20,
         marginTop:10,
         fontWeight:"bold",
         color:"#74B785",
         textAlign:"center"
 
     },
     description:{
         color:"grey",
         marginTop:4,
     },
     labels:{
         color:"grey",
         marginTop:15,
         fontWeight:"bold"
     },
     textinput:{
         borderWidth:1,
         borderColor:"grey",
         paddingHorizontal:15,
         paddingVertical:7,
         borderRadius:1,
         fontSize:18,
         
     },
     checkboxstyle:{
         marginTop:15,
 
     },
     checkboxtext:{
         marginLeft:30,
         marginTop:-20,
     },
     buttonstyle:{
         textAlign:"center",
         padding:8,
         color:"white",
     },
     buttonstyle2:{
        textAlign:"center",
        padding:8,
        color:"white",
        marginTop:8
    },
     touchopacity:{
         marginTop:15,
     },
     registerbutton:{
       color:"#74B785",
     
     },
     registerbutton2:{
      marginTop:8,
    },
    touchreg:{
       marginTop:25
    },
     
   });
 
 
 export default AddFeedback;