#! /usr/bin/env node
/**
 * replplus.js
 * Created by dcorns on 11/22/17
 * Copyright © 2017 Dale Corns
 * MIT Licensed
 * Prevent node repl from returning undefined when an action does not return a value.
 * Run the repl in strict mode.
 * Make node modules available to the repl by including paths or names as space separated arguments
 * If the names have dashes, they are converted to camelcase
 */
'use strict';
const repl = require('repl');
const replPlus = () => {
  const rs =repl.start({
    ignoreUndefined: true,
    replMode: repl.REPL_MODE_STRICT,
  });
  if(process.argv.length > 2){
    for(let n = 2;n<process.argv.length;n++){
      let mod = process.argv[n];
      const pathIdx = mod.lastIndexOf('/');
      if(pathIdx > -1){
        mod = mod.slice(pathIdx + 1);
      }
      while(mod.lastIndexOf('-') > -1){
        mod = mod.substr(0,mod.lastIndexOf('-')) + mod.substr(mod.lastIndexOf('-') + 1,1).toUpperCase() +mod.slice(mod.lastIndexOf('-') + 2);
        console.log(mod);
      }
      rs.context[mod] = require(process.argv[n]);
    }
  }
};
replPlus();
