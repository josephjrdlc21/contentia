import{j as a}from"./app-notification-BRB7f6po.js";/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],c=a("chevron-right",s);function o(e){return e?e.toLowerCase().split(/[\s_]+/).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "):""}function u(e){return e?e.trim().split(/\s+/).slice(0,2).map(r=>r[0]?.toUpperCase()||"").join(""):""}function d(e){if(!e)return"";switch(e.toLowerCase()){case"pending":return"default";case"active":case"approved":return"success";case"inactive":case"cancelled":case"rejected":return"danger";default:return"default"}}function p(e,t=5){return String(e).padStart(t,"0")}export{c as C,p as f,u as i,d as s,o as t};
