"use strict";
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
exports.messageController = void 0;
const functions_1 = require("../../baileys/functions");
const fs = require("fs");
class MessageController {
    sendText(req, res) {
        try {
            const data = __rest((0, functions_1.getBotData)(global.socket), []);
            const { remoteJid, text } = req.body;
            const message = { remoteJid: remoteJid, text: text };
            data.sendText(message);
            return res.json({
                response: "Mensagem enviada com sucesso",
            });
        }
        catch (error) {
            return res.json({
                response: "Ocorreu um erro ao enviar a mensagem",
            });
        }
    }
    sendImage(req, res) {
        try {
            const data = __rest((0, functions_1.getBotData)(global.socket), []);
            const { remoteJid, caption, base64 } = req.body;
            const buf = Buffer.from(base64, 'base64');
            const message = { remoteJid: remoteJid, pathOrBuffer: buf, caption: caption };
            data.sendImage(message);
            return res.json({
                response: "Imagem enviada com sucesso",
            });
        }
        catch (error) {
            return res.json({
                response: "Ocorreu um erro ao enviar a imagem",
            });
        }
    }
}
exports.messageController = new MessageController();
