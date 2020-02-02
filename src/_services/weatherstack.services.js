export const weatherServices = {
    fetchWeather
};

async function fetchWeather() {

    const requestOptions = {
        method: "GET"
    };

    const res = await fetch(process.env.REACT_APP_WEATHER_API, requestOptions);

    if (res.status < 500) {

        return res.json().then(data => {
            return { status: res.status, data };
        });

    } else {
        throw res;
    }
}