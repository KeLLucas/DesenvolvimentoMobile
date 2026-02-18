import { StyleSheet, View, Text, Image, } from "react-native";

export default function exer2() {
    return (
        <View style={style.container}>
            <View style={style.card}>
                <Image source={require("../images/perfil.jpg")} style={style.Image}></Image>
                <Text style={style.text}>Vitoria</Text>
                <Text style={style.subtext}>Criadora de conteúdo LifeStyle</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#fffff5",
    justifyContent: "center",
    alignItems: "center",
    },
    card: {
        backgroundColor: "#ffffff", 
        width: 350,
        height: 250,
        borderRadius: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.4,
        shadowRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    Image: {
        borderRadius: 200,
        width:120,
        height:120,
        
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
    },
    subtext: {
        fontSize: 18,
        fontWeight: "100",
    }
})