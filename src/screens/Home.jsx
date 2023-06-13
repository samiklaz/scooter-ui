import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from "@expo-google-fonts/montserrat"
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = (props) => {
    let [FontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    });

  return (
    <View style={styles.container}>
      <Image source={require('../img/1.png')} style={styles.img} />
      <Text style={styles.title}>Asuquo Scooters</Text>
      <Text style={styles.detail}>
        With an updated motor, and integrated anti-theft tech the Asuquo Scooters are custom-tuned for the ultimate riding experience
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Detail")}>
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212"
    },
    img: {
        height: "50%",
        width: "120%",
        resizeMode: "contain",
    },
    title: {
        color: "#fff",
        fontFamily: "Montserrat_700Bold",
        fontSize: 30,
        marginTop: 20
    },
    detail: {
        color: "#fff",
        fontFamily: "Montserrat_400Regular",
        fontSize: 18,
        textAlign: "center",
        paddingHorizontal: 20,
        lineHeight: 30,
        marginTop: 30
    },
    btn: {
        marginTop: 80,
        backgroundColor: "#E2443B",
        paddingHorizontal: 140,
        paddingVertical: 10,
        borderRadius: 30
    },
    text: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: 20,
      color: "#fff",
    },
})