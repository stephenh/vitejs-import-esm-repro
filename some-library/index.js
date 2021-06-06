"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var memoize_one_1 = __importDefault(require("memoize-one"));
console.log(memoize_one_1.default(function () { return "asdf"; })());
