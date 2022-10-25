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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyNumbers = exports.getRandomName = exports.isCommand = exports.extractCommandAndArgs = exports.writeJSON = exports.readJSON = exports.getBotData = void 0;
const fs_1 = __importDefault(require("fs"));
const general_1 = require("./configurations/general");
const getBotData = (socket) => {
    const sendText = (message) => __awaiter(void 0, void 0, void 0, function* () {
        return yield socket.sendMessage(message.remoteJid, {
            text: `${general_1.general.prefixEmoji} ${message.text}`,
        });
    });
    const sendButtons = (message) => __awaiter(void 0, void 0, void 0, function* () {
        return socket.sendMessage(message.remoteJid, message.buttonMessage);
    });
    const sendImage = (message) => __awaiter(void 0, void 0, void 0, function* () {
        const image = message.pathOrBuffer instanceof Buffer
            ? message.pathOrBuffer
            : fs_1.default.readFileSync(message.pathOrBuffer);
        const params = message.caption
            ? {
                image,
                caption: `${general_1.general.prefixEmoji} ${message.caption}`,
            }
            : { image };
        return yield socket.sendMessage(message.remoteJid, params, message.options);
    });
    const sendSticker = (message) => __awaiter(void 0, void 0, void 0, function* () {
        const sticker = message.pathOrBuffer instanceof Buffer
            ? message.pathOrBuffer
            : fs_1.default.readFileSync(message.pathOrBuffer);
        return yield socket.sendMessage(message.remoteJid, { sticker }, message.options);
    });
    const sendAudio = (message) => __awaiter(void 0, void 0, void 0, function* () {
        let ptt = message.ptt;
        const audio = message.pathOrBuffer instanceof Buffer
            ? message.pathOrBuffer
            : fs_1.default.readFileSync(message.pathOrBuffer);
        if (message.pathOrBuffer instanceof Buffer) {
            return yield socket.sendMessage(message.remoteJid, {
                audio,
                ptt,
                mimetype: "audio/mpeg",
            }, message.options);
        }
        message.options = Object.assign(Object.assign({}, message.options), { url: message.pathOrBuffer });
        return yield socket.sendMessage(message.remoteJid, {
            audio: { url: message.pathOrBuffer },
            ptt,
            mimetype: "audio/mpeg",
        }, message.options);
    });
    return {
        sendText,
        sendButtons,
        sendImage,
        sendSticker,
        sendAudio,
        socket
    };
};
exports.getBotData = getBotData;
const readJSON = (pathFile) => {
    // @ts-ignore
    return JSON.parse(fs_1.default.readFileSync(pathFile));
};
exports.readJSON = readJSON;
const writeJSON = (pathFile, data) => {
    fs_1.default.writeFileSync(pathFile, JSON.stringify(data));
};
exports.writeJSON = writeJSON;
const extractCommandAndArgs = (message) => {
    if (!message)
        return { command: "", args: "" };
    const [command, ...tempArgs] = message.trim().split(" ");
    const args = tempArgs.reduce((acc, arg) => acc + " " + arg, "").trim();
    return { command, args };
};
exports.extractCommandAndArgs = extractCommandAndArgs;
const isCommand = (message) => message.length > 1 && message.startsWith(general_1.general.prefix);
exports.isCommand = isCommand;
const getRandomName = (extension) => {
    const fileName = Math.floor(Math.random() * 10000);
    if (!extension)
        return fileName.toString();
    return `${fileName}.${extension}`;
};
exports.getRandomName = getRandomName;
const onlyNumbers = (text) => {
    return text.replace(/[^0-9]/g, "");
};
exports.onlyNumbers = onlyNumbers;
