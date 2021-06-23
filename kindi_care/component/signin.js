import React, {Component, useState} from "react"
import {Text, TextInput, View, StyleSheet, Dimensions, TouchableOpacity, Button, Image}  from "react-native"
import CheckBox from '@react-native-community/checkbox'
import logo from "../logo/logo.png"
import facebook from "../logo/facebook.png"
// import axios from 'axios'
import axios from 'react-native-axios'
// import {RectButton} from "react-native-gesture-handler"
import google from '../logo/google.jpg'
import apple from '../logo/apple.png'
// const [text, onChangeTest] = React.useState("");
const {width: WIDTH} = Dimensions.get('window');
// const [checked, setChecked] = useState(false);
import authApi from '../api/authApi';
import axiosClient from "../api/axiosClient";
const signin = ({navigation})=>{
    // const [text, onChangeTest] = useState("");
    // const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSelected, setSelection] = useState(false);
    // function handleEmailInput(event) {
    //     setEmail(event.target.value)
    // }
    // function handlePasswordInput(event) {
    //     setPassword(event.target.value)
    // }
    async function logIn () {
        console.log('alo');
        await authApi.logIn({
            email,
            password
        }, loginSuccess, loginFailded);
        console.log(email), 
        console.log(password)
    }

    const loginSuccess = (reponse) =>{
        const token = reponse.token
        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
        console.log(reponse.data)
    }
    const loginFailded = (err) =>{
        console.log(err.message);
        console.log(email), 
        console.log(password)
    }
    return(
        <View style={{backgroundColor: 'white'}}>
            <View>
                <Image
                style={styles.image}
                source={logo}></Image>
            </View>
            <View style={styles.inputuser}>
                <Text style={styles.textUser}>Email or username</Text>
                <TextInput
                style={styles.textInputUser}
                //placeholder={'Email or username'}
                //placeholderTextColor={'black'}
                underlineColorAndroid="transparent"
                onChangeText={setEmail}
                value={email}
                ></TextInput>
            </View>
            <View style = {styles.inputPass}>
                <Text style={styles.textPass}>Password</Text>
                <TextInput
                style={styles.textInputPass}
                underlineColorAndroid="transparent"
                secureTextEntry={true}
                onChangeText={setPassword}      
                value={password}
                ></TextInput>
             </View>
             <View>
                <CheckBox
                style={{paddingTop:30}}
                value={isSelected}
                onValueChange={setSelection}
                tintColors={{ true: '#FD4659', false: '#D2D1D1' }}></CheckBox> 
            </View> 
            <View style={styles.buttonLogin}>
                <TouchableOpacity 
                onPress={()=>{
                    // axios.post('https://kindicare-api-staging.enouvo.com/api/v1/client/auth/login',{
                    //     email,
                    //     password
                    // }).then(reponse=>{
                    //     console.log(reponse.data);
                    //     navigation.navigate('HomeScreen')

                        
                    // }).catch(error=>{
                    //     console.log(error);
                    // }
                    // )
                    {logIn()}
                }}>
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonSignUp}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('SignUpScreen')}>
                    <Text style={styles.textInput}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.text}>Or sign in with</Text>
            </View>
            <View style={styles.buttonFacebook}>
               <TouchableOpacity style={{flex: 1, flexDirection: 'row'}}>
                    <Image
                    style={styles.imageFacebook}
                    source={facebook}></Image>
                    <Text style={styles.textFacebook}>Facebook</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
            <TouchableOpacity style={styles.buttonGoogle}>
                    <Image
                    style={styles.imageGoogle}
                    source={google}></Image>
                    <Text style={styles.textGoogle}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonApple}>
                    <Image
                    style={styles.imageApple}
                    source={apple}></Image>
                    <Text style={styles.textApple}>Apple</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
}

const styles = StyleSheet.create({
    image:{
        width:182,
        height:87,
        marginTop: 30,
        marginLeft: 110
    },
    inputuser: { 
        width: 380,
        height: 64,
        marginTop:50,
        marginLeft:16,
        borderRadius:6,
        color: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D2D1D1',
    },
    textUser:{
        width: 122.72,
        height:15,
        marginTop: 12,
        marginLeft: 16.78,
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 12,
        color: '#857E7F'
    },
    textInputUser:{
        color : '#2D1F21', 
        marginLeft: 12, 
        marginBottom: 20, 
        fontStyle:'normal', 
        fontSize: 14, 
        fontWeight: '700'
    },
    inpurPass:{
        width: 380,
        height: 64,
        marginTop: 16,
        marginLeft:16,
        borderRadius:6,
        color: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D2D1D1'
    },
    textPass:{
        width: 62.94,
        height: 15,
        marginTop: 13,
        marginLeft: 16.78,
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 12,
        color: '#857E7F'
    },
    textInputPass:{
        color : '#2D1F21', 
        marginLeft: 12, 
        marginBottom: 20, 
        fontStyle:'normal', 
        fontSize: 14, 
        fontWeight: '700'
    },
    buttonLogin:{
        alignItems: "center",
        backgroundColor: "#FD4659",
        marginTop: 40,
        width:380,
        height:48,
        marginLeft:16,
        borderRadius:6
    },
    textLogin:{
        width:37,
        height:22,
        marginTop: 13,
        color: "#FFFFFF",
        fontSize: 14
    },
    buttonSignUp:{
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        marginTop: 8,
        width:380,
        height:48,
        marginLeft:16,
        borderRadius:6,
        borderColor:"#FD4659",
        borderWidth: 1
    },
    textInput:{
        width:53,
        height:22,
        marginTop: 13,
        color: "#FD4659",
        fontSize: 14
    },
    text:{
        width: 99,
        height: 22,
        marginTop: 30,
        marginLeft: 175
    },
    buttonFacebook:{
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        marginTop: 8,
        width:380,
        height:48,
        marginLeft:16,
        borderRadius:6,
        borderColor:"#D2D1D1",
        borderWidth: 1
    },
    imageFacebook:{
        width: 16,
        height: 16,
        marginTop: 15,
        //marginLeft: 121,
    },
    textFacebook:{
        width: 81,
        height: 21,
        marginTop: 13,
        //marginLeft: 4,
        color: "#4267B2"
    },
    row:{
        flex: 1,
        flexDirection: 'row',
    },
    buttonGoogle:{
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        marginTop: 8,
        width:164,
        height:48,
        marginLeft:16,
        borderRadius:6,
        borderColor:"#D2D1D1",
        borderWidth: 1,
        flex: 1, 
        flexDirection: 'row'
    },
    imageGoogle:{
        width: 16,
        height: 16,
        marginTop: 5,
        marginLeft: 43,
        marginBottom: 10
    },
    textGoogle:{
        width: 60, 
        height: 21,
        marginTop: 13,
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 17,
        marginBottom: 20,
        color: '#7F8789'
    },
    buttonApple:{
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        marginTop: 8,
        width:164,
        height:48,
        // marginLeft:10,
        marginRight: 16,
        borderRadius:6,
        borderColor:"#D2D1D1",
        borderWidth: 1,
        flex: 1, 
        flexDirection: 'row'
    },
    imageApple:{
        width: 14,
        height:16,
        marginLeft: 49,
        //marginTop: 13,
        marginBottom: 10,
    },
    textApple:{
        width: 49,
        height:21,
        marginBottom: 14,
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 17,
        color: '#0B0B0A'
    }
    
    
});
export default signin;