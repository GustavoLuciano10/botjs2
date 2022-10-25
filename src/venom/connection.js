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
exports.connect = void 0;
const fs = require('fs');
const venom = require('venom-bot');
const buffer_1 = require("buffer");
const bot_1 = require("./bot");
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    venom
        .create('sessionName', (base64Qr, asciiQR, attempts, urlCode) => {
        console.log(asciiQR); // Optional to log the QR in the terminal
        var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (matches.length !== 3) {
            return new Error('Invalid input string');
        }
        const response = {
            type: matches[1],
            data: buffer_1.Buffer.from(matches[2], 'base64')
        };
        var imageBuffer = response;
        require('fs').writeFile('QRVenom.png', imageBuffer['data'], 'binary', function (err) {
            if (err != null) {
                console.log(err);
            }
        });
    }, undefined, { logQR: false })
        .then((client) => {
        (0, bot_1.start)(client);
    })
        .catch((erro) => {
        console.log(erro);
    });
});
exports.connect = connect;
