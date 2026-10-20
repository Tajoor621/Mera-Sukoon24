import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {contexts,contextFor} from '../contexts.mjs';
import {consultation,domains} from '../consultations.mjs';
test('sixteen optional contexts have unique complete guidance without external reading',()=>{
 assert.equal(contexts.length,16);assert.equal(new Set(contexts.map(c=>c.id)).size,16);
 for(const c of contexts){assert.ok(c.title&&c.explanation&&c.script&&c.question);assert.equal(c.actions.length,4);assert.ok(c.actions.every(Boolean));assert.doesNotMatch(JSON.stringify(c),/https?:\/\//);}
});
test('every context works across thirteen domains and all modes without mutating content',()=>{
 const before=JSON.stringify(contexts);
 for(const c of contexts)for(const d of domains)for(const mode of ['advice','mediation','both']){
  const r=consultation({domain:d.id,context:c.id,mode});
  assert.equal(r.domain,d.id);assert.equal(r.urgent,false);assert.deepEqual(r.actions,c.actions);assert.equal(r.question,c.question);
  assert.ok(r.sections.some(s=>s.heading==='Your selected context: '+c.title&&s.paragraphs.includes(c.explanation)));
  assert.ok(r.sections.some(s=>s.heading==='Understanding the situation'&&s.paragraphs.includes(d.understand)));
  assert.ok(r.sections.some(s=>s.heading==='Words for this situation'&&s.paragraphs.includes(c.script)));
 }
 assert.equal(JSON.stringify(contexts),before);
});
test('unknown contexts preserve the universal response and do not infer identity',()=>{
 for(const context of [undefined,'','__proto__','constructor','Pakistan','Muslim',{},null]){
  assert.equal(contextFor(context),null);
  assert.deepEqual(consultation({context}),consultation({}));
 }
});
test('immediate danger and urgent medical concerns supersede every context',()=>{
 for(const c of contexts)for(const flag of ['unsafe','medical']){
  const r=consultation({context:c.id,mode:'both',[flag]:true,faith:true});
  assert.equal(r.urgent,true);assert.deepEqual(r.actions,[]);assert.equal(r.sections.length,1);
  assert.doesNotMatch(JSON.stringify(r),/Words for this situation|voluntary discussion/);
 }
});
test('safety-sensitive contexts suppress joint mediation even without further disclosures',()=>{
 for(const c of contexts.filter(c=>c.mediationUnsafe)){
  const r=consultation({context:c.id,domain:'social',mode:'both'});
  assert.ok(r.sections.some(s=>s.heading==='Why joint mediation is not offered here'));
  assert.ok(!r.sections.some(s=>s.heading==='A voluntary discussion structure'));
 }
 const r=consultation({context:'joint-family',domain:'social',mode:'both'});
 assert.ok(r.sections.some(s=>s.heading==='A voluntary discussion structure'));
});
test('all contexts retain opt-in faith and explicit coercion/minor safeguards',()=>{
 for(const c of contexts){
  const r=consultation({context:c.id,mode:'both',coercion:true,minor:true});
  assert.ok(!r.sections.some(s=>s.heading==='Optional faith-based comfort'));
  assert.ok(!r.sections.some(s=>s.heading==='A voluntary discussion structure'));
  assert.ok(r.sections.some(s=>s.heading==='When someone under 18 is involved'));
  assert.ok(consultation({context:c.id,faith:true}).sections.some(s=>s.heading==='Optional faith-based comfort'));
 }
});
test('context module is included atomically offline and has no network or storage API',()=>{
 const source=readFileSync(new URL('../contexts.mjs',import.meta.url),'utf8');
 assert.doesNotMatch(source,/\bfetch\s*\(|localStorage|sessionStorage|XMLHttpRequest/);
 assert.match(readFileSync(new URL('../sw.js',import.meta.url),'utf8'),/\.\/contexts\.mjs/);
});
