"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonReader = void 0;
const fs = require("fs");
function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
        }
        catch (err) {
            return cb && cb(err);
        }
    });
}
exports.jsonReader = jsonReader;
