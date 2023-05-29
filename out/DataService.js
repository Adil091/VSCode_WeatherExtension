"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request-promise");
const apiKey = '323a805c82f4e444c4d6eb02dd3cc09f';
class DataService {
    getWeather(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
            const weatherResponse = JSON.parse(yield request.get({ uri: url }));
            console.log(weatherResponse);
            return {
                description: weatherResponse.weather[0].main,
                temperature: weatherResponse.main.temp,
                city: weatherResponse.name,
                lon: weatherResponse.coord.lon,
                lat: weatherResponse.coord.lat
            };
        });
    }
    getWeatherExtended(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
            return JSON.parse(yield request.get({ uri: url }));
        });
    }
}
exports.DataService = DataService;
//# sourceMappingURL=DataService.js.map