import { useRouter as useExpoRouter } from "expo-router"

type Router = {
  push: (path: string) => void
  replace: (path: string) => void
  back: () => void
}
export const useRouter: () => Router = useExpoRouter
