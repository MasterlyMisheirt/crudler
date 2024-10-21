import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
import { Button, ButtonTray } from "../UI/Button.js";
import Icons from "../UI/Icons.js";

const defaultModule = {
  ModuleID: Math.floor(100000 + Math.random() * 900000),
  ModuleName: "Individual Project",
  ModuleCode: "CI7446",
  ModuleLevel: 7,
  ModuleLeaderID: 2,
  ModuleLeaderName: "Graeme Jones",
  ModuleImage:
    "https://images.freeimages.com/images/small-previews/411/light-of-technology-1510575.jpg",
};

export const ModuleAddScreen = ({ navigation, route }) => {
  //Initialisations -------------
  const { onAdd } = route.params;
  //State -----------------------
  //Handlers --------------------
  const handleAdd = () => onAdd(defaultModule);
  const handleCancel = navigation.goBack;
  //View ------------------------
  return (
    <Screen>
      <Text>Add Modules</Text>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
        <Button label="Cancel" icon={<Icons.Cancel />} onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
