import { useUserStore } from "./trade-journal.store"

type GET_QUERY = {
  queryKey: [string],
  queryFn: () => void
}

export const LoginQuery = (): GET_QUERY => { 
  const { username, password } = useUserStore();
  return {
    queryKey: ["login"],
    queryFn: async () => {
        return await fetch("https://localhost:7090/WeatherForecast")  
    }
  } 
}