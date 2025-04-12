"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.fileWriteQueue = exports.writeJsonFile = void 0;
exports.readJson = readJson;
exports.loadDayData = loadDayData;
exports.loadHourData = loadHourData;
const fs = __importStar(require("fs/promises"));
const writeJsonFile = (filePath, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
});
exports.writeJsonFile = writeJsonFile;
function readJson(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fs.readFile(filePath, "utf-8");
            return JSON.parse(data);
        }
        catch (err) {
            console.error("Error reading data file:", err);
            return [];
        }
    });
}
function loadDayData(data, filepath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const loadedData = (yield readJson(filepath));
            data.length = 0;
            data.push(...loadedData);
        }
        catch (err) {
            console.error("Error loading data:", err);
            data.length = 0;
        }
    });
}
function loadHourData(data, filepath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const loadedData = (yield readJson(filepath));
            data.length = 0;
            data.push(...loadedData);
        }
        catch (err) {
            console.error("Error loading data:", err);
            data.length = 0;
        }
    });
}
class AsyncQueue {
    constructor() {
        this.queue = [];
        this.processing = false;
    }
    enqueue(task) {
        return __awaiter(this, void 0, void 0, function* () {
            this.queue.push(task);
            if (!this.processing) {
                yield this.processQueue();
            }
        });
    }
    processQueue() {
        return __awaiter(this, void 0, void 0, function* () {
            this.processing = true;
            while (this.queue.length > 0) {
                const task = this.queue.shift();
                if (task) {
                    try {
                        yield task();
                    }
                    catch (err) {
                        console.error("Error in queue task:", err);
                    }
                }
            }
            this.processing = false;
        });
    }
}
exports.fileWriteQueue = new AsyncQueue();
