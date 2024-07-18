import { FunctionComponent } from "react"
import { StyleSheet, Text, View } from "react-native"

import { useRouter } from "@repo/hooks"
import { Button } from "@repo/ui"

export const DetailScreen: FunctionComponent = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detail</Text>
      <Button onClick={() => router.back()} text={`router.back()`} />
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
