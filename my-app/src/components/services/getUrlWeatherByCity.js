import { api_key, url_base_weather } from "../../contants/api_url";

const getUrlWeatherByCity = city => {
    return `${url_base_weather}?q=${city}&appid=${api_key}&units=metric`;
}

export default getUrlWeatherByCity;