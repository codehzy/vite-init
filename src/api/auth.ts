import { useStorage } from '@/view/hooks/useStorage'

export const getToken = () => {
  const { nice } = useStorage()
  return nice
}
