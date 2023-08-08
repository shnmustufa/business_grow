import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert,Image,ScrollView} from "react-native";
import React,{useState} from "react";
import Checkbox from "expo-checkbox";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from "@react-native-picker/picker";


const Login = ({navigation}) => {
    const [agree,setagree]=useState(false);
    const [userName,setuserName] = useState("");
    const [password,setpassword] = useState("");
    const [usertype,setusertype] = useState("User");
   
    const submit= () =>{
       if(userName !="" || password !="")
       {

        var fetchInsertApi="https://arzachel.org/business_grow/user_login.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };

        var Data={
            s_email:userName,
            s_password:password,
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
                 if(response[0].Message == "Login Successfully")
                 {
                    if(usertype == "Invester")
                    {
                        navigation.navigate("InvestorHome",{myEmail : `${userName}`});
                    }
                    else{
                        navigation.navigate("UserHome",{myEmail : `${userName}`});
                    }
                    
                 }
                 else if(response[0].Message == "Your Account has been Blocked"){
                    alert('Your Account has been Blocked');
                   }
                   else {
                    alert(response[0].Message);
                   }
             }
            ).catch((error) =>
            {
                alert("Error"+error);
            });

        }
        else{
            alert('Please Fill All The Field');
        }
    };
   
      return(
        <ScrollView
      
        >
        <View style={styles.mainscreen}>
            <View>
             <Image style={styles.imagestyle}
              source={require("../../assets/businessgrow.png")}
             />
             </View>
            <View>
            <Text style={styles.mainhaider}>Investor/User Login</Text>
            <Text style={styles.description}>Login To Explore New Features & Amazing Ideas !</Text>
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
             <Text style={styles.labels}>Enter Your Password</Text>
             <TextInput 
              style={styles.textinput}
              autoCapitalize="none"
              selectionColor="#74B785"
              autoCorrect={false}
              secureTextEntry={true}
              value={password}
              onChangeText={(actualdata) => setpassword(actualdata)}
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
             <Text style={styles.registerbutton2}>Don't Have An Account ?
             <TouchableOpacity style={styles.touchreg}
             onPress={() => navigation.navigate("UserRegister")}
             ><Text style={styles.registerbutton}> Register Now</Text>
             </TouchableOpacity> 
             </Text>
         </View>
         <View>
             <Text style={styles.registerbutton2}>Don't Remember  ?
             <TouchableOpacity style={styles.touchreg}
             onPress={() => navigation.navigate("ForgetPassword")}
             ><Text style={styles.registerbutton}> Forget Now</Text>
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
           <Text style={styles.buttonstyle}>Login</Text>
   
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
       justifyContent: 'center',
        alignContent:'center',
        alignItems:'center',
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
   
   export default Login;