import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../../data/modules.js";
import ModuleItem from "../Entity/Modules/ModuleItem.js";

export const ModuleListScreen = () => {
  //Initialisations -------------
  let modules = initialModules;
  //State -----------------------
  //Handlers --------------------
  const handleSelect = (module) => alert(`Item ${module.ModuleCode} selected`);
  const handleDelete = (module) => {
    console.log(module.ModuleCode);
    modules = modules.filter((item) => {
      if (item.ModuleID !== module.ModuleID) return true;
      else return false;
    });
    console.log(
      `After deleting ${module.ModuleCode}, the array modules has length ${modules.length}`
    );
  };
  //View ------------------------
  return (
    <Screen>
      <ModuleItem modules={modules} onSelect={handleDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
