import { FunctionComponent } from "react"
import { StyleSheet, Text, View } from "react-native"

import { useRouter } from "@repo/hooks"
import { Button } from "@repo/ui"

export const HomeScreen: FunctionComponent = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <Button
        onClick={() => router.push("/detail")}
        text={`router.push("/detail")`}
      />
    </View>
  )
}

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
})
