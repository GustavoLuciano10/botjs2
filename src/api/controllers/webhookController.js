"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webHookController = void 0;
const jsonFunctions_1 = require("../utils/jsonFunctions");
const fs = require("fs");
class WebHookController {
    setWebHook(req, res) {
        try {
            const { url } = req.body;
            (0, jsonFunctions_1.jsonReader)("./src/webhook/config.json", (err, config) => {
                if (err) {
                    console.log("Error reading file:", err);
                    return;
                }
                config.url = url;
                fs.writeFile("./src/webhook/config.json", JSON.stringify(config), err => {
                    if (err)
                        console.log("Error writing file:", err);
                });
            });
            return res.json({
                response: "Webhook atualizado com sucesso",
            });
        }
        catch (error) {
            return res.json({
                response: "Ocorreu um erro ao atualizado o Webhook",
            });
        }
    }
}
exports.webHookController = new WebHookController();
