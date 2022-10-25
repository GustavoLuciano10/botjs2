"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.swaggerFile = ("./src/api/swagger/swagger.json");
        this.swaggerData = fs.readFileSync(this.swaggerFile, 'utf8');
        this.swaggerDocument = JSON.parse(this.swaggerData);
        this.server;
        this.middleware();
        this.router();
    }
    middleware() {
        this.server.use(express_1.default.json());
        this.server.get("/teste", (req, res) => {
            res.send("<br>Hello world!");
        });
        // swagger docs
        this.server.use('/api/docs', swaggerUi.serve, swaggerUi.setup(this.swaggerDocument, null, null, null));
    }
    router() {
        this.server.use(router_1.router);
    }
}
exports.App = App;
