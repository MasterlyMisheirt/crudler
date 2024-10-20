import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../../data/modules.js";
import ModuleItem from "../Entity/Modules/ModuleItem.js";

export const ModuleListScreen = () => {
  //Initialisations -------------
  const modules = initialModules;
  //State -----------------------
  //Handlers --------------------
  const handleSelect = () => alert("Item selected");
  //View ------------------------
  return (
    <Screen>
      <ScrollView style={styles.container}>
        {modules.map((module) => {
          return <ModuleItem module={module} onSelect={handleSelect} />;
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
