require('bytenode');
const mymodule = require('./Test_' + process.platform + '_' + process.versions.node.split('.')[0] + '.jsc');
export const Test = mymodule.Test;
