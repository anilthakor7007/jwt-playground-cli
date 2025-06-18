#!/usr/bin/env node
function a(r){let[o,e,t]=r.split(".");if(!o||!e||!t)throw new Error("Invalid JWT format");let s=d=>JSON.parse(Buffer.from(d,"base64url").toString("utf-8"));return{header:s(o),payload:s(e),signature:t}}import g from"jsonwebtoken";function c(r,o){try{return g.verify(r,o),!0}catch{return!1}}import l from"chalk";function n(r,o){console.log(l.green.bold(`
--- ${r} ---`)),console.log(l.whiteBright(JSON.stringify(o,null,2)))}var[,,i,f]=process.argv;i||(console.log("Usage: jwt-playground <token> [secret]"),process.exit(1));try{let{header:r,payload:o,signature:e}=a(i);if(n("Header",r),n("Payload",o),console.log(`
Signature:`,e),f){let t=c(i,f);console.log(`
Verification:`,t?"\u2705 Valid":"\u274C Invalid")}}catch(r){console.error("\u274C Error:",r.message)}
