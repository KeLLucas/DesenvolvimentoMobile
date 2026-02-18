import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Título</Text>
      <Text style={styles.subtitle}>Subtitulo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b7bdc0", // Azul claro
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "medium",
    color: "#42bf15"
  }
});
