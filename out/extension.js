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
const vscode = require("vscode");
const DataService_1 = require("./DataService");
let weatherStatusBarItem;
function activate(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const dataService = new DataService_1.DataService();
        console.log('Congratulations, your extension "vspracticeextension" is now active!');
        let getWeather = vscode.commands.registerCommand('extension.getWeather', () => {
            vscode.window.showInputBox({ value: 'please enter city' }).then((city) => __awaiter(this, void 0, void 0, function* () {
                const weather = yield dataService.getWeather(city);
                if (!weatherStatusBarItem) {
                    weatherStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
                }
                weatherStatusBarItem.text = weather.city + ' ' + weather.temperature + ' ' + weather.description;
                weatherStatusBarItem.show();
            }));
        });
        let getWeatherExtended = vscode.commands.registerCommand('extension.getWeatherExtended', () => {
            vscode.window.showInputBox({ value: 'please enter city' }).then((city) => __awaiter(this, void 0, void 0, function* () {
                const extendedWeather = yield dataService.getWeatherExtended(city);
                vscode.window.showInformationMessage(JSON.stringify(extendedWeather));
            }));
        });
        context.subscriptions.push(getWeather, getWeatherExtended);
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map