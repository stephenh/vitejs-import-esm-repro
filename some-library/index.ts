
import memoizeOne from "memoize-one";

console.log((memoizeOne as any).__esModule ? "is module" : "is not");
console.log(memoizeOne(() => "asdf")());
