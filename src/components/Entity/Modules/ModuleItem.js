import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
const ModuleItem = ({ module, onSelect }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <Pressable key={module.ModuleID} onPress={onSelect}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  text: {
    fontSize: 16,
  },
});
export default ModuleItem;
