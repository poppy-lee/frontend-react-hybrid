import { useRouter as useSolitoRouter } from "solito/navigation"

type Router = {
  push: (path: string) => void
  replace: (path: string) => void
  back: () => void
}
export const useRouter: () => Router = useSolitoRouter
