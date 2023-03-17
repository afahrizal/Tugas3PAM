import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';

const Jadwal = [
  {
    id: '1',
    departure: 'Lampung',
    destination: 'Amerika Serikat',
    ariline: 'Ryan Air',
    time : '18 Maret 2023, 08:00',
  },
  {
    id: '2',
    departure: 'Jakarta',
    destination: 'Bali',
    ariline: 'Air Asia',
    time : '28 Maret 2023, 13:00',
  },
  {
    id: '3',
    departure: 'Surabaya',
    destination: 'Lampung',
    ariline: 'Garuda Air',
    time : '13 Maret 2023, 10:00',
  },
  {
    id: '4',
    departure: 'Padang',
    destination: 'Singapura',
    ariline: 'Air Asia',
    time : '3 Mei 2023, 19:00',
  },
  {
    id: '5',
    departure: 'Jakarta',
    destination: 'Kalimantan',
    ariline: 'Java Air',
    time : '9 Mei 2023, 09:00',
  }

];


const FlightSchedule = ({ navigation }) => {
  const renderItem = ({ item }) => (
  <View style={styles.data}>
    <Text style={styles.departure}>{item.departure}   -   {item.destination}</Text>
    <View style={styles.time}>
      <MaterialIcons name="flight" size={24} color="#5CA454" />
      <Text style={styles.airline}>{item.ariline}</Text>
      <Text style={styles.date}>{item.time}</Text>
    </View>    
  </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.heading}>Hiling.id</Text>
            <FontAwesome5 name="user" size={24} color="white" />
          </View>
          <Text style={styles.heading2}>Hasil Pencarian Penerbangan</Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={Jadwal}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <Text style={styles.copyright}>Copyright Akhmad Fahrizal || 120140024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E4E2',
  },
  header:{
    width:'100%',
    backgroundColor: '#5CA454',
    padding:20,
    
  },
  heading: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    
  },
  heading2: {
    color: '#ffff',
    textAlign: 'center',
    top : 20,
  },
  top: {
    top : 20,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
  },
  Image: {
    width:10,
  },
  data: {
    backgroundColor: '#ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  title: {
    fontSize: 32,
  },
  time:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  airline:{
    marginLeft:-80,
    fontSize:20,
    fontWeight: "bold",
  },
  date:{
    color:'blue',
  },
  copyright: {
    color : '#797979',
    fontWeight: 'bold',
    marginBottom: 20,
    padding:20,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default FlightSchedule;