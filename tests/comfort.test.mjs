import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {COMFORT_KEY,quietLines,lineIndex,quietLine,readComfort,saveComfort} from '../comfort.mjs';
function ratio(a,b){const l=c=>{const rgb=c.match(/\w\w/g).map(h=>parseInt(h,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;};const [x,y]=[l(a),l(b)].sort((p,q)=>q-p);return (x+.05)/(y+.05);}
test('daily lines stay stable, translated and free of clinical claims',()=>{
 assert.equal(quietLines.length,7);
 for(const line of quietLines){for(const language of ['en','roman','ur'])assert.ok(line[language].length>12);assert.doesNotMatch(Object.values(line).join(' '),/\b(diagnos\w*|treatment|cure|prescription|emergency service|call 999|call 911)\b/i);}
 assert.equal(quietLine('en','2026-11-05'),quietLine('en','2026-11-05'));
 assert.equal(quietLine('ur','2026-11-05'),quietLines[lineIndex('2026-11-05')].ur);
 assert.equal(quietLine('nope','2026-11-05'),quietLine('en','2026-11-05'));
 assert.notEqual(quietLine('en','2026-11-05'),quietLine('roman','2026-11-05'));
});
test('comfort preferences are session-scoped and reject unknown values',()=>{
 const data=new Map();const storage={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v)};
 assert.deepEqual(readComfort(null),{text:'comfortable',theme:'device'});
 assert.deepEqual(saveComfort(storage,{text:'larger',theme:'dusk',extra:'nope'}),{text:'larger',theme:'dusk'});
 assert.equal([...data.keys()][0],COMFORT_KEY);
 assert.deepEqual(readComfort(storage),{text:'larger',theme:'dusk'});
 assert.deepEqual(saveComfort(storage,{text:'__proto__',theme:'paper'}),{text:'comfortable',theme:'paper'});
 assert.deepEqual(readComfort({getItem(){return '{bad';}}),{text:'comfortable',theme:'device'});
 assert.doesNotThrow(()=>saveComfort({setItem(){throw Error('blocked');}},{text:'large',theme:'paper'}));
});
test('dusk text, links, buttons and focus meet contrast thresholds',()=>{
 const css=readFileSync(new URL('../styles.css',import.meta.url),'utf8');
 for(const hex of ['e8f3ec','10211e','c9d8cf','17302b','9ddec8','1f6f62','f3c98a','6e8b7e','7d9a8c'])assert.match(css,new RegExp(hex,'i'));
 for(const [fg,bg] of [['e8f3ec','10211e'],['e8f3ec','17302b'],['c9d8cf','17302b'],['9ddec8','10211e'],['9ddec8','17302b'],['ffffff','1f6f62'],['ffffff','267363']])assert.ok(ratio(fg,bg)>=4.5,fg+' '+bg);
 for(const [fg,bg] of [['f3c98a','10211e'],['6e8b7e','10211e'],['7d9a8c','17302b']])assert.ok(ratio(fg,bg)>=3,fg+' '+bg);
 assert.match(css,/prefers-color-scheme:dark/);
});
