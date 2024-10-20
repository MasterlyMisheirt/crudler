import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";
import ModuleView from "../Entity/Modules/ModuleView";

export const ModuleViewScreen = ({ navigation, route }) => {
  //Initialisations -------------
  const { module } = route.params;
  //State -----------------------
  //Handlers --------------------
  //View ------------------------
  return (
    <Screen>
      <ModuleView module={module} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
