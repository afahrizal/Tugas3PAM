import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';

const Homepage = ({ navigation }) => {
const [keberangkatan, setKeberangkatan] = useState("");
const [tujuan, setTujuan] = useState("");
const [tanggal, setTanggal] = useState("");
  

    return(
        <View style={styles.container}>
            <View style={styles.head}>
              <Feather name="menu" size={24} color="white" />
              <Text style={styles.header}>Hiling.id</Text>
              <FontAwesome5 name="user" size={24} color="white" />
            </View>
            
            <View style={styles.box}>
              <Text style={styles.header2}>Bandara keberangkatan</Text>
              <View style={styles.inputbox}>
                <MaterialIcons name="flight-takeoff" size={24} color="#5CA454" />
                <TextInput
                  style={styles.input}
                  onChangeText={setKeberangkatan}
                  value={keberangkatan}
                  placeholder="Masukkan Lokasi Keberangkatan"
                  selectTextOnFocus={false}
                />
              </View>
              <Text style={styles.header2}>Bandara Tujuan</Text>
              <View style={styles.inputbox}>
                <MaterialIcons name="flight-land" size={24} color="#5CA454" />
                <TextInput
                  style={styles.input}
                  onChangeText={setTujuan}
                  value={tujuan}
                  placeholder="Masukkan Lokasi Tujuan"
                />
              </View>
              <Text style={styles.header2}>Tanggal Keberangkatan</Text>
                <View style={styles.inputbox}>
                    <Fontisto name="date" size={24} color="#5CA454" />
                  <TextInput
                    style={styles.input}
                    onChangeText={setTanggal}
                    value={tanggal}
                    placeholder="Masukkan Tanggal Keberangkatan"
                  />
                </View>
              <TouchableOpacity onPress={() => navigation.navigate('FlightSchedule')}><Text style = {styles.search}
              >Cari</Text></TouchableOpacity>
            </View>
            
            <View style={styles.kotak}>
              <Text style={styles.copyright}>Copyright Akhmad Fahrizal || 120140024</Text>
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width :"100%",
    backgroundColor: '#5CA454',
    overflow: "hidden",
    alignItems: "center",
  },
    head: {
    width: "100%",
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between'
  },
  inputbox: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:10,
    marginhead:10,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:3,
    borderColor: '#E5E5E5',
    
},
header: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    head: 35
},
    search: {
    color : '#ffff',
    width: '100%',
    height: 40,
    margin : 30,
    backgroundColor: "#FF5914",
    fontSize: 20,
    borderRadius: 3,
    alignSelf: "center",
    textAlign: "center",
    fontweight : "Bold"
},
    header2: {
    margin: 5,
    fontWeight : "bold",

},
box: {
    head : 100,
    backgroundColor: 'white',
    margin: "auto",
    width: '90%',
    padding:20,
    borderRadius:10,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 10,
    borderRadius:3,
  },
  kotak: {
    width: "100%",
    flex:1,
    borderRadius:10,
    backgroundColor: '#E5E4E2',
    marginhead : 110,
  },
  copyright: {
    color : '#797979',
    fontWeight: 'bold',
    marginBottom: 40,
    marginhead: 'auto',
    textAlign: 'center',
  }
});

export default Homepage;