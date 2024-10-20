import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import initialModules from "../../data/modules.js";
import ModuleItem from "../Entity/Modules/ModuleItem.js";

export const ModuleListScreen = () => {
  //Initialisations -------------
  let modules = initialModules;
  //State -----------------------
  //Handlers --------------------
  const handleDelete = (module) => {
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
      <ScrollView style={styles.container}>
        {modules.map((module) => {
          return <ModuleItem module={module} onSelect={handleDelete} />;
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
