import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image, ScrollView} from "react-native";
import React,{useState} from "react";
import Checkbox from "expo-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from "@react-native-picker/picker";


const ForgetPassword = ({navigation}) => {

    const [userName,setuserName] = useState("");
    const [userpass,setuserpass] = useState("");
   
    const [usertype,setusertype] = useState("User");
   
    const submit= () =>{
        if(userName !="")
       {
        var fetchInsertApi="https://arzachel.org/business_grow/forget_password.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            s_email:userName,
            s_pass:userpass,
            user_type:usertype

        };
        fetch(fetchInsertApi,
            {
               method:'POST',
               headers:headers,
               body:JSON.stringify(Data), 
            }).then((response) => response.json())
            .then((response) =>
             {
                 if(response[0].Message == "Update Successfully")
                 {
                    navigation.navigate("Login");
                    
                    
                 }
                 else if(response[0].Message == "Update Un Successfully")
                 {
                  alert('Update Un Successfully');  
                 }
                 else if(response[0].Message == "Email Does Not Exist")
                 {
                  alert('Email Does Not Exist');  
                 }
             }
            ).catch((error) =>
            {
                alert("Error"+error);
            });
        }
        else{
            alert('Please Fill All Field');
        }
    };
   
      return(
        <ScrollView>
        <View style={styles.mainscreen}>
            <View>
             <Image style={styles.imagestyle}
              source={require("../../assets/businessgrow.png")}
             />
             </View>
            <View>
            <Text style={styles.mainhaider}>Forget Password</Text>
            <Text style={styles.description}>If you forget your password don't worry</Text>
            </View>

      
         <View>
             <Text style={styles.labels}>Enter Your Email</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              selectionColor="#74B785"
              value={userName}
              onChangeText={(actualdata) => setuserName(actualdata)}
             />
         </View>
         <View>
             <Text style={styles.labels}>Enter New Password</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              selectionColor="#74B785"
              value={userpass}
              onChangeText={(actualdata) => setuserpass(actualdata)}
             />
         </View>
   
        
         <View>
             <Text style={styles.labels}>Select User Type</Text>
             <Picker
        selectedValue={usertype}
        style={styles.textinput}
        onValueChange={(itemValue, itemIndex) => setusertype(itemValue)}
      >
     
          <Picker.Item label="User" value="User" />
        <Picker.Item label="Invester" value="Invester" />
        
        
      </Picker>
            
         </View>
         <View>
             <Text style={styles.registerbutton2}>Already Have An Account ?
             <TouchableOpacity style={styles.touchreg}
             onPress={() => navigation.navigate("Login")}
             ><Text style={styles.registerbutton}> Login Now</Text>
             </TouchableOpacity> 
             </Text>
         </View>
        
       
       
        
   
         <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#74B785",
          },
       ]}

        onPress={() => submit()}
       >
           <Text style={styles.buttonstyle}>Reset</Text>
   
         </TouchableOpacity>
             
   
        </View>
   
        </ScrollView>
      );
   
   };
   const styles = StyleSheet.create({
       
      
    mainscreen:{
   
          padding:20,
          marginTop:25,

   
       },
       imagestyle:{
        flexDirection: 'row', justifyContent: 'space-between',
        marginStart:30
        
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
       touchopacity:{
           marginTop:15,
       },
       registerbutton:{
         color:"#74B785",
         fontWeight:"bold",
         paddingTop:10,
       
       },
       registerbutton2:{
        marginTop:5,
      },
      touchreg:{
         marginTop:25
      },
     });
   
   export default ForgetPassword;