import { StyleSheet, Text, View } from "react-native";

import { Button } from "@repo/ui";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <Button
        onClick={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
        text="Boop"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
