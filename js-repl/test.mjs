// %%
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let i = 0;

console.log(new Date().toISOString());
console.log(i++);

await new sleep(3e3);

console.log((i += Math.random()));

await new sleep(3e3);
console.log(new Date().toISOString());

console.log("zxcv");
