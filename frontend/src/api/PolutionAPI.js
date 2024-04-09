import { key } from "./APIKey";
class PolutionAPI {
  constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseURL = 'http://api.openweathermap.org/data/2.5/air_pollution';
      this.forecastURL = 'http://api.openweathermap.org/data/2.5/air_pollution/forecast';
      this.historicalURL = 'http://api.openweathermap.org/data/2.5/air_pollution/history';
  }

  async getCurrentAirPollution(lat, lon) {
      const url = `${this.baseURL}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;

      try {
          const response = await fetch(url);
          const data = await response.json();
          return data;
      } catch (error) {
          console.error('Error fetching air pollution data:', error);
          return null;
      }
  }

  async getForecastAirPollution(lat, lon) {
      const url = `${this.forecastURL}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;

      try {
          const response = await fetch(url);
          const data = await response.json();
          return data;
      } catch (error) {
          console.error('Error fetching forecast air pollution data:', error);
          return null;
      }
  }

  async getHistoricalAirPollution(lat, lon, start, end) {
      const url = `${this.historicalURL}?lat=${lat}&lon=${lon}&start=${start}&end=${end}&appid=${this.apiKey}`;

      try {
          const response = await fetch(url);
          const data = await response.json();
          return data;
      } catch (error) {
          console.error('Error fetching historical air pollution data:', error);
          return null;
      }
  }
}

export const polutionAPI = new PolutionAPI(key);
