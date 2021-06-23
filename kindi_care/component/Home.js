import * as React from 'react';
import { useState, useEffect } from "react";
import {Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, FlatList, ImageBackground,  Dimensions, SectionList} from 'react-native';
import axios from 'react-native-axios'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Geolocation from '@react-native-community/geolocation';
import searchIcon from "../logo/search.png"
import vector from "../logo/Vector.png"
import {Icon} from 'react-native-elements'
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import picHome from "../logo/picHome.png"
import icon from "../logo/icon.png"

const windowWidth = Dimensions.get('window').width;
export default Home = ({navigation}) => {
    const { entries, activeSlide } = useState();
    // const [currentLongitude, setCurrentLongitude] = useState('...');
    // const [currentLatitude, setCurrentLatitude] = useState('...');
    // const[Longitude, setLongitude] = useState(0);
    // const [Latitude, setLatitude] = useState(0);
    // const [nearBy, setNearBy] = useState([]);
    // Geolocation.getCurrentPosition(data=>{
    //   setLatitude(data.coords.latitude)
    //   setLongitude(data.coords.longitude)
    // })
    // const getAll = async()=>{
    //     Geolocation.getCurrentPosition((data)=>{
    //         const url = 'http://kindicare-api-staging.enouvo.com/api/v1/client/centres?limit=4&offset=4&longitude=151.2070481&latitude=-33.8615324';
    //         axios
    //             .get(url)
    //             .then(reponse=>{
    //               console.log(reponse.data);
    //               setNearBy(reponse.data.results)
    //             //   console.log(url)
    //             })
    //             .catch(error=>{
    //               console.log(error.message);
    //               console.log(url)
    //             });
    //     });
    // };
    // const getRecent = async() =>{
    //     const url = `http://kindicare-api-staging.enouvo.com/api/v1/client/centres/recent?limit=10&offset=4`;
    //     axios
    //     .get(url)
    //     .then(reponse=>{
    //       console.log(reponse.data);
    //       setNearBy(reponse.data.results)
    //     //   console.log(url)
    //     })
    //     .catch(error=>{
    //       console.log(error.message);
    //       console.log(url)
    //     });
    // }
    // useEffect(()=>{
    // //   getAll();
    //   getRecent();
    // });
    
    // const [info, setInfo] = useState(0)
    // Geolocation.watchPosition(data=>{
    //     setInfo(data.coords.latitude)
    // })
    renderItem = ({item, index}) =>{
        return(
            <View>
                <ImageBackground 
                style = {styles.image}
                source={{uri: item.url}}
                >
                    <View style={styles.rectangeRating}>
                        <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.row}>
                        <Text>
                            <Text style={styles.textDistance}>{item.distance}</Text>
                            <Text style={styles.textdot}> . </Text>
                            <Text style={styles.textName}>{item.name}</Text>
                        </Text>
                </View>
            </View>
        )
    } 
    
    const data = [
        {
            id : 1,
            rate: 9.8,
            rating: 'Top Rate',
            url : 'https://s3-alpha-sig.figma.com/img/452b/7713/7b53476fec8986a8d76704eba90a0da3?Expires=1625443200&Signature=UbjUvwtwyhzfNraW9oXqiub1~H2jBtsX-6oKIX4WwGTQSwM1KVUsA7KAkIM6FtKaA9DnXqxFjt3T3wo7p-iBG~KGF8HKzkhHYQduoN2d0e0v9IcSrrDHqiZ~IXG0nOlSLXo6MtBWFo5i4hBQN0wq2h1gBLCUB29f-M3ppAkmZOEZTJ0Db0woZPP0k9OIcVEtwKznyNZzSWq2OOXF9hBhz8s~67GxILbIq0sRRhJ82QlsMG~4dQqjxD914j7EZR1G-CawSZGXSXVb2pkLK4QhT0blm-FZ0KJUkDjW7E50P8AAViDhWLFoBnzmRNu05npjGdIljn8A6wI1u-PCtmrbxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            name : 'Bribie Island Community Kindegarten',
            price: '$140.00' 
        },
        {
            id : 2,
            rate: 9.8,
            rating: 'Middle Rate',
            url : 'https://s3-alpha-sig.figma.com/img/452b/7713/7b53476fec8986a8d76704eba90a0da3?Expires=1625443200&Signature=UbjUvwtwyhzfNraW9oXqiub1~H2jBtsX-6oKIX4WwGTQSwM1KVUsA7KAkIM6FtKaA9DnXqxFjt3T3wo7p-iBG~KGF8HKzkhHYQduoN2d0e0v9IcSrrDHqiZ~IXG0nOlSLXo6MtBWFo5i4hBQN0wq2h1gBLCUB29f-M3ppAkmZOEZTJ0Db0woZPP0k9OIcVEtwKznyNZzSWq2OOXF9hBhz8s~67GxILbIq0sRRhJ82QlsMG~4dQqjxD914j7EZR1G-CawSZGXSXVb2pkLK4QhT0blm-FZ0KJUkDjW7E50P8AAViDhWLFoBnzmRNu05npjGdIljn8A6wI1u-PCtmrbxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            name : 'Bribie Island Community Kindegarten',
            price: '$40.00' 
        },
        {
            id : 3,
            rate: 9.8,
            rating: 'Top Rate',
            url : 'https://s3-alpha-sig.figma.com/img/452b/7713/7b53476fec8986a8d76704eba90a0da3?Expires=1625443200&Signature=UbjUvwtwyhzfNraW9oXqiub1~H2jBtsX-6oKIX4WwGTQSwM1KVUsA7KAkIM6FtKaA9DnXqxFjt3T3wo7p-iBG~KGF8HKzkhHYQduoN2d0e0v9IcSrrDHqiZ~IXG0nOlSLXo6MtBWFo5i4hBQN0wq2h1gBLCUB29f-M3ppAkmZOEZTJ0Db0woZPP0k9OIcVEtwKznyNZzSWq2OOXF9hBhz8s~67GxILbIq0sRRhJ82QlsMG~4dQqjxD914j7EZR1G-CawSZGXSXVb2pkLK4QhT0blm-FZ0KJUkDjW7E50P8AAViDhWLFoBnzmRNu05npjGdIljn8A6wI1u-PCtmrbxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            name : 'Bribie Island Community Kindegarten',
            price: '$540.00' 
        },
        
    ]
    
    const nearBy1 =[
        {
            id: 1,
            data: [{
                rating: 9.8,
                url : 'https://s3-alpha-sig.figma.com/img/52d8/b30e/11ab522f5a77d7f77a94170b8057fd5d?Expires=1625443200&Signature=LmN5goMImGRcKioCT4Zp97kZdSt6V65pV4MZJ4~HIn3VnmUFws5L31UbwAAajt4YQdvCmyjNFh7JNfvPwMQDWRrX8lX6ATpuKhqTDBbULvvg-SXZvHsP4qZvxGIw7zzenV3T~D3~e~WiZki1BNwArLO1pQkB0FsQT145DCA8CmGmiy-tgWLxVLzLzOWoUjto4O54~-XILU4vEmy6a0htKdpXdCThJIcfLZ0AzW7a4Q6xH~-BdhW6ZcaSfBM9oG2zUOJwvodHSPnU2bfZ~35dnF5s~gQdzO8EhubpfRGgMIA5RjZ-aRliwY6nhyTvuU7tsHpwWG9hhUAthzoRqDDgSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                distance: '2.3km',
                name:'Melbourne City Childcare & Kindergarten'
            }]

        },
        {
            id: 2,
            data: [{
                rating: 9.8,
                url : 'https://s3-alpha-sig.figma.com/img/52d8/b30e/11ab522f5a77d7f77a94170b8057fd5d?Expires=1625443200&Signature=LmN5goMImGRcKioCT4Zp97kZdSt6V65pV4MZJ4~HIn3VnmUFws5L31UbwAAajt4YQdvCmyjNFh7JNfvPwMQDWRrX8lX6ATpuKhqTDBbULvvg-SXZvHsP4qZvxGIw7zzenV3T~D3~e~WiZki1BNwArLO1pQkB0FsQT145DCA8CmGmiy-tgWLxVLzLzOWoUjto4O54~-XILU4vEmy6a0htKdpXdCThJIcfLZ0AzW7a4Q6xH~-BdhW6ZcaSfBM9oG2zUOJwvodHSPnU2bfZ~35dnF5s~gQdzO8EhubpfRGgMIA5RjZ-aRliwY6nhyTvuU7tsHpwWG9hhUAthzoRqDDgSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                distance: '2.3km',
                name:'Melbourne City Childcare & Kindergarten'
            }]

        },
        {
            id: 3,
            data: [{
                rating: 9.8,
                url : 'https://s3-alpha-sig.figma.com/img/52d8/b30e/11ab522f5a77d7f77a94170b8057fd5d?Expires=1625443200&Signature=LmN5goMImGRcKioCT4Zp97kZdSt6V65pV4MZJ4~HIn3VnmUFws5L31UbwAAajt4YQdvCmyjNFh7JNfvPwMQDWRrX8lX6ATpuKhqTDBbULvvg-SXZvHsP4qZvxGIw7zzenV3T~D3~e~WiZki1BNwArLO1pQkB0FsQT145DCA8CmGmiy-tgWLxVLzLzOWoUjto4O54~-XILU4vEmy6a0htKdpXdCThJIcfLZ0AzW7a4Q6xH~-BdhW6ZcaSfBM9oG2zUOJwvodHSPnU2bfZ~35dnF5s~gQdzO8EhubpfRGgMIA5RjZ-aRliwY6nhyTvuU7tsHpwWG9hhUAthzoRqDDgSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                distance: '2.3km',
                name:'Melbourne City Childcare & Kindergarten'
            }]
        },
        {
            id: 4,
            data: [{
                rating: 9.8,
                url : 'https://s3-alpha-sig.figma.com/img/52d8/b30e/11ab522f5a77d7f77a94170b8057fd5d?Expires=1625443200&Signature=LmN5goMImGRcKioCT4Zp97kZdSt6V65pV4MZJ4~HIn3VnmUFws5L31UbwAAajt4YQdvCmyjNFh7JNfvPwMQDWRrX8lX6ATpuKhqTDBbULvvg-SXZvHsP4qZvxGIw7zzenV3T~D3~e~WiZki1BNwArLO1pQkB0FsQT145DCA8CmGmiy-tgWLxVLzLzOWoUjto4O54~-XILU4vEmy6a0htKdpXdCThJIcfLZ0AzW7a4Q6xH~-BdhW6ZcaSfBM9oG2zUOJwvodHSPnU2bfZ~35dnF5s~gQdzO8EhubpfRGgMIA5RjZ-aRliwY6nhyTvuU7tsHpwWG9hhUAthzoRqDDgSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                distance: '2.3km',
                name:'Melbourne City Childcare & Kindergarten'
            }]
        },
        {
            id: 5,
            data: [{
                rating: 9.8,
                url : 'https://s3-alpha-sig.figma.com/img/52d8/b30e/11ab522f5a77d7f77a94170b8057fd5d?Expires=1625443200&Signature=LmN5goMImGRcKioCT4Zp97kZdSt6V65pV4MZJ4~HIn3VnmUFws5L31UbwAAajt4YQdvCmyjNFh7JNfvPwMQDWRrX8lX6ATpuKhqTDBbULvvg-SXZvHsP4qZvxGIw7zzenV3T~D3~e~WiZki1BNwArLO1pQkB0FsQT145DCA8CmGmiy-tgWLxVLzLzOWoUjto4O54~-XILU4vEmy6a0htKdpXdCThJIcfLZ0AzW7a4Q6xH~-BdhW6ZcaSfBM9oG2zUOJwvodHSPnU2bfZ~35dnF5s~gQdzO8EhubpfRGgMIA5RjZ-aRliwY6nhyTvuU7tsHpwWG9hhUAthzoRqDDgSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                distance: '2.3km',
                name:'Melbourne City Childcare & Kindergarten'
            }]

        },
        {
            id: 6,
            data: [{
                rating: 9.8,
                url : 'https://s3-alpha-sig.figma.com/img/52d8/b30e/11ab522f5a77d7f77a94170b8057fd5d?Expires=1625443200&Signature=LmN5goMImGRcKioCT4Zp97kZdSt6V65pV4MZJ4~HIn3VnmUFws5L31UbwAAajt4YQdvCmyjNFh7JNfvPwMQDWRrX8lX6ATpuKhqTDBbULvvg-SXZvHsP4qZvxGIw7zzenV3T~D3~e~WiZki1BNwArLO1pQkB0FsQT145DCA8CmGmiy-tgWLxVLzLzOWoUjto4O54~-XILU4vEmy6a0htKdpXdCThJIcfLZ0AzW7a4Q6xH~-BdhW6ZcaSfBM9oG2zUOJwvodHSPnU2bfZ~35dnF5s~gQdzO8EhubpfRGgMIA5RjZ-aRliwY6nhyTvuU7tsHpwWG9hhUAthzoRqDDgSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                distance: '2.3km',
                name:'Melbourne City Childcare & Kindergarten'
            }]

        },
    ]
    const nearBy2 =[
        {
            id: 1,
            rating: 9.8,
            url : 'https://s3-alpha-sig.figma.com/img/52d8/b30e/11ab522f5a77d7f77a94170b8057fd5d?Expires=1625443200&Signature=LmN5goMImGRcKioCT4Zp97kZdSt6V65pV4MZJ4~HIn3VnmUFws5L31UbwAAajt4YQdvCmyjNFh7JNfvPwMQDWRrX8lX6ATpuKhqTDBbULvvg-SXZvHsP4qZvxGIw7zzenV3T~D3~e~WiZki1BNwArLO1pQkB0FsQT145DCA8CmGmiy-tgWLxVLzLzOWoUjto4O54~-XILU4vEmy6a0htKdpXdCThJIcfLZ0AzW7a4Q6xH~-BdhW6ZcaSfBM9oG2zUOJwvodHSPnU2bfZ~35dnF5s~gQdzO8EhubpfRGgMIA5RjZ-aRliwY6nhyTvuU7tsHpwWG9hhUAthzoRqDDgSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            distance: '2.3km',
            name:'Melbourne City Childcare & Kindergarten'
        },
        {
            id: 2,
            rating: 9.8,
            url : 'https://s3-alpha-sig.figma.com/img/52d8/b30e/11ab522f5a77d7f77a94170b8057fd5d?Expires=1625443200&Signature=LmN5goMImGRcKioCT4Zp97kZdSt6V65pV4MZJ4~HIn3VnmUFws5L31UbwAAajt4YQdvCmyjNFh7JNfvPwMQDWRrX8lX6ATpuKhqTDBbULvvg-SXZvHsP4qZvxGIw7zzenV3T~D3~e~WiZki1BNwArLO1pQkB0FsQT145DCA8CmGmiy-tgWLxVLzLzOWoUjto4O54~-XILU4vEmy6a0htKdpXdCThJIcfLZ0AzW7a4Q6xH~-BdhW6ZcaSfBM9oG2zUOJwvodHSPnU2bfZ~35dnF5s~gQdzO8EhubpfRGgMIA5RjZ-aRliwY6nhyTvuU7tsHpwWG9hhUAthzoRqDDgSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            distance: '2.3km',
            name:'Melbourne City Childcare & Kindergarten'
        },
        {
            id: 3,
            rating: 9.8,
            url : 'https://s3-alpha-sig.figma.com/img/52d8/b30e/11ab522f5a77d7f77a94170b8057fd5d?Expires=1625443200&Signature=LmN5goMImGRcKioCT4Zp97kZdSt6V65pV4MZJ4~HIn3VnmUFws5L31UbwAAajt4YQdvCmyjNFh7JNfvPwMQDWRrX8lX6ATpuKhqTDBbULvvg-SXZvHsP4qZvxGIw7zzenV3T~D3~e~WiZki1BNwArLO1pQkB0FsQT145DCA8CmGmiy-tgWLxVLzLzOWoUjto4O54~-XILU4vEmy6a0htKdpXdCThJIcfLZ0AzW7a4Q6xH~-BdhW6ZcaSfBM9oG2zUOJwvodHSPnU2bfZ~35dnF5s~gQdzO8EhubpfRGgMIA5RjZ-aRliwY6nhyTvuU7tsHpwWG9hhUAthzoRqDDgSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            distance: '2.3km',
            name:'Melbourne City Childcare & Kindergarten'
        },
        {
            id: 4,
            rating: 9.8,
            url : 'https://s3-alpha-sig.figma.com/img/52d8/b30e/11ab522f5a77d7f77a94170b8057fd5d?Expires=1625443200&Signature=LmN5goMImGRcKioCT4Zp97kZdSt6V65pV4MZJ4~HIn3VnmUFws5L31UbwAAajt4YQdvCmyjNFh7JNfvPwMQDWRrX8lX6ATpuKhqTDBbULvvg-SXZvHsP4qZvxGIw7zzenV3T~D3~e~WiZki1BNwArLO1pQkB0FsQT145DCA8CmGmiy-tgWLxVLzLzOWoUjto4O54~-XILU4vEmy6a0htKdpXdCThJIcfLZ0AzW7a4Q6xH~-BdhW6ZcaSfBM9oG2zUOJwvodHSPnU2bfZ~35dnF5s~gQdzO8EhubpfRGgMIA5RjZ-aRliwY6nhyTvuU7tsHpwWG9hhUAthzoRqDDgSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            distance: '2.3km',
            name:'Melbourne City Childcare & Kindergarten'
        },
        {
            id: 5,
            rating: 9.8,
            url : 'https://s3-alpha-sig.figma.com/img/52d8/b30e/11ab522f5a77d7f77a94170b8057fd5d?Expires=1625443200&Signature=LmN5goMImGRcKioCT4Zp97kZdSt6V65pV4MZJ4~HIn3VnmUFws5L31UbwAAajt4YQdvCmyjNFh7JNfvPwMQDWRrX8lX6ATpuKhqTDBbULvvg-SXZvHsP4qZvxGIw7zzenV3T~D3~e~WiZki1BNwArLO1pQkB0FsQT145DCA8CmGmiy-tgWLxVLzLzOWoUjto4O54~-XILU4vEmy6a0htKdpXdCThJIcfLZ0AzW7a4Q6xH~-BdhW6ZcaSfBM9oG2zUOJwvodHSPnU2bfZ~35dnF5s~gQdzO8EhubpfRGgMIA5RjZ-aRliwY6nhyTvuU7tsHpwWG9hhUAthzoRqDDgSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            distance: '2.3km',
            name:'Melbourne City Childcare & Kindergarten'
        },
        {
            id: 6,
            rating: 9.8,
            url : 'https://s3-alpha-sig.figma.com/img/52d8/b30e/11ab522f5a77d7f77a94170b8057fd5d?Expires=1625443200&Signature=LmN5goMImGRcKioCT4Zp97kZdSt6V65pV4MZJ4~HIn3VnmUFws5L31UbwAAajt4YQdvCmyjNFh7JNfvPwMQDWRrX8lX6ATpuKhqTDBbULvvg-SXZvHsP4qZvxGIw7zzenV3T~D3~e~WiZki1BNwArLO1pQkB0FsQT145DCA8CmGmiy-tgWLxVLzLzOWoUjto4O54~-XILU4vEmy6a0htKdpXdCThJIcfLZ0AzW7a4Q6xH~-BdhW6ZcaSfBM9oG2zUOJwvodHSPnU2bfZ~35dnF5s~gQdzO8EhubpfRGgMIA5RjZ-aRliwY6nhyTvuU7tsHpwWG9hhUAthzoRqDDgSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            distance: '2.3km',
            name:'Melbourne City Childcare & Kindergarten'
        },
    ]

    _renderItem = ({item,index}) =>{
        return(
            <View style={styles.data}>
                <ImageBackground
                style={{width: windowWidth - 42, height: 105,}}
                imageStyle={{borderTopLeftRadius: 4, borderTopRightRadius: 4}}
                source ={{uri: item.url}}>
                    <View style={styles.rectangeRating}>
                        <Text style={styles.rating}>{item.rate}</Text>
                    </View>
                    <View style={styles.rectangeRate}>
                        <Text style={styles.rate}>{item.rating}</Text>
                    </View>
                </ImageBackground>
                <View style={{flex: 2, flexDirection: 'row'}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </View>
        )
    }
       
    return (
        <ScrollView>
            <View style={styles.header}>
                <View>
                    <Carousel
                        data={data}
                        sliderWidth={500}
                        itemWidth={500}
                        renderItem={_renderItem}>
                    </Carousel>
                </View>
            </View>
            <View style={{flex: 3, flexDirection: 'row'}}>
                <Text style={{width: 58, height: 20, marginTop: 20, marginLeft: 16, fontWeight: '700', fontStyle: 'normal', fontSize: 16,}}>Near By</Text>
                <Text style={{width: 48, height: 15, marginTop: 20, marginLeft: 250, fontWeight: '700', fontStyle: 'normal', fontSize: 12, color: '#DB147F'}}>View All</Text>
                <Image source ={icon} 
                       style={{marginTop: 20, marginLeft: 8.5}}> 
                </Image>
            </View>
            <FlatList
                data={nearBy2}
                renderItem = {renderItem}
                keyExtractor={item => `key-${item.id}`}
                horizontal ={false}
                numColumns ={2}
            >
            </FlatList>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ff1493',
        height: 200,
        width: windowWidth,
    },
    data:{
        width: windowWidth - 42,
        height: 160,
        marginTop: 20,
        marginLeft: 21,
        borderRadius: 4,
        borderBottomColor: '#FFFFFF',
        backgroundColor: '#FFFFFF'

    },
    vectors:{
        width: 40,
        height: 40,
        marginTop:20,
        marginLeft:16,
        borderRadius:6,
        color: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D2D1D1',
        backgroundColor: '#FFFFFF'
    },
    image:{
        width:183,
        height:100,
        marginLeft:16,
        marginTop: 10
    },
    rectangeRating:{
        width: 26,
        height: 26,
        marginLeft: 8,
        borderColor: '#ff1493',
        borderRadius: 6,
        borderWidth: 1,
        marginTop: 8,
        backgroundColor: '#ff1493',
       justifyContent: 'space-between',
       alignItems: 'center'
       
    },
    rating:{
        color: '#FFFFFF',
        fontWeight: '700',
        fontStyle : 'normal',
        fontSize: 14,

    },
    rectangeRate:{
        width: 71,
        height: 24,
        marginLeft: 8,
        borderColor: '#ff1493',
        borderRadius: 4,
        borderWidth: 1,
        marginTop: 37,
        backgroundColor: '#ff1493',
        justifyContent: 'space-between',
        alignItems: 'center'
       
    },
    rate:{
        color: '#FFFFFF',
        fontWeight: '700',
        fontStyle : 'normal',
        fontSize: 14,

    },
    name:{
        width: 159,
        height: 36,
        marginTop: 10,
        marginLeft: 8,
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize:   12,
        color: '#DB147F'
    },
    price:{
        marginLeft: 130,
        marginTop: 10,
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize:   12,
        color: '#DB147F'
    },
    row:{
        width: 183,
        marginLeft: 16
    },
    textDistance:{
        color : '#ff1493',
        fontStyle: 'normal',
        fontSize: 12,
        fontWeight: '700',
        marginTop: 5,
    },
    textdot:{
        color : '#ff1493',
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -10,
    },
    textName:{
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 12,
        marginTop: 5
    }
    
});
