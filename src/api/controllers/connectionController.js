"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionController = void 0;
const bot_1 = __importDefault(require("../../baileys/bot"));
const bot_2 = __importDefault(require("../../venom/bot"));
const fs = require("fs");
class ConnectionController {
    connectBaileys(req, res) {
        try {
            (0, bot_1.default)();
            return res.json({
                response: "Início de conexão Baileys, aguardando QRCode.",
            });
        }
        catch (error) {
            return res.json({
                response: "Ocorreu um erro na tentativa de início de conexão Baileys.",
            });
        }
    }
    connectVenom(req, res) {
        try {
            (0, bot_2.default)();
            return res.json({
                response: "Início de conexão Venom, aguardando QRCode.",
            });
        }
        catch (error) {
            return res.json({
                response: "Ocorreu um erro na tentativa de início de conexão Venom.",
            });
        }
    }
}
exports.connectionController = new ConnectionController();
