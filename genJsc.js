const os = require("os");
const bytenode = require("bytenode");
bytenode.compileFile({ filename: './dist/Test.js', output: './dist/Test_' + os.platform() + '.jsc' });
