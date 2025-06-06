import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Screen from "../layout/Screen";
import ModuleForm from "../Entity/Modules/ModuleForm";

export const ModuleAddScreen = ({ navigation, route }) => {
  //Initialisations -------------
  const { onAdd } = route.params;

  //State -----------------------
  //Handlers --------------------
  const handleCancel = navigation.goBack;

  //View ------------------------
  return (
    <Screen>
      <ModuleForm onSubmit={onAdd} onCancel={handleCancel} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
