process['stderr']={
    fd: null
}

require("setimmediate")

require('mocha')

parameterSetup = require('./src/js/parametersetup.js')

runtest = function(){
    mocha.run();
}

//mocha.globals();

mocha.setup({globals: ["res"]});
//mocha.setup({ignoreLeaks: true})
mocha.setup('bdd');

mocha.checkLeaks();

require('./test/sample.spec.js')