import { useRouter as useNextRouter } from "next/navigation"

type Router = {
  push: (path: string) => void
  replace: (path: string) => void
  back: () => void
}
export const useRouter: () => Router = useNextRouter
