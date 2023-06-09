// npm --version = get your current version
// local dependancy - use it onl in this particular project
// npm i <packageName>

//global dependancy - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac PC)

//package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');
 const items = [1,[2,[3,[4]]]]
 const newItems = _.flatten(items)
 console.log(newItems);
