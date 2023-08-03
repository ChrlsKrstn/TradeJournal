import { useUserStore } from "./trade-journal.store"
export const LoginQuery = {
    queryKey: ["login"],
    queryFn: async () => {
        return await fetch("https://localhost:7090/WeatherForecast")  
    }
}