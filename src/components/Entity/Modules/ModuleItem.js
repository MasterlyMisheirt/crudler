import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
const ModuleItem = ({ modules, onSelect }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <View>
      {modules.map((module) => {
        return (
          <Pressable onPress={onSelect} key={module.ModuleID}>
            <View style={styles.item}>
              <Text style={styles.text}>
                {module.ModuleCode} {module.ModuleName}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
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
