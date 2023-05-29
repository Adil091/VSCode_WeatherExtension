
import * as vscode from 'vscode';
import { DataService } from './DataService';

let weatherStatusBarItem: vscode.StatusBarItem;

export async function activate(context: vscode.ExtensionContext) {

	const dataService = new DataService();


	console.log('Congratulations, your extension "vspracticeextension" is now active!');


	let getWeather = vscode.commands.registerCommand('extension.getWeather', () => {

		vscode.window.showInputBox({ value: 'please enter city' }).then(async city => {
			const weather = await dataService.getWeather(city);
			if (!weatherStatusBarItem) {
				weatherStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
			}

			weatherStatusBarItem.text = weather.city + ' ' + weather.temperature + ' ' + weather.description;
			weatherStatusBarItem.show();
		});
	});

	let getWeatherExtended = vscode.commands.registerCommand('extension.getWeatherExtended', () => {
		vscode.window.showInputBox({ value: 'please enter city' }).then(async city => {
			const extendedWeather = await dataService.getWeatherExtended(city);
			vscode.window.showInformationMessage(JSON.stringify(extendedWeather));
		});

	});

	context.subscriptions.push(getWeather, getWeatherExtended);
}


export function deactivate() { }
