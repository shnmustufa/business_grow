import {View,Text,StyleSheet,TextInput,Button,TouchableOpacity,Alert,Image,FlatList,ScrollView} from "react-native";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from "@react-native-picker/picker";
import { Constants } from "expo-constants";




const AddFundRaising = ({route,navigation}) => {
    const myEmail=route.params.myEmail; 
    const [businessname,setbusinessname] = useState("");
    const [businessrunning,setbusinessrunning] = useState("");
    const [bcategory,setbcategory] = useState("Food Business");
    const [businessdetail,setbusinessdetail] = useState("");
    const [amountspenddetail,setamountspenddetail] = useState("");
    const [amountrequired,setamountrequired] = useState("");
    const [shareequity,setshareequity] = useState("");
   
    
   
    const submit= () =>{
        if(businessname !="" || businessrunning !="" || bcategory !="" || businessdetail !="" || amountspenddetail !="" || amountrequired !="" || shareequity !="" )
        {
        var fetchInsertApi="https://arzachel.org/business_grow/user/add_fund_raising.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            s_email:myEmail,
            b_name:businessname,
            b_running:businessrunning,
            b_category:bcategory,
            b_detail:businessdetail,
            a_detail:amountspenddetail,
            a_required:amountrequired,
            s_equity:shareequity,
            

        };
        fetch(fetchInsertApi,
            {
               method:'POST',
               headers:headers,
               body:JSON.stringify(Data), 
            }).then((response) => response.json())
            .then((response) =>
             {
                 if(response[0].Message == "Fund Raising has been Register")
                 {
                    
             
                    navigation.navigate("UserHome",{myEmail : myEmail});
                 }
                 else{
                  alert('Fund Raising Not been Register Please Try Again');
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
            <Text style={styles.mainhaider}>Add Fund Raising</Text>
            </View>

      
            <View>
             <Text style={styles.labels}>Business Name</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#74B785"
              autoCorrect={false}
              value={businessname}
              onChangeText={(actualdata) => setbusinessname(actualdata)}
             />
         </View>
        
         <View>
             <Text style={styles.labels}>Is Business is Runnung ? Yes/No</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#74B785"
              autoCorrect={false}
              value={businessrunning}
              onChangeText={(actualdata) => setbusinessrunning(actualdata)}
             />
         </View>

         <View>
             <Text style={styles.labels}>Category</Text>
             <Picker
        selectedValue={bcategory}
        style={styles.textinput}
        onValueChange={(itemValue, itemIndex) => setbcategory(itemValue)}
      >
     
          <Picker.Item label="Food Business" value="Food Business" />
        <Picker.Item label="Online Service" value="Online Service" />
        <Picker.Item label="Branding" value="Branding" />
        <Picker.Item label="Information Technology" value="Information Technology" />
        <Picker.Item label="Education" value="Education" />
        
        
      </Picker>
         </View>
        

         <View>
             <Text style={styles.labels}>Business Detail</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#74B785"
              autoCorrect={false}
              value={businessdetail}
              onChangeText={(actualdata) => setbusinessdetail(actualdata)}
             />
         </View>


         <View>
             <Text style={styles.labels}>Amount Spend Detail</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#74B785"
              autoCorrect={false}
              value={amountspenddetail}
              onChangeText={(actualdata) => setamountspenddetail(actualdata)}
             />
         </View>
   
        
         <View>
             <Text style={styles.labels}>How Much Amount Do You Want?</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#74B785"
              autoCorrect={false}
              keyboardType="numeric"
              value={amountrequired}
              onChangeText={(actualdata) => setamountrequired(actualdata)}
             />
         </View>

         <View>
             <Text style={styles.labels}>Share Equity %</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#74B785"
              autoCorrect={false}
              keyboardType="numeric"
              value={shareequity}
              onChangeText={(actualdata) => setshareequity(actualdata)}
             />
         </View>
        

         
        

        

       
       
   
         <TouchableOpacity style={[styles.touchopacity,
          {
             backgroundColor:"#74B785",
          },
       ]}
        onPress={() => submit()}
       >
           <Text style={styles.buttonstyle}>Add Fund Raising</Text>
   
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
 
 
 export default AddFundRaising;