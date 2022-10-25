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
exports.start = void 0;
const connection_1 = require("./connection");
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connection_1.connect)();
});
function start(client) {
    client.onMessage((message) => {
        console.log(message);
        if (message.body.toLowerCase() === 'oi') {
            client
                .sendText(message.from, 'Oi seu otário 2');
        }
    });
}
exports.start = start;
