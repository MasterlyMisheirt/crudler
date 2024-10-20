import { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../../data/modules.js";
import ModuleItem from "../Entity/Modules/ModuleItem.js";

export const ModuleListScreen = () => {
  //Initialisations -------------
  //State -----------------------
  const [modules, setModules] = useState(initialModules);
  //Handlers --------------------
  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
  //View ------------------------
  return (
    <Screen>
      <ModuleItem modules={modules} onSelect={handleDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
