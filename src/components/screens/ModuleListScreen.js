import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../../data/modules.js";
import ModuleItem from "../Entity/Modules/ModuleItem.js";

export const ModuleListScreen = ({ navigation }) => {
  //Initialisations -------------
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state.",
  ]);
  //State -----------------------
  const [modules, setModules] = useState(initialModules);
  //Handlers --------------------
  const handleDelete = (module) => {
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
    console.log(`Module ${module.ModuleCode} deleted`);
  };

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const handleSelect = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete });
  //View ------------------------
  return (
    <Screen>
      <ModuleItem modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
