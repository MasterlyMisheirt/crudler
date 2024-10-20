import { StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import Button from "../../UI/button";
const ModuleView = ({ module }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <View style={styles.container}>
      <FullWidthImage
        source={{ uri: module.ModuleImage }}
        style={styles.image}
      />
      <View style={styles.infoTray}>
        <Text style={styles.boldText}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
        <Text style={styles.text}>Level {module.ModuleLevel}</Text>
        <Text style={styles.Text}>
          {module.ModuleLeaderName}{" "}
          <Text style={styles.dimText}>(Module Leader)</Text>
        </Text>
        <Button label="Modify" />
        <Button label="Delete" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { gap: 15 },
  image: { borderRadius: 3 },
  infoTray: { gap: 5 },
  buttonTray: {},
  text: { fontSize: 16 },
  boldText: { fontSize: 16, fontWeight: "bold" },
  dimText: { color: "grey" },
});
export default ModuleView;
