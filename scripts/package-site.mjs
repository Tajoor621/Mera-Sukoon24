import {readFileSync,rmSync,mkdirSync,copyFileSync,readdirSync,writeFileSync} from 'node:fs';
import {join,dirname} from 'node:path';
const sw=readFileSync('sw.js','utf8');
const shell=JSON.parse(sw.match(/const SHELL=(\[[^;]+\]);/)[1].replaceAll("'",'"'));
const version=JSON.parse(readFileSync('package.json','utf8')).version;
const runtimePath=file=>/\.(?:mjs|css)$/.test(file)?'runtime/'+version+'/'+file:file;
const files=['sw.js',...shell.filter(p=>p!=='./').map(p=>p.slice(2)),...readdirSync('docs').filter(p=>p.endsWith('.md')).map(p=>'docs/'+p)];
rmSync('dist',{recursive:true,force:true});
for(const file of files){
 const destination=join('dist',runtimePath(file));
 mkdirSync(dirname(destination),{recursive:true});
 if(file==='index.html'){
  const html=readFileSync(file,'utf8').replace(/(src|href)="([^"]+\.(?:mjs|css))"/g,(_,attribute,asset)=>attribute+'="'+runtimePath(asset)+'"');
  writeFileSync(destination,html);
 }else if(file==='sw.js'){
  const releaseShell=shell.map(path=>'./'+runtimePath(path.slice(2)));
  writeFileSync(destination,sw.replace(/const SHELL=(\[[^;]+\]);/,'const SHELL='+JSON.stringify(releaseShell)+';'));
 }else copyFileSync(file,destination);
}
console.log('Packaged '+files.length+' static files; no tests, credentials or runtime records are included.');
