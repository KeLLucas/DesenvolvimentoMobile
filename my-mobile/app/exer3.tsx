import { Button } from "@react-navigation/elements"
import { StyleSheet, Text, Pressable, View} from "react-native"

export default function exer3(){
    return (
        <View style={styles.container}>
            <Pressable
                style={({pressed}) => [
                    styles.button,
                    pressed && styles.buttonPressed
                ]}
            >
            {({ pressed }) => (
                <Text style={styles.text}>
                {pressed ? 'Obrigado!' : 'Clique aqui!'}
                </Text>
            )}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: '#8f009c',
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonPressed: {
        backgroundColor: '#8f009c6e', // Cor escura ao pressionar
        transform: [{ scale: 0.98 }], // Efeito de redução leve
    },
      text: { 
        color: 'white', 
        fontWeight: 'bold', 
      },
})
