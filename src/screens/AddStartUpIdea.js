import {View,Text,StyleSheet,TextInput,Button,TouchableOpacity,Alert,Image,FlatList,ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from "@react-native-picker/picker";
import { Constants } from "expo-constants";




const AddStartUpIdea = ({route,navigation}) => {
    const myEmail=route.params.myEmail; 
    const [ideacategory,setideacategory] = useState("Food Business");
    const [ideaname,setideaname] = useState("");
    const [ideasummary,setideasummary] = useState("");
    const [shortsummary,setshortsummary] = useState("");
    const [phoneno,setphoneno] = useState("");
   
    
   
    const submit= () =>{
        if(ideaname !="" || ideasummary !="" || shortsummary !="" || phoneno !="" )
        {
        var fetchInsertApi="https://theozonemedia.com/business_grow/user/add_startup_idea.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            s_email:myEmail,
            idea_name:ideaname,
            idea_cat:ideacategory,
            idea_summ:ideasummary,
            short_summ:shortsummary,
            phoneno:phoneno,
            

        };
        fetch(fetchInsertApi,
            {
               method:'POST',
               headers:headers,
               body:JSON.stringify(Data), 
            }).then((response) => response.json())
            .then((response) =>
             {
                 if(response[0].Message == "Idea has been Register")
                 {
                    
             
                    navigation.navigate("UserHome",{myEmail : myEmail});
                 }
                 else{
                  alert('Idea Not been Register Please Try Again');
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
            <Text style={styles.mainhaider}>Add Start Up Idea</Text>
            </View>

      
            <View>
             <Text style={styles.labels}>Startup Name</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#74B785"
              autoCorrect={false}
              value={ideaname}
              onChangeText={(actualdata) => setideaname(actualdata)}
             />
         </View>
        
         <View>
             <Text style={styles.labels}>Idea  Short Detail</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#74B785"
              autoCorrect={false}
              value={shortsummary}
              onChangeText={(actualdata) => setshortsummary(actualdata)}
             />
         </View>

         <View>
             <Text style={styles.labels}>Category</Text>
             <Picker
        selectedValue={ideacategory}
        style={styles.textinput}
        onValueChange={(itemValue, itemIndex) => setideacategory(itemValue)}
      >
     
          <Picker.Item label="Food Business" value="Food Business" />
        <Picker.Item label="Online Service" value="Online Service" />
        <Picker.Item label="Branding" value="Branding" />
        <Picker.Item label="Information Technology" value="Information Technology" />
        <Picker.Item label="Education" value="Education" />
        
        
      </Picker>
         </View>
        

         <View>
             <Text style={styles.labels}>Idea  Long Detail</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#74B785"
              autoCorrect={false}
              value={ideasummary}
              onChangeText={(actualdata) => setideasummary(actualdata)}
             />
         </View>
   
        
         <View>
             <Text style={styles.labels}>Phone No</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#74B785"
              autoCorrect={false}
              keyboardType="numeric"
              value={phoneno}
              onChangeText={(actualdata) => setphoneno(actualdata)}
             />
         </View>
        

         
        

        

       
       
   
         <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#74B785",
          },
       ]}
        onPress={() => submit()}
       >
           <Text style={styles.buttonstyle}>Add Startup Idea</Text>
   
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
 
 
 export default AddStartUpIdea;