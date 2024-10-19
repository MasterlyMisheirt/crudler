import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const ModuleModifyScreen = () => {
  //Initialisations -------------
  //State -----------------------
  //Handlers --------------------
  //View ------------------------
  return (
    <View style={styles.container}>
      <Text>Sigma Rizzlerssssssss</Text>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ModuleModifyScreen;
