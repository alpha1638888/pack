require('bytenode');
import os from "os";
const mymodule = require('./Test_' + os.platform() + '.jsc');
export const Test = mymodule.Test;
