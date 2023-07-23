const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const APP_ID = "55bd173803c7b0afad2ecf2f1fd04dba"

class WeatherAPI {

  constructor(userInput) {

    this.userInput = userInput;
    this.weatherAPIURL = new URL(WEATHER_API_BASE_URL);
  }


  buildURL() {

    this.weatherAPIURL.searchParams.append("units", "metric");
    this.weatherAPIURL.searchParams.append("q", this.userInput);
    this.weatherAPIURL.searchParams.append("appid", APP_ID);

    console.log(`Final URL is ${this.weatherAPIURL}`);
  }


  async invokeAPI() {
    try {
      const responseObj = await fetch(this.weatherAPIURL.toString());
      const jsonResponse = await responseObj.json();
    } catch( error ){
      window.alert("No weather found.");
      
    }
    return jsonResponse;
  }


}

export { WeatherAPI }