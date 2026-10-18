// Dynamic import gives partial-cache failures a readable, dependency-free exit.
import('./app.mjs').catch(()=>{
 const error=document.getElementById('startup-error');
 if(error){error.hidden=false;error.tabIndex=-1;error.focus();}
});
