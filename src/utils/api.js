const api = 'http://localhost:5000';

const forecast = (address) => fetch(`${api}/?search=${address}`)
    .then(response => response.json())
    .then(data => {
        if (data.error)
            throw data.error;
        return {
            place: data.place,
            forecastData: data.forecastData,
        }
    })

export default forecast;