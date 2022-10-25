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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const functions_1 = require("./functions");
const axios = require('axios');
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    global.socket = yield (0, connection_1.connect)();
    global.socket.ev.on("messages.upsert", (message) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        const [webMessage] = message.messages;
        try {
            if (!((_a = webMessage.key) === null || _a === void 0 ? void 0 : _a.fromMe) && ((_b = webMessage.message) === null || _b === void 0 ? void 0 : _b.conversation) !== undefined && ((_c = webMessage.message) === null || _c === void 0 ? void 0 : _c.conversation) !== "") {
                const data = __rest((0, functions_1.getBotData)(global.socket), []);
                const message = { remoteJid: webMessage.key.remoteJid, text: "Oi seu otário 1" };
                console.log(webMessage.message.conversation);
                if (webMessage.message.conversation === "oi") {
                    data.sendText(message);
                }
                // jsonReader("./src/webhook/config.json", async (err, config) => {
                //     if (err) {
                //         console.log(err);
                //         return;
                //     }
                //     let payload = { 
                //         remoteJid: webMessage.key.remoteJid, 
                //         participant: webMessage.key.participant,
                //         pushName: webMessage.pushName,
                //         conversation: webMessage.message.conversation
                //     };
                //     let res = await axios.post(config.url, payload);
                //     console.log(res.data);
                // });
            }
        }
        catch (error) {
            console.log(error);
        }
    }));
});
