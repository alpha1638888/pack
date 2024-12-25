const bytenode = require("bytenode");
bytenode.compileFile({ filename: './dist/Test.js', output: './dist/Test_' + process.platform + '_' + process.versions.node.split('.')[0] + '.jsc' });
