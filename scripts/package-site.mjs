import {readFileSync,rmSync,mkdirSync,copyFileSync,readdirSync} from 'node:fs';
import {join,dirname} from 'node:path';
const sw=readFileSync('sw.js','utf8');
const shell=JSON.parse(sw.match(/const SHELL=(\[[^;]+\]);/)[1].replaceAll("'",'"'));
const files=[...new Set(shell.filter(p=>p!=='./').map(p=>p.slice(2)).concat(readdirSync('docs').filter(p=>p.endsWith('.md')).map(p=>'docs/'+p)))];
rmSync('dist',{recursive:true,force:true});mkdirSync('dist');
for(const file of files){mkdirSync(dirname(join('dist',file)),{recursive:true});copyFileSync(file,join('dist',file));}
console.log('Packaged '+files.length+' static files; no tests, credentials or runtime records are included.');
