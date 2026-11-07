// Loads data/s*.js the way the browser does and prints the units as JSON.
const fs = require("fs"), vm = require("vm"), path = require("path");
const ctx = { window: {} }; vm.createContext(ctx);
for (let i = 1; i <= 6; i++) {
  const f = path.join(__dirname, "..", "data", `s${i}.js`);
  if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
}
process.stdout.write(JSON.stringify(ctx.window.UNITS || []));
