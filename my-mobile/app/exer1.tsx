import { StyleSheet, Text, View } from "react-native";

export default function Exer1() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu Primeiro AppExpo</Text>
             <Text style={styles.subtitle}>Construindo interfaces no React Native</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#87CEEB",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#ffffff"

    },
    subtitle: {
        fontSize: 20,
        fontWeight: "medium",
        color: "#ffffff"
    }
})