(()=>{"use strict";const e=[{question:"Vilken är Sveriges tredje största sjö?",alt0:"Hjälmaren",alt1:"Mälaren",alt2:"Storsjön",answer:"Mälaren"},{question:"När skapades Facebook?",alt0:"2004",alt1:"1994",alt2:"2011",answer:"2004"},{question:"Hur lång är en tum?",alt0:"2,54 cm",alt1:"1,54 cm",alt2:"1 m",answer:"2,54 cm"},{question:"Hur gammal blev Drottning Elizabeth?",alt0:"96 år",alt1:"98 år",alt2:"94 år",answer:"96 år"},{question:"Vilken av följande öl härstammar från Nederländerna?",alt0:"Heineken",alt1:"Tuborg",alt2:"Becks",answer:"Heineken"}],t=document.getElementById("startBtn1"),n=document.getElementById("topDisplay"),o=document.getElementById("botDisplay"),r=document.getElementById("midDisplay");let l=0,s=0,i=0,a=0,c=0,d=0,g=0,m=0,u=0,p=0,f=0,h=0;function k(e){return Math.floor(Math.random()*e)}function b(t){const n=document.getElementsByClassName("button");t.target.innerHTML===e[d].answer?(t.target.style.backgroundColor="#70e000",l+=3):t.target.style.backgroundColor="#bf0603";for(let t=0;t<n.length;t++)n[t].innerHTML===e[d].answer&&(n[t].style.backgroundColor="#70e000");setTimeout((()=>{const e=document.getElementsByClassName("button");if(d++,e)for(let t=0;t<e.length;t++)e[t].remove();v(d)}),500)}function v(t){const r=document.getElementById("startBtn1");if(r&&r.remove(),d<5){for(let e=0;e<3;e++){const t=document.createElement("button");t.setAttribute("id","startBtn"+e),t.innerHTML="text",t.classList.add("button"),t.addEventListener("click",b),o.appendChild(t)}n.innerHTML=e[t].question;for(let n=0;n<3;n++)document.getElementById(`startBtn${n}`).innerHTML=e[t][`alt${n}`]}else n.innerHTML="current score is: "+l+"/15",console.log("current score is: "+l+"/15"),y(L)}function y(e){const t=["<h2>Fizz Buzz</h2> \n I denna leken så ska du gissa om fizz eller buzz kommer som nästa nummer i sekvensen. Fizz är ett nummer delbart av 3 som t.ex. 3/6/9 och Buzz ett nummer delbart av 5 t.ex. 5/10/15<h2>\n your score on last part was: "+l+"/15 </h2>","<h2>Minne</h2> \n 9 bilder kommer att visas up under 5sekunder försök att komma ihåg så många som du kan och sedan klicka på dem i rätt ordning enligt listan<h2>\n your score on last part was: "+s+"/15 </h2>","<h2>Visuell förmåga och läsförståelse</h2 \n Du kommer att få se 10st olika objekt med olika former/färger följ listan och klicka på dem i rätt ordning, du får 15sekunder!<h2>\n your score on last part was: "+i+"/9 </h2>","<h2>Uppfattningsförmåga</h2> \n Detta testet provar din uppfattningsförmåga genom att visa upp ett objekt under 1sekund och du ska välja att klick på det eller ej, om du klickar rätt får du +1 poäng annars -1, följ dessa instruktionerna när du klickar på objekt: 1. Har en annan färg än röd 2. Har en annan form än kvadrat 3. eller är en röd kvadrat<h2>\n your score on last part was: "+a+"/10    </h2>"];n.innerHTML=t[m],m++;const r=document.createElement("button");r.setAttribute("id","startBtn2"),r.innerHTML="start",r.classList.add("button"),r.addEventListener("click",(function(){r.remove(),e()})),o.appendChild(r)}function L(){const e=document.getElementById("startBtn1"),t=document.getElementsByClassName("button"),r=t.length;if(d++,e&&e.remove(),t)for(let e=0;e<r;e++)t[e].remove(),console.log(t[e]+" is removed");const l=k(99);if(n.innerHTML="",g<5){g++;for(let e=l;e<=l+3;e++)n.innerHTML+=e%15==0?"FizzBuzz ":e%3==0?"Fizz ":e%5==0?"Buzz ":e+" ";u=l+4,u=u%15==0?"FizzBuzz":u%5==0?"Buzz":u%3==0?"Fizz":l+4,console.log("correct is: "+u),function(e){for(let t=0;t<4;t++){const n=document.createElement("button");n.classList.add("button"),n.setAttribute("id","startBtn"+t),n.addEventListener("click",B),0===t&&(n.innerHTML="Fizz",o.appendChild(n)),1===t&&(n.innerHTML="Buzz",o.appendChild(n)),2===t&&(n.innerHTML="FizzBuzz",o.appendChild(n)),3===t?(n.innerHTML=e.toString(),console.log("correct type is :"+typeof e),o.appendChild(n)):t>=4&&console.log("too much")}}(l+4)}else console.log("end of fizzbuzz"),console.log("your score as of part 2 is :"+s),y(C)}function B(e){const t=document.getElementsByClassName("button");console.log("event targets innerHTML is: "+e.target.innerHTML),console.log("event targets type is: "+typeof e.target.innerHTML);for(let e=0;e<t.length;e++)console.log(t[e]),console.log(u),t[e].innerHTML===u.toString()&&(t[e].style.backgroundColor="#70e000");e.target.innerHTML===u.toString()?(console.log("correct you got the green style"),e.target.style.backgroundColor="#70e000",s+=3):e.target.innerHTML!==u&&(e.target.style.backgroundColor="#bf0603",console.log("innerhtml is: "+e.target.innerHTML),console.log("WRONG, correct was supposedly :"+u)),setTimeout((()=>{const e=document.querySelectorAll("button"),t=e.length;if(d++,e)for(let n=0;n<t;n++)e[n].remove(),console.log(e[n]+" is removed");L()}),500)}function z(e){const t=document.createElement("div");t.classList.add("box"),r.appendChild(t),e.target.innerHTML=T[parseInt(e.target.id)],console.log("pict: "+E[p]+"event id is: "+parseInt(e.target.id)),parseInt(e.target.id)===E[p]?(console.log("correct"),document.getElementsByClassName("box")[0].innerHTML="&#x2713",i++):(console.log("wrong"),document.getElementsByClassName("box")[0].innerHTML="&#10005",document.getElementsByClassName("box")[0].style.backgroundColor="red"),p++,p>8&&(n.innerHTML="your score is: "+i,function(){const e=document.querySelectorAll("button"),t=e.length;if(d++,e)for(let n=0;n<t;n++)e[n].remove(),console.log(e[n]+" is removed");document.getElementsByClassName("counter")[0].remove(),y(N)}()),setTimeout((()=>{e.target.innerHTML="?",document.getElementsByClassName("box")[0].remove(),document.getElementsByClassName("counter")[0].innerHTML=p+1}),500)}window.reset=function(){if(console.log("currentPart is: "+m),1===m){m--;const e=o.querySelectorAll("button"),n=e.length;if(t&&t.remove(),e)for(let t=0;t<n;t++)o.removeChild(e[t]),console.log(e[t]+" is removed");d=0,l=0,v(0)}if(2===m){m--;const e=o.querySelectorAll("button"),n=e.length;if(t&&t.remove(),e)for(let t=0;t<n;t++)o.removeChild(e[t]),console.log(e[t]+" is removed");g=0,u=0,s=0,L()}if(3===m){m--;const e=document.querySelectorAll("button"),t=e.length;if(d++,e)for(let n=0;n<t;n++)e[n].remove(),console.log(e[n]+" is removed");i=0,p=0,C()}if(4===m){m--,document.getElementById("startBtn2")&&t.remove();const e=r.querySelectorAll("div"),n=e.length;if(d++,e)for(let t=0;t<n;t++)e[t].remove(),console.log(e[t]+" is removed");a=0,h=0,f=0,N()}5===m&&(c=0,m--,x=0,A())};const T=['<img src="img/äpple.png" alt="pic" width="150" height="150">','<img src="img/druvor.png" alt="pic" width="150" height="150">','<img src="img/hamburgare.png" alt="pic" width="150" height="150">','<img src="img/körsbär.png" alt="pic" width="150" height="150">','<img src="img/kyckling.png" alt="pic" width="150" height="150">','<img src="img/ost.png" alt="pic" width="150" height="150">','<img src="img/päron.png" alt="pic" width="150" height="150">','<img src="img/vatten.png" alt="pic" width="150" height="150">','<img src="img/vin.png" alt="pic" width="150" height="150">'],E=[3,1,2,0,5,6,7,8,4];function C(){const e=document.createElement("div");e.classList.add("counter"),e.innerHTML=1,r.appendChild(e);const t=document.getElementById("startBtn1");t&&t.remove(),n.innerHTML="1. körsbär \n 2. druvor \n 3. hamburgare \n 4. äpple \n 5. ost \n 6. päron \n 7. vatten \n 8. vin/dryck \n 9. kyckling ";for(let e=0;e<9;e++){console.log(e);const t=document.createElement("button");t.classList.add("memoryBtn"),t.style.fontSize="100px",t.setAttribute("id","memory"+e),t.innerHTML=T[e],t.setAttribute("id",e),o.appendChild(t),setTimeout((()=>{for(let e=0;e<9;e++)t.innerHTML="?",t.addEventListener("click",z)}),5e3)}}const H=["circle","square","triangle","circle","square","triangle","circle","square","triangle","circle"],M=["red","blue","green","blue","green","red","green","red","blue","purple"],w=[5,3,6,1,4,2,9,0,7,8];function q(e){if(h<8){const t=document.createElement("div");t.classList.add("box"),o.appendChild(t),console.log("shape"+w[f]),e.target.id==="shape"+w[f]?(document.getElementsByClassName("box")[0].innerHTML="&#x2713",console.log("correct"),a++):(document.getElementsByClassName("box")[0].innerHTML="&#10005",document.getElementsByClassName("box")[0].style.backgroundColor="red",console.log("wrong")),f++,setTimeout((()=>{document.getElementsByClassName("box")[0].remove()}),500),h++}}function N(){n.innerHTML="1.röd-triangel, 2.blå-cirkel, 3.grön-cirkel, 4.blå-fyrkant, 5.grön-fyrkant, 6.grön-triangel, 7.lila-cirkel, 8.röd-cirkel, 9.röd-fyrkant, 10.blå-triangel.";const e=document.getElementById("startBtn1");e&&e.remove();for(let e=0;e<10;e++){const t=document.createElement("div");t.classList.add(H[e]),t.classList.add("game"),"triangle"===H[e]?t.style.borderBottomColor=M[e]:t.style.backgroundColor=M[e],t.setAttribute("id","shape"+e),t.addEventListener("click",q),r.appendChild(t)}setTimeout((()=>{!function(){const e=r.querySelectorAll("div"),t=e.length;if(d++,e)for(let n=0;n<t;n++)e[n].remove(),console.log(e[n]+" is removed");y(A)}()}),15e3)}let x=0;function I(e){e.target.removeEventListener("click",I),"red"!==e.target.style.backgroundColor?e.target.classList.contains("square")?e.target.classList.contains("square")&&(console.log("wrong"),c--):"red"!==e.target.style.borderBottomColor?(console.log("correct"),c++):"red"===e.target.style.borderBottomColor&&(console.log("wrong"),c--):"red"===e.target.style.backgroundColor?e.target.classList.contains("square")?(console.log("that's a red square correct"),c++):e.target.classList.contains("square")||(console.log("wrong"),c--):(console.log("wrong by end else"),c--)}function A(){t&&t.remove();const e=k(9),o=k(9),d=document.createElement("div");d.classList.add(H[e]),d.classList.add("game"),"triangle"===H[e]?d.style.borderBottomColor=M[o]:d.style.backgroundColor=M[o],d.setAttribute("id","shape"),d.addEventListener("click",I),r.appendChild(d),x>8&&(setTimeout((()=>{!function(){m++;const e=l+s+i+a+c;console.log("you made it to end of test"),n.innerHTML=" <ul><li>Quizz: "+l+"</li><li> FizzBuzz: "+s+"</li><li> Memory: "+i+"</li><li> Visuell förmåga och läsförståelse: "+a+"</li><li> Uppfattningsförmåga: "+c+"</li><li> total poäng: "+e+"</li></ul>"}()}),1e3),console.log("end of test func called")),setTimeout((()=>{r.removeChild(d),x++,x<10&&setTimeout((()=>{A()}),1e3)}),1e3)}const S=document.getElementById("startBtn1");S.addEventListener("click",(function(e){S.classList.add("test1"),S.addEventListener("click",(n.innerHTML="<h2>Tipsfrågor</h2><p>Första delen består av simpla quizz frågor med 3 alternativ, svara genom att klicka på ett av alternativen.</p>",void t.addEventListener("click",(function(e){t.classList.add("test1"),t.addEventListener("click",v(0))}))))}))})();