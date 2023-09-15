const navn = require('./3-module-navn');
const siHei = require('./4-module-utils');
const data = require('./5-alternative-module')

console.log(data)
require('./6-mind-grenade');

siHei(navn.michael);
siHei(navn.bob);
siHei("Per");