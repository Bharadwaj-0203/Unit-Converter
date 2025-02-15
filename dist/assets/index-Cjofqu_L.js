(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const n=document.querySelector("#convert");n.addEventListener("click",function(){const t=Number(document.getElementById("rectangle").value);c(t)});function c(t){let s=document.querySelector("#output"),i=`<div class = "res-div">
    <p class="line1">Length (Meter/Feet)</p>
    <p class="line2">${t} meters = ${(t*3.28).toFixed(3)} feet | ${t} feet = ${(t*.304).toFixed(3)} meters</p>
    </div>`,o=`<div class = "res-div">
    <p class="line1">Volume (Liter/Gallons)</p>
    <p class="line2">${t} liters = ${(t*.264172).toFixed(3)} gallons | ${t} gallons = ${(t*3.78541).toFixed(3)} liters</p>
    </div>`,e=`<div class = "res-div">
    <p class="line1">Mass (Kilograms/Pounds)</p>
    <p class="line2">${t} kilos = ${(t*2.2).toFixed(3)} pounds | ${t} pounds = ${(t*.4536).toFixed(3)} kilos</p>
    </div>`;s.innerHTML=i+o+e}
