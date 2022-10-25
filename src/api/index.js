"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const bot_1 = __importDefault(require("../baileys/bot"));
(0, bot_1.default)();
// venom();
new app_1.App().server.listen(process.env.PORT || 3000);
