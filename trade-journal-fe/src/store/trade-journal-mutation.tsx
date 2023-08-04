  
  export const loginMutation = (formdata: string) => {
    return fetch("https://localhost:7090/WeatherForecast", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formdata
    }) 
    .then(result => result.json());
}