import { WeatherAPI } from "./weatherapi.js";

function testBuildURL(){

  const weatherAPI = new WeatherAPI("Pune");

  weatherAPI.buildURL();

}

async function testInvokeAPI(){

  const weatherAPI = new WeatherAPI("Pune");
  weatherAPI.buildURL();

  const jsonResponse = await weatherAPI.invokeAPI();
  console.log(jsonResponse);
}

// testBuildURL();

testInvokeAPI();