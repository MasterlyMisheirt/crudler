import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../../data/modules.js";
import ModuleItem from "../Entity/Modules/ModuleItem.js";

export const ModuleListScreen = () => {
  //Initialisations -------------
  let modules = initialModules;
  //State -----------------------
  //Handlers --------------------
  const handleDelete = (module) =>
    (modules = modules.filter((item) => item.ModuleID !== module.ModuleID));
  //View ------------------------
  return (
    <Screen>
      <ModuleItem modules={modules} onSelect={handleDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
