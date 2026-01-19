import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Calculadora </Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.textInput}
        value={numero1}
        placeholder="Ingrese el primer numero"
        onChangeText={(txt) => {
          setNumero1(parseInt(txt));
        }}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        value={numero2}
        placeholder="Ingrese el segundo numero"
        onChangeText={(txt) => {
          setNumero2(parseInt(txt));
        }}
      ></TextInput>
      <View
        style={{
          height: 20,
        }}
      ></View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button
          title="Sumar"
          onPress={() => {
            setResultado(numero1 + numero2);
          }}
        ></Button>

        <Button
          title="Restar"
          onPress={() => {
            setResultado(numero1 - numero2);
          }}
        ></Button>
        <Button
          title="Multiplicar"
          onPress={() => {
            setResultado(numero1 * numero2);
          }}
        ></Button>
      </View>
      <Text>Resultado: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
    width: 200,
  },
});
