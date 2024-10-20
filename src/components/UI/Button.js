import { Pressable, StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";

export const Button = ({ label, onClick }) => {
  //Initialisations -------------
  //State -----------------------
  //Handlers --------------------
  //View ------------------------
  return (
    <Pressable onPress={onClick} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "grey",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    flex: 1,
  },
  label: {
    fontSize: 16,
  },
});
export default Button;
