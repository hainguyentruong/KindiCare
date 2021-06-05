import React,  {useState, Component, useRef} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import axios from 'react-native-axios'

const verifyemail = ({route, navigation}) => {
    //const nameref = useRef();
    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");
    const [pin5, setPin5] = useState("");
    const [pin6, setPin6] = useState("");
    
    // const [pin, setPin] = useState("");
    // const verifyEmail = {pin1, pin2, pin3, pin4, pin5, pin6}
    // const setValue = (e) => {
    //     var temp ={}
    //     Object.assign(temp ,pin)
    //     temp[e.target.name] = e.target.value;
    //     setPin(temp);
    // }
    // componentDidMount=()=>{
    //     this.nameref.focus()
    // }
    // const verifyEmail = pin1 + pin2 + pin3 + pin4 + pin5 + pin6;
    // const temp = "116658"
    const verifyEmailCode = pin1 + pin2 + pin3 + pin4 + pin5 + pin6;
    const {email} = route.params;  
    return (
        <View>
            <View>
                <Text style={styles.text}>Reset Password</Text>
            </View>
            <View>
                <Text style={styles.textTitle}>A code has been sent to your registered</Text>
            </View>
            <View>
                <Text style={styles.textTitle}>email, please open your inbox to check</Text>
            </View>
            <View style={styles.rows}>
                <TextInput 
                    style={styles.TextInputFirst}
                    maxLength={1}
                    underlineColorAndroid="transparent"
                    onChangeText={setPin1}
                    value={pin1}
                    //onChangeText={setPin}
                >
                </TextInput>
                <TextInput 
                    style = {styles.TextInputNext}
                    maxLength={1}
                    underlineColorAndroid="transparent"
                    onChangeText={setPin2}
                    value={pin2}
                    //onChangeText={setPin}
                    >
                </TextInput>
                <TextInput 
                    style = {styles.TextInputNext}
                    style = {styles.TextInputNext}
                    maxLength={1}
                    underlineColorAndroid="transparent"
                    onChangeText={setPin3}
                    value={pin3}
                    // onChangeText={setPin}
                    >
                </TextInput>
                <TextInput 
                    style = {styles.TextInputNext}
                    style = {styles.TextInputNext}
                    maxLength={1}
                    underlineColorAndroid="transparent"
                    onChangeText={setPin4}
                    value={pin4}
                    // onChangeText={setPin}
                    >
                </TextInput>
                <TextInput 
                    style = {styles.TextInputNext}
                    style = {styles.TextInputNext}
                    maxLength={1}
                    underlineColorAndroid="transparent"
                    onChangeText={setPin5}
                    value={pin5}
                    // onChangeText={setPin}
                    >
                </TextInput>
                <TextInput 
                    style = {styles.TextInputNext}
                    style = {styles.TextInputNext}
                    maxLength={1}
                    underlineColorAndroid="transparent"
                    onChangeText={setPin6}
                    value={pin6}
                    // onChangeText={setPin}
                    >
                </TextInput>
            </View>
            <View style={styles.buttonContinue}>
                <TouchableOpacity 
                    onPress={()=>{
                        axios.post('https://kindicare-api-staging.enouvo.com/api/v1/client/auth/verifyEmail',{
                            verifyEmailCode,
                            email
                        }).then(reponse=>{
                            console.log(reponse.data);
                            navigation.navigate('SignInScreen')
                        }).catch(error=>{
                            console.log(error);
                            console.log(verifyEmailCode)
                        })
                    }}>
                    <Text style={styles.textContinue}>Coutinue</Text>
                </TouchableOpacity>
                </View>
        </View>
    );
};
const styles = StyleSheet.create({
    text:{
        marginTop: 30,
        marginLeft: 20,
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '700',
        color : '#2D1F21'

    },
    textTitle:{
        marginTop: 5,
        marginLeft: 20,
        fontSize:12,
        fontWeight: '400',
        fontStyle: 'normal',
        color : '#7F8789'
    },
    rows:{
        flex: 6,
        flexDirection: 'row',
    },
    TextInputFirst:{
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        //alignSelf: 'center',
        justifyContent:'center',
        padding: 15,
        marginTop: 50,
        marginLeft: 20,
        borderColor: '#D2D1D1',
        borderRadius: 6,
        borderWidth: 1,
        width: 50,
        height: 50,
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 20
    },
    TextInputNext:{
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent:'center',
        padding: 15,
        marginTop: 50,
        marginLeft: 15,
        borderColor: '#D2D1D1',
        borderRadius: 6,
        borderWidth: 1,
        width: 50,
        height: 50,
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 20
    },
    buttonContinue:{
        width: 380,
        alignItems: "center",
        height: 48,
        marginTop: 170,
        marginLeft: 16,
        backgroundColor: '#D2D1D1',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'black'
    },
    textContinue:{
        width: 70,
        height: 22,
        marginTop: 13,
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 14,
        color: '#FFFFFF'
    }
}); 

export default verifyemail;