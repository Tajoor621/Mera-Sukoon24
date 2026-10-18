import {readdirSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {join} from 'node:path';
function files(path){return readdirSync(path,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?(entry.name==='dist'||entry.name==='node_modules'||entry.name.startsWith('.')?[]:files(join(path,entry.name))):/\.(mjs|js)$/.test(entry.name)?[join(path,entry.name)]:[]);}
for(const path of files('.')){const run=spawnSync(process.execPath,['--check',path],{stdio:'inherit'});if(run.status!==0)process.exit(run.status||1);}
console.log('All JavaScript syntax checks passed.');
