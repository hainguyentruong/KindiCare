import React, {Component, useState} from "react"
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'
import axios from 'react-native-axios'


const signup =({navigation})=> {
    // const [text, onChangeTest] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <View>
            <View>
                <Text style={styles.text}>Create KindiCare account</Text>
            </View>
            <View style={styles.inputFirstName}>
                <Text style={styles.textFirstName}>First name</Text>
                <TextInput
                style={styles.TextInputFirstName}
                underlineColorAndroid="transparent"
                onChangeText={setFirstName}
                value={firstName}
                ></TextInput>
            </View>
            <View style={styles.inputLastName}>
                <Text style={styles.textLastName}>Last Name</Text>
                <TextInput
                style={styles.TextInputLastName}
                underlineColorAndroid="transparent"
                onChangeText={setLastName}
                value={lastName}
                ></TextInput>
            </View>
            <View style={styles.inputEmail}>
                <Text style={styles.textEmail}>Email</Text>
                <TextInput
                style={styles.TextInputEmail}
                underlineColorAndroid="transparent"
                onChangeText={setEmail}
                value={email}
                ></TextInput>
            </View>
            <View style={styles.inputAddress}>
                <Text style={styles.textAddress}>Address</Text>
                <TextInput
                style={styles.TextInputAddress}
                placeholder={'Enter your address here'}
                placeholderTextColor={'#857E7F'}
                underlineColorAndroid="transparent"
                onChangeText={setAddress}
                value={address}
                ></TextInput>
            </View>
            <View style={styles.inputPassword}>
                <Text style={styles.textPassword}>Password</Text>
                <TextInput
                style={styles.TextInputPassword}
                placeholder={'Enter password here'}
                placeholderTextColor={'#857E7F'}
                underlineColorAndroid="transparent"
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
                ></TextInput>
            </View>
            <View style={styles.inputConfirmPassword}>
                <Text style={styles.textConfirmPassword}>Confirm password</Text>
                <TextInput
                style={styles.TextInputConfirmPassword}
                placeholder={'Enter password here'}
                placeholderTextColor={'#857E7F'}
                underlineColorAndroid="transparent"
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
                ></TextInput>
            </View>
            <View style={styles.buttonSignUp}>
                <TouchableOpacity
                onPress={()=>{
                    axios.post('https://kindicare-api-staging.enouvo.com/api/v1/client/auth/register',{
                        firstName,
                        lastName,
                        email,
                        password
                    }).then(reponse=>{
                        console.log(reponse.data);
                        navigation.navigate('VerifyEmailScreen',{
                            email
                        })
                    }).catch(error=>{
                        console.log(error);
                    })

                }}>
                    <Text style={styles.textSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    text:{
        width: 343,
        height: 30,
        marginTop: 20,
        marginLeft: 16,
        color: '#2D1F21',
        fontSize: 24,
        fontWeight: 'bold'
    },
    inputFirstName:{
        width: 380,
        height: 64,
        marginTop:19,
        marginLeft:16,
        borderRadius:6,
        //paddingLeft: 45,
        backgroundColor:'white',
        color: 'white',
        borderWidth: 1,
        borderColor: '#D2D1D1'
    },
    textFirstName:{
        width: 61,
        height: 15,
        marginTop: 12,
        marginLeft: 16,
        fontSize: 12,
        fontWeight:'400',
        color: '#857E7F',
        fontStyle: 'normal'
    },
    TextInputFirstName:{
        //width: 22,
        //height: 20,
        marginTop: 0,
        marginLeft:14,
        color: '#2D1F21',
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'normal',
        marginBottom: 25
    },
    inputLastName:{
        width: 380,
        height: 64,
        marginTop:16,
        marginLeft:16,
        borderRadius:6,
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: '#D2D1D1'
    },
    textLastName:{
        width: 63,
        height: 15,
        marginTop: 12,
        marginLeft: 16,
        fontSize: 12,
        fontWeight:'400',
        fontStyle: 'normal',
        color: '#857E7F'
    },
    TextInputLastName:{
        marginTop: 0,
        marginLeft:14,
        color: '#2D1F21',
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'normal',
        marginBottom: 25
    },
    inputEmail:{
        width: 380,
        height: 64,
        marginTop:16,
        marginLeft:16,
        borderRadius:6,
        //paddingLeft: 45,
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: '#FD4659'
    },
    textEmail:{
        width: 32,
        height: 15,
        marginTop: 12,
        marginLeft: 16,
        fontSize: 12,
        fontWeight:'400',
        fontStyle: 'normal',
        color: '#857E7F'
    },
    TextInputEmail:{
        marginTop: 0,
        marginLeft:14,
        color: '#2D1F21',
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'normal',
        marginBottom: 25
    },
    inputAddress:{
        width: 380,
        height: 64,
        marginTop:16,
        marginLeft:16,
        borderRadius:6,
        //paddingLeft: 45,
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: '#D2D1D1'
    },
    textAddress:{
        width: 49,
        height: 15,
        marginTop: 12,
        marginLeft: 16,
        fontSize: 12,
        fontWeight:'700',
        fontStyle: 'normal',
        color: '#2D1F21'
    },
    TextInputAddress:{
        marginTop: 0,
        marginLeft:14,
        color: '#2D1F21',
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'normal',
        marginBottom: 25
    },
    inputPassword:{
        width: 380,
        height: 64,
        marginTop:16,
        marginLeft:16,
        borderRadius:6,
        //paddingLeft: 45,
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: '#D2D1D1'
    },
    textPassword:{
        width: 59,
        height: 15,
        marginTop: 12,
        marginLeft: 16,
        fontSize: 12,
        fontWeight:'700',
        fontStyle: 'normal',
        color: '#2D1F21'
    },
    TextInputPassword:{
        marginTop: 0,
        marginLeft:14,
        color: '#2D1F21',
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'normal',
        marginBottom: 25
    },
    inputConfirmPassword:{
        width: 380,
        height: 64,
        marginTop:16,
        marginLeft:16,
        borderRadius:6,
        //paddingLeft: 45,
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: '#D2D1D1'
    },
    textConfirmPassword:{
        width: 109,
        height: 15,
        marginTop: 12,
        marginLeft: 16,
        fontSize: 12,
        fontWeight:'700',
        fontStyle: 'normal',
        color: '#2D1F21'
    },
    TextInputConfirmPassword:{
        marginTop: 0,
        marginLeft:14,
        color: '#2D1F21',
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'normal',
        marginBottom: 25
    },
    buttonSignUp:{
        width: 380,
        alignItems: "center",
        height: 48,
        marginTop: 40,
        marginLeft: 16,
        backgroundColor: '#D2D1D1',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#D2D1D1'
    },
    textSignUp:{
        width: 53,
        height: 22,
        marginTop: 13,
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 14,
        color: '#FFFFFF'
    }



    
});

export default signup;