var e={},t=(e={convertWei:function(e,t,n){let l,i,c,o,r=BigInt(e).toString();return("-"===r.charAt(0)?(r=r.substring(1),o=!0):o=!1,r.length>t)?(","===(l=(l=(l=r.substring(0,r.length-t)).split("").reverse().join("")).replace(/(\d{3})/g,"$1,")).slice(-1)&&(l=l.slice(0,-1)),l=l.split("").reverse().join(""),","===(i=(i=(i=r.substring(r.length-t,r.length)).substring(0,n)).replace(/(\d{3})/g,"$1,")).slice(-1)&&(i=i.slice(0,-1)),c=l+"."+i):(","===(i=(i=(i=(i=r.substring(r.length-t,r.length)).substring(0,n)).padStart(n,"0")).replace(/(\d{3})/g,"$1,")).slice(-1)&&(i=i.slice(0,-1)),c="0."+i),!0==o&&(c="-"+c),"."===c.slice(-1)&&(c=c.slice(0,-1)),c},convertHex:function(e){let t=e;return e.length%2&&(t="0"+e),t=BigInt("0x"+t)},convertUnix:function(e){let t=new Date(1e3*e),n=t.toUTCString();return{currentTimeZone:t=t.toLocaleDateString("en-GB",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:"short"}),UTC:n}}}).convertWei,n=e.convertHex,l=e.convertUnix;document.addEventListener("DOMContentLoaded",function(){let e,i;chrome.storage.local.get(["selectedStr","conversionType"]).then(c=>{if(e=c.selectedStr,"wei"===(i=c.conversionType)||"hex"===i)chrome.storage.local.get(["decimals","displayDecimals"]).then(l=>{document.getElementById("displayDecimals").value=l.displayDecimals,document.getElementById("decimals").value=l.decimals;let c=e;"hex"===i&&(c=n(c)),c=t(c,l.decimals,l.displayDecimals),document.getElementById("convertedStr").textContent=c});else if("unixTime"===i){document.getElementById("decimalsForm").style.display="none";let{currentTimeZone:t,UTC:n}=l(e);console.log(t),console.log(n),document.getElementById("convertedStr").textContent=t,document.getElementById("convertedStr2").textContent=n}}),document.getElementById("decimalsForm").addEventListener("submit",function(l){l.preventDefault();let c=document.getElementById("decimals").value,o=document.getElementById("displayDecimals").value;chrome.storage.local.set({decimals:c,displayDecimals:o});let r=e;"hex"===i&&(r=n(r)),r=t(r,c,o),document.getElementById("convertedStr").textContent=r})});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxnQkFBZ0IsV0FBQSxDQUFjLENBQzFELEVBQ0oiLCJzb3VyY2VzIjpbIjxhbm9uPiIsInNyYy9wb3B1cC5qcyIsInNyYy9jb252ZXJ0ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciAkYmEyYTAyNmEzZjhkMjdhNyRleHBvcnRzID0ge307XG5mdW5jdGlvbiAkYmEyYTAyNmEzZjhkMjdhNyR2YXIkY29udmVydFdlaShudW0sIGRlY2ltYWxzLCBkaXNwbGF5RGVjaW1hbHMpIHtcbiAgICBsZXQgc3RyID0gQmlnSW50KG51bSkudG9TdHJpbmcoKTtcbiAgICBsZXQgd2hvbGVEaWdldHM7XG4gICAgbGV0IHNtYWxsRGlnZXRzO1xuICAgIGxldCBmb3JtYXR0ZWROdW1iO1xuICAgIGxldCBuZWdpdGl2ZTtcbiAgICBpZiAoc3RyLmNoYXJBdCgwKSA9PT0gXCItXCIpIHtcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygxKTtcbiAgICAgICAgbmVnaXRpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSBuZWdpdGl2ZSA9IGZhbHNlO1xuICAgIGlmIChzdHIubGVuZ3RoID4gZGVjaW1hbHMpIHtcbiAgICAgICAgd2hvbGVEaWdldHMgPSBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSBkZWNpbWFscyk7XG4gICAgICAgIC8vIFJldmVyc2UgdGhlIHN0cmluZyBmb3IgZWFzaWVyIG1hbmlwdWxhdGlvblxuICAgICAgICB3aG9sZURpZ2V0cyA9IHdob2xlRGlnZXRzLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xuICAgICAgICAvLyBJbnNlcnQgY29tbWFzIGFmdGVyIGV2ZXJ5IHRocmVlIGNoYXJhY3RlcnNcbiAgICAgICAgd2hvbGVEaWdldHMgPSB3aG9sZURpZ2V0cy5yZXBsYWNlKC8oXFxkezN9KS9nLCBcIiQxLFwiKTtcbiAgICAgICAgLy8gUmVtb3ZlIHRyYWlsaW5nIGNvbW1hIGlmIHByZXNlbnRcbiAgICAgICAgaWYgKHdob2xlRGlnZXRzLnNsaWNlKC0xKSA9PT0gXCIsXCIpIHdob2xlRGlnZXRzID0gd2hvbGVEaWdldHMuc2xpY2UoMCwgLTEpO1xuICAgICAgICAvLyBSZXZlcnNlIHRoZSBzdHJpbmcgYmFjayB0byBpdHMgb3JpZ2luYWwgb3JkZXJcbiAgICAgICAgd2hvbGVEaWdldHMgPSB3aG9sZURpZ2V0cy5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcbiAgICAgICAgLy8gc2VsZWN0cyBvbmx5IHRoZSBkZWNpYW1sc1xuICAgICAgICBzbWFsbERpZ2V0cyA9IHN0ci5zdWJzdHJpbmcoc3RyLmxlbmd0aCAtIGRlY2ltYWxzLCBzdHIubGVuZ3RoKTtcbiAgICAgICAgLy90cnVuY2F0aW5nIGRpZ2V0c1xuICAgICAgICBzbWFsbERpZ2V0cyA9IHNtYWxsRGlnZXRzLnN1YnN0cmluZygwLCBkaXNwbGF5RGVjaW1hbHMpO1xuICAgICAgICAvLyBJbnNlcnQgY29tbWFzIGFmdGVyIGV2ZXJ5IHRocmVlIGNoYXJhY3RlcnNcbiAgICAgICAgc21hbGxEaWdldHMgPSBzbWFsbERpZ2V0cy5yZXBsYWNlKC8oXFxkezN9KS9nLCBcIiQxLFwiKTtcbiAgICAgICAgLy8gUmVtb3ZlIHRyYWlsaW5nIGNvbW1hIGlmIHByZXNlbnRcbiAgICAgICAgaWYgKHNtYWxsRGlnZXRzLnNsaWNlKC0xKSA9PT0gXCIsXCIpIHNtYWxsRGlnZXRzID0gc21hbGxEaWdldHMuc2xpY2UoMCwgLTEpO1xuICAgICAgICBmb3JtYXR0ZWROdW1iID0gd2hvbGVEaWdldHMgKyBcIi5cIiArIHNtYWxsRGlnZXRzO1xuICAgICAgICAvLyBBZGRzIG5lZ2l0aXZlcyBiYWNrIGluXG4gICAgICAgIGlmIChuZWdpdGl2ZSA9PSB0cnVlKSBmb3JtYXR0ZWROdW1iID0gXCItXCIgKyBmb3JtYXR0ZWROdW1iO1xuICAgICAgICAvLyBSZW1vdmUgdHJhaWxpbmcgY29tbWEgaWYgcHJlc2VudFxuICAgICAgICBpZiAoZm9ybWF0dGVkTnVtYi5zbGljZSgtMSkgPT09IFwiLlwiKSBmb3JtYXR0ZWROdW1iID0gZm9ybWF0dGVkTnVtYi5zbGljZSgwLCAtMSk7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWROdW1iO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNlbGVjdHMgb25seSB0aGUgZGVjaWFtbHNcbiAgICAgICAgc21hbGxEaWdldHMgPSBzdHIuc3Vic3RyaW5nKHN0ci5sZW5ndGggLSBkZWNpbWFscywgc3RyLmxlbmd0aCk7XG4gICAgICAgIC8vdHJ1bmNhdGluZyBkaWdldHNcbiAgICAgICAgc21hbGxEaWdldHMgPSBzbWFsbERpZ2V0cy5zdWJzdHJpbmcoMCwgZGlzcGxheURlY2ltYWxzKTtcbiAgICAgICAgc21hbGxEaWdldHMgPSBzbWFsbERpZ2V0cy5wYWRTdGFydChkaXNwbGF5RGVjaW1hbHMsIFwiMFwiKTtcbiAgICAgICAgLy8gSW5zZXJ0IGNvbW1hcyBhZnRlciBldmVyeSB0aHJlZSBjaGFyYWN0ZXJzXG4gICAgICAgIHNtYWxsRGlnZXRzID0gc21hbGxEaWdldHMucmVwbGFjZSgvKFxcZHszfSkvZywgXCIkMSxcIik7XG4gICAgICAgIC8vIFJlbW92ZSB0cmFpbGluZyBjb21tYSBpZiBwcmVzZW50XG4gICAgICAgIGlmIChzbWFsbERpZ2V0cy5zbGljZSgtMSkgPT09IFwiLFwiKSBzbWFsbERpZ2V0cyA9IHNtYWxsRGlnZXRzLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgZm9ybWF0dGVkTnVtYiA9IFwiMC5cIiArIHNtYWxsRGlnZXRzO1xuICAgICAgICAvLyBBZGRzIG5lZ2l0aXZlcyBiYWNrIGluXG4gICAgICAgIGlmIChuZWdpdGl2ZSA9PSB0cnVlKSBmb3JtYXR0ZWROdW1iID0gXCItXCIgKyBmb3JtYXR0ZWROdW1iO1xuICAgICAgICAvLyBSZW1vdmUgdHJhaWxpbmcgY29tbWEgaWYgcHJlc2VudFxuICAgICAgICBpZiAoZm9ybWF0dGVkTnVtYi5zbGljZSgtMSkgPT09IFwiLlwiKSBmb3JtYXR0ZWROdW1iID0gZm9ybWF0dGVkTnVtYi5zbGljZSgwLCAtMSk7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWROdW1iO1xuICAgIH1cbn1cbmZ1bmN0aW9uICRiYTJhMDI2YTNmOGQyN2E3JHZhciRjb252ZXJ0SGV4KHByZUNvbnZlcnRlZCkge1xuICAgIGxldCBjb252ZXJ0ZWRTdHIgPSBwcmVDb252ZXJ0ZWQ7XG4gICAgaWYgKHByZUNvbnZlcnRlZC5sZW5ndGggJSAyKSBjb252ZXJ0ZWRTdHIgPSBcIjBcIiArIHByZUNvbnZlcnRlZDtcbiAgICBjb252ZXJ0ZWRTdHIgPSBCaWdJbnQoXCIweFwiICsgY29udmVydGVkU3RyKTtcbiAgICByZXR1cm4gY29udmVydGVkU3RyO1xufVxuZnVuY3Rpb24gJGJhMmEwMjZhM2Y4ZDI3YTckdmFyJGNvbnZlcnRVbml4KHByZUNvbnZlcnRlZCkge1xuICAgIGNvbnN0IHRpbWVJbk1pbGxzID0gcHJlQ29udmVydGVkICogMTAwMCAvLyBjb252ZXJ0IHRvIG1pbGlcbiAgICA7XG4gICAgbGV0IGN1cnJlbnRUaW1lWm9uZSA9IG5ldyBEYXRlKHRpbWVJbk1pbGxzKSAvLyBjb252ZXJ0IG5ldyB0aW1lXG4gICAgO1xuICAgIGNvbnN0IFVUQyA9IGN1cnJlbnRUaW1lWm9uZS50b1VUQ1N0cmluZygpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHdlZWtkYXk6IFwic2hvcnRcIixcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgICBzZWNvbmQ6IFwiMi1kaWdpdFwiLFxuICAgICAgICB0aW1lWm9uZU5hbWU6IFwic2hvcnRcIlxuICAgIH07XG4gICAgY3VycmVudFRpbWVab25lID0gY3VycmVudFRpbWVab25lLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUdCXCIsIG9wdGlvbnMpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRUaW1lWm9uZTogY3VycmVudFRpbWVab25lLFxuICAgICAgICBVVEM6IFVUQ1xuICAgIH07XG59XG4kYmEyYTAyNmEzZjhkMjdhNyRleHBvcnRzID0ge1xuICAgIGNvbnZlcnRXZWk6ICRiYTJhMDI2YTNmOGQyN2E3JHZhciRjb252ZXJ0V2VpLFxuICAgIGNvbnZlcnRIZXg6ICRiYTJhMDI2YTNmOGQyN2E3JHZhciRjb252ZXJ0SGV4LFxuICAgIGNvbnZlcnRVbml4OiAkYmEyYTAyNmEzZjhkMjdhNyR2YXIkY29udmVydFVuaXhcbn07XG5cblxudmFyICRiMGZlMWUwNjZlMzc5OTk2JHJlcXVpcmUkY29udmVydFdlaSA9ICRiYTJhMDI2YTNmOGQyN2E3JGV4cG9ydHMuY29udmVydFdlaTtcbnZhciAkYjBmZTFlMDY2ZTM3OTk5NiRyZXF1aXJlJGNvbnZlcnRIZXggPSAkYmEyYTAyNmEzZjhkMjdhNyRleHBvcnRzLmNvbnZlcnRIZXg7XG52YXIgJGIwZmUxZTA2NmUzNzk5OTYkcmVxdWlyZSRjb252ZXJ0VW5peCA9ICRiYTJhMDI2YTNmOGQyN2E3JGV4cG9ydHMuY29udmVydFVuaXg7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgcHJlQ29udmVydGVkO1xuICAgIGxldCBjb252ZXJzaW9uVHlwZTtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1xuICAgICAgICBcInNlbGVjdGVkU3RyXCIsXG4gICAgICAgIFwiY29udmVyc2lvblR5cGVcIlxuICAgIF0pLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgcHJlQ29udmVydGVkID0gcmVzdWx0LnNlbGVjdGVkU3RyO1xuICAgICAgICBjb252ZXJzaW9uVHlwZSA9IHJlc3VsdC5jb252ZXJzaW9uVHlwZTtcbiAgICAgICAgaWYgKGNvbnZlcnNpb25UeXBlID09PSBcIndlaVwiIHx8IGNvbnZlcnNpb25UeXBlID09PSBcImhleFwiKSBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1xuICAgICAgICAgICAgXCJkZWNpbWFsc1wiLFxuICAgICAgICAgICAgXCJkaXNwbGF5RGVjaW1hbHNcIlxuICAgICAgICBdKS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlEZWNpbWFsc1wiKS52YWx1ZSA9IHJlc3VsdC5kaXNwbGF5RGVjaW1hbHM7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlY2ltYWxzXCIpLnZhbHVlID0gcmVzdWx0LmRlY2ltYWxzO1xuICAgICAgICAgICAgbGV0IGNvbnZlcnRlZFdlaSA9IHByZUNvbnZlcnRlZDtcbiAgICAgICAgICAgIGlmIChjb252ZXJzaW9uVHlwZSA9PT0gXCJoZXhcIikgY29udmVydGVkV2VpID0gJGIwZmUxZTA2NmUzNzk5OTYkcmVxdWlyZSRjb252ZXJ0SGV4KGNvbnZlcnRlZFdlaSk7XG4gICAgICAgICAgICBjb252ZXJ0ZWRXZWkgPSAkYjBmZTFlMDY2ZTM3OTk5NiRyZXF1aXJlJGNvbnZlcnRXZWkoY29udmVydGVkV2VpLCByZXN1bHQuZGVjaW1hbHMsIHJlc3VsdC5kaXNwbGF5RGVjaW1hbHMpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb252ZXJ0ZWRTdHJcIikudGV4dENvbnRlbnQgPSBjb252ZXJ0ZWRXZWk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbHNlIGlmIChjb252ZXJzaW9uVHlwZSA9PT0gXCJ1bml4VGltZVwiKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlY2ltYWxzRm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBjb25zdCB7IGN1cnJlbnRUaW1lWm9uZTogY3VycmVudFRpbWVab25lLCBVVEM6IFVUQyB9ID0gJGIwZmUxZTA2NmUzNzk5OTYkcmVxdWlyZSRjb252ZXJ0VW5peChwcmVDb252ZXJ0ZWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRpbWVab25lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFVUQyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnZlcnRlZFN0clwiKS50ZXh0Q29udGVudCA9IGN1cnJlbnRUaW1lWm9uZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udmVydGVkU3RyMlwiKS50ZXh0Q29udGVudCA9IFVUQztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVjaW1hbHNGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKSAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvblxuICAgICAgICA7XG4gICAgICAgIGNvbnN0IGRlY2ltYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWNpbWFsc1wiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGlzcGxheURlY2ltYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5RGVjaW1hbHNcIikudmFsdWU7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XG4gICAgICAgICAgICBkZWNpbWFsczogZGVjaW1hbHMsXG4gICAgICAgICAgICBkaXNwbGF5RGVjaW1hbHM6IGRpc3BsYXlEZWNpbWFsc1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGNvbnZlcnRlZFdlaSA9IHByZUNvbnZlcnRlZDtcbiAgICAgICAgaWYgKGNvbnZlcnNpb25UeXBlID09PSBcImhleFwiKSBjb252ZXJ0ZWRXZWkgPSAkYjBmZTFlMDY2ZTM3OTk5NiRyZXF1aXJlJGNvbnZlcnRIZXgoY29udmVydGVkV2VpKTtcbiAgICAgICAgY29udmVydGVkV2VpID0gJGIwZmUxZTA2NmUzNzk5OTYkcmVxdWlyZSRjb252ZXJ0V2VpKGNvbnZlcnRlZFdlaSwgZGVjaW1hbHMsIGRpc3BsYXlEZWNpbWFscyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udmVydGVkU3RyXCIpLnRleHRDb250ZW50ID0gY29udmVydGVkV2VpO1xuICAgIH0pO1xufSk7XG5cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SnRZWEJ3YVc1bmN5STZJanRCUTBGQkxGTkJRVk1zYVVOQlFWY3NSMEZCUnl4RlFVRkZMRkZCUVZFc1JVRkJSU3hsUVVGbE8wbEJRemxETEVsQlFVa3NUVUZCVFN4UFFVRlBMRXRCUVVzN1NVRkRkRUlzU1VGQlNUdEpRVU5LTEVsQlFVazdTVUZEU2l4SlFVRkpPMGxCUTBvc1NVRkJTVHRKUVVWS0xFbEJRVWtzU1VGQlNTeFBRVUZQTEU5QlFVOHNTMEZCU3p0UlFVTjJRaXhOUVVGTkxFbEJRVWtzVlVGQlZUdFJRVU53UWl4WFFVRlhPMGxCUTJZc1QwRkRTU3hYUVVGWE8wbEJSMllzU1VGQlNTeEpRVUZKTEZOQlFWTXNWVUZCVlR0UlFVTjJRaXhqUVVGakxFbEJRVWtzVlVGQlZTeEhRVUZITEVsQlFVa3NVMEZCVXp0UlFVVTFReXcyUTBGQk5rTTdVVUZETjBNc1kwRkJZeXhaUVVGWkxFMUJRVTBzU1VGQlNTeFZRVUZWTEV0QlFVczdVVUZGYmtRc05rTkJRVFpETzFGQlF6ZERMR05CUVdNc1dVRkJXU3hSUVVGUkxGbEJRVms3VVVGRk9VTXNiVU5CUVcxRE8xRkJRMjVETEVsQlFVa3NXVUZCV1N4TlFVRk5MRkZCUVZFc1MwRkRNVUlzWTBGQll5eFpRVUZaTEUxQlFVMHNSMEZCUnp0UlFVZDJReXhuUkVGQlowUTdVVUZEYUVRc1kwRkJZeXhaUVVGWkxFMUJRVTBzU1VGQlNTeFZRVUZWTEV0QlFVczdVVUZGYmtRc05FSkJRVFJDTzFGQlF6VkNMR05CUVdNc1NVRkJTU3hWUVVGVkxFbEJRVWtzVTBGQlV5eFZRVUZWTEVsQlFVazdVVUZEZGtRc2JVSkJRVzFDTzFGQlEyNUNMR05CUVdNc1dVRkJXU3hWUVVGVkxFZEJRVWM3VVVGRGRrTXNOa05CUVRaRE8xRkJRemRETEdOQlFXTXNXVUZCV1N4UlFVRlJMRmxCUVZrN1VVRkZPVU1zYlVOQlFXMURPMUZCUTI1RExFbEJRVWtzV1VGQldTeE5RVUZOTEZGQlFWRXNTMEZETVVJc1kwRkJZeXhaUVVGWkxFMUJRVTBzUjBGQlJ6dFJRVWQyUXl4blFrRkJaMElzWTBGQll5eE5RVUZOTzFGQlJYQkRMSGxDUVVGNVFqdFJRVU42UWl4SlFVRkpMRmxCUVZrc1RVRkRXaXhuUWtGQlowSXNUVUZCVFR0UlFVY3hRaXh0UTBGQmJVTTdVVUZEYmtNc1NVRkJTU3hqUVVGakxFMUJRVTBzVVVGQlVTeExRVU0xUWl4blFrRkJaMElzWTBGQll5eE5RVUZOTEVkQlFVYzdVVUZITTBNc1QwRkJUenRKUVVOWUxFOUJRVTg3VVVGRFNDdzBRa0ZCTkVJN1VVRkROVUlzWTBGQll5eEpRVUZKTEZWQlFWVXNTVUZCU1N4VFFVRlRMRlZCUVZVc1NVRkJTVHRSUVVOMlJDeHRRa0ZCYlVJN1VVRkRia0lzWTBGQll5eFpRVUZaTEZWQlFWVXNSMEZCUnp0UlFVVjJReXhqUVVGakxGbEJRVmtzVTBGQlV5eHBRa0ZCYVVJN1VVRkZjRVFzTmtOQlFUWkRPMUZCUXpkRExHTkJRV01zV1VGQldTeFJRVUZSTEZsQlFWazdVVUZGT1VNc2JVTkJRVzFETzFGQlEyNURMRWxCUVVrc1dVRkJXU3hOUVVGTkxGRkJRVkVzUzBGRE1VSXNZMEZCWXl4WlFVRlpMRTFCUVUwc1IwRkJSenRSUVVkMlF5eG5Ra0ZCWjBJc1QwRkJUenRSUVVWMlFpeDVRa0ZCZVVJN1VVRkRla0lzU1VGQlNTeFpRVUZaTEUxQlExb3NaMEpCUVdkQ0xFMUJRVTA3VVVGSE1VSXNiVU5CUVcxRE8xRkJRMjVETEVsQlFVa3NZMEZCWXl4TlFVRk5MRkZCUVZFc1MwRkROVUlzWjBKQlFXZENMR05CUVdNc1RVRkJUU3hIUVVGSE8xRkJSek5ETEU5QlFVODdTVUZEV0R0QlFVTktPMEZCUTBFc1UwRkJVeXhwUTBGQlZ5eFpRVUZaTzBsQlF6VkNMRWxCUVVrc1pVRkJaVHRKUVVOdVFpeEpRVUZKTEdGQlFXRXNVMEZCVXl4SFFVTjBRaXhsUVVGbExFMUJRVTA3U1VGRmVrSXNaVUZCWlN4UFFVRlBMRTlCUVU4N1NVRkROMElzVDBGQlR6dEJRVU5ZTzBGQlJVRXNVMEZCVXl4clEwRkJXU3haUVVGWk8wbEJRemRDTEUxQlFVMHNZMEZCWXl4bFFVRmxMRXRCUVVzc2EwSkJRV3RDT3p0SlFVTXhSQ3hKUVVGSkxHdENRVUZyUWl4SlFVRkpMRXRCUVVzc1lVRkJZU3h0UWtGQmJVSTdPMGxCUXk5RUxFMUJRVTBzVFVGQlRTeG5Ra0ZCWjBJN1NVRkZOVUlzVFVGQlRTeFZRVUZWTzFGQlExb3NVMEZCVXp0UlFVTlVMRTFCUVUwN1VVRkRUaXhQUVVGUE8xRkJRMUFzUzBGQlN6dFJRVU5NTEUxQlFVMDdVVUZEVGl4UlFVRlJPMUZCUTFJc1VVRkJVVHRSUVVOU0xHTkJRV003U1VGRGJFSTdTVUZEUVN4clFrRkJhMElzWjBKQlFXZENMRzFDUVVGdFFpeFRRVUZUTzBsQlJUbEVMRTlCUVU4N2VVSkJRMGc3WVVGRFFUdEpRVU5LTzBGQlEwbzdRVUZGUVN3MFFrRkJhVUk3WjBKQlEySTdaMEpCUTBFN2FVSkJRMEU3UVVGRFNqczdPekpEUkROSVRUc3lRMEZCUVRzMFEwRkJRVHRCUVVWT0xGTkJRVk1zYVVKQlFXbENMRzlDUVVGdlFqdEpRVU14UXl4SlFVRkpPMGxCUTBvc1NVRkJTVHRKUVVWS0xFOUJRVThzVVVGQlVTeE5RVUZOTEVsQlFVazdVVUZCUXp0UlFVRmxPMHRCUVdsQ0xFVkJRVVVzUzBGQlN5eERRVUZETzFGQlF6bEVMR1ZCUVdVc1QwRkJUenRSUVVOMFFpeHBRa0ZCYVVJc1QwRkJUenRSUVVWNFFpeEpRVUZKTEcxQ1FVRnRRaXhUUVVGVExHMUNRVUZ0UWl4UFFVTXZReXhQUVVGUExGRkJRVkVzVFVGQlRTeEpRVUZKTzFsQlFVTTdXVUZCV1R0VFFVRnJRaXhGUVVGRkxFdEJRVXNzUTBGQlF6dFpRVU0xUkN4VFFVRlRMR1ZCUVdVc2JVSkJRVzFDTEZGQlFWRXNUMEZCVHp0WlFVTXhSQ3hUUVVGVExHVkJRV1VzV1VGQldTeFJRVUZSTEU5QlFVODdXVUZGYmtRc1NVRkJTU3hsUVVGbE8xbEJRMjVDTEVsQlFVa3NiVUpCUVcxQ0xFOUJRMjVDTEdWQlFXVXNjVU5CUVZjN1dVRkZPVUlzWlVGQlpTeHhRMEZCVnl4alFVRmpMRTlCUVU4c1ZVRkJWU3hQUVVGUE8xbEJRMmhGTEZOQlFWTXNaVUZCWlN4blFrRkJaMElzWTBGQll6dFJRVU14UkR0aFFVTkhMRWxCUVVrc2JVSkJRVzFDTEZsQlFWazdXVUZEZEVNc1UwRkJVeXhsUVVGbExHZENRVUZuUWl4TlFVRk5MRlZCUVZVN1dVRkRlRVFzVFVGQlRTeHRRa0ZCUlN4bFFVRmxMRTlCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzYzBOQlFWazdXVUZETjBNc1VVRkJVU3hKUVVGSk8xbEJRMW9zVVVGQlVTeEpRVUZKTzFsQlExb3NVMEZCVXl4bFFVRmxMR2RDUVVGblFpeGpRVUZqTzFsQlEzUkVMRk5CUVZNc1pVRkJaU3hwUWtGQmFVSXNZMEZCWXp0UlFVTXpSRHRKUVVOS08wbEJSVUVzVTBGQlV5eGxRVUZsTEdkQ1FVRm5RaXhwUWtGQmFVSXNWVUZCVlN4VFFVRlZMRXRCUVVzN1VVRkRPVVVzVFVGQlRTeHBRa0ZCYVVJc2MwTkJRWE5ET3p0UlFVTTNSQ3hOUVVGTkxGZEJRVmNzVTBGQlV5eGxRVUZsTEZsQlFWazdVVUZEY2tRc1RVRkJUU3hyUWtGQmEwSXNVMEZCVXl4bFFVRmxMRzFDUVVGdFFqdFJRVU51UlN4UFFVRlBMRkZCUVZFc1RVRkJUU3hKUVVGSk8xbEJRVVVzVlVGQlZUdFpRVUZWTEdsQ1FVRnBRanRSUVVGblFqdFJRVVZvUml4SlFVRkpMR1ZCUVdVN1VVRkRia0lzU1VGQlNTeHRRa0ZCYlVJc1QwRkRia0lzWlVGQlpTeHhRMEZCVnp0UlFVVTVRaXhsUVVGbExIRkRRVUZYTEdOQlFXTXNWVUZCVlR0UlFVTnNSQ3hUUVVGVExHVkJRV1VzWjBKQlFXZENMR05CUVdNN1NVRkRNVVE3UVVGRFNpSXNJbk52ZFhKalpYTWlPbHNpYzNKakwzQnZjSFZ3TG1weklpd2ljM0pqTDJOdmJuWmxjblJsY25NdWFuTWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWTI5dWMzUWdleUJqYjI1MlpYSjBWMlZwTENCamIyNTJaWEowU0dWNExDQmpiMjUyWlhKMFZXNXBlQ0I5SUQwZ2NtVnhkV2x5WlNnbkxpOWpiMjUyWlhKMFpYSnpKeWxjYmx4dVpHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQnNaWFFnY0hKbFEyOXVkbVZ5ZEdWa1hHNGdJQ0FnYkdWMElHTnZiblpsY25OcGIyNVVlWEJsWEc1Y2JpQWdJQ0JqYUhKdmJXVXVjM1J2Y21GblpTNXNiMk5oYkM1blpYUW9XeWR6Wld4bFkzUmxaRk4wY2ljc0lDZGpiMjUyWlhKemFXOXVWSGx3WlNkZEtTNTBhR1Z1S0NoeVpYTjFiSFFwSUQwK0lIdGNiaUFnSUNBZ0lDQWdjSEpsUTI5dWRtVnlkR1ZrSUQwZ2NtVnpkV3gwTG5ObGJHVmpkR1ZrVTNSeVhHNGdJQ0FnSUNBZ0lHTnZiblpsY25OcGIyNVVlWEJsSUQwZ2NtVnpkV3gwTG1OdmJuWmxjbk5wYjI1VWVYQmxYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHTnZiblpsY25OcGIyNVVlWEJsSUQwOVBTQW5kMlZwSnlCOGZDQmpiMjUyWlhKemFXOXVWSGx3WlNBOVBUMGdKMmhsZUNjcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOb2NtOXRaUzV6ZEc5eVlXZGxMbXh2WTJGc0xtZGxkQ2hiSjJSbFkybHRZV3h6Snl3Z0oyUnBjM0JzWVhsRVpXTnBiV0ZzY3lkZEtTNTBhR1Z1S0NoeVpYTjFiSFFwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnblpHbHpjR3hoZVVSbFkybHRZV3h6SnlrdWRtRnNkV1VnUFNCeVpYTjFiSFF1WkdsemNHeGhlVVJsWTJsdFlXeHpYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyUmxZMmx0WVd4ekp5a3VkbUZzZFdVZ1BTQnlaWE4xYkhRdVpHVmphVzFoYkhOY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JqYjI1MlpYSjBaV1JYWldrZ1BTQndjbVZEYjI1MlpYSjBaV1JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kyOXVkbVZ5YzJsdmJsUjVjR1VnUFQwOUlDZG9aWGduS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5abGNuUmxaRmRsYVNBOUlHTnZiblpsY25SSVpYZ29ZMjl1ZG1WeWRHVmtWMlZwS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNTJaWEowWldSWFpXa2dQU0JqYjI1MlpYSjBWMlZwS0dOdmJuWmxjblJsWkZkbGFTd2djbVZ6ZFd4MExtUmxZMmx0WVd4ekxDQnlaWE4xYkhRdVpHbHpjR3hoZVVSbFkybHRZV3h6S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RqYjI1MlpYSjBaV1JUZEhJbktTNTBaWGgwUTI5dWRHVnVkQ0E5SUdOdmJuWmxjblJsWkZkbGFWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGpiMjUyWlhKemFXOXVWSGx3WlNBOVBUMGdKM1Z1YVhoVWFXMWxKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyUmxZMmx0WVd4elJtOXliU2NwTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuYm05dVpTZGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSHNnWTNWeWNtVnVkRlJwYldWYWIyNWxMQ0JWVkVNZ2ZTQTlJR052Ym5abGNuUlZibWw0S0hCeVpVTnZiblpsY25SbFpDbGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktHTjFjbkpsYm5SVWFXMWxXbTl1WlNsY2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OdmJHVXViRzluS0ZWVVF5bGNiaUFnSUNBZ0lDQWdJQ0FnSUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RqYjI1MlpYSjBaV1JUZEhJbktTNTBaWGgwUTI5dWRHVnVkQ0E5SUdOMWNuSmxiblJVYVcxbFdtOXVaVnh1SUNBZ0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjJOdmJuWmxjblJsWkZOMGNqSW5LUzUwWlhoMFEyOXVkR1Z1ZENBOUlGVlVRMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU2xjYmx4dUlDQWdJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZGtaV05wYldGc2MwWnZjbTBuS1M1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkemRXSnRhWFFuTENCbWRXNWpkR2x2YmlBb1pYWmxiblFwSUh0Y2JpQWdJQ0FnSUNBZ1pYWmxiblF1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LU0F2THlCUWNtVjJaVzUwSUhSb1pTQmtaV1poZFd4MElHWnZjbTBnYzNWaWJXbHpjMmx2Ymx4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldOcGJXRnNjeUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RrWldOcGJXRnNjeWNwTG5aaGJIVmxYRzRnSUNBZ0lDQWdJR052Ym5OMElHUnBjM0JzWVhsRVpXTnBiV0ZzY3lBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0Nka2FYTndiR0Y1UkdWamFXMWhiSE1uS1M1MllXeDFaVnh1SUNBZ0lDQWdJQ0JqYUhKdmJXVXVjM1J2Y21GblpTNXNiMk5oYkM1elpYUW9leUJrWldOcGJXRnNjem9nWkdWamFXMWhiSE1zSUdScGMzQnNZWGxFWldOcGJXRnNjem9nWkdsemNHeGhlVVJsWTJsdFlXeHpJSDBwWEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJR052Ym5abGNuUmxaRmRsYVNBOUlIQnlaVU52Ym5abGNuUmxaRnh1SUNBZ0lDQWdJQ0JwWmlBb1kyOXVkbVZ5YzJsdmJsUjVjR1VnUFQwOUlDZG9aWGduS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MlpYSjBaV1JYWldrZ1BTQmpiMjUyWlhKMFNHVjRLR052Ym5abGNuUmxaRmRsYVNsY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmpiMjUyWlhKMFpXUlhaV2tnUFNCamIyNTJaWEowVjJWcEtHTnZiblpsY25SbFpGZGxhU3dnWkdWamFXMWhiSE1zSUdScGMzQnNZWGxFWldOcGJXRnNjeWxjYmlBZ0lDQWdJQ0FnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMk52Ym5abGNuUmxaRk4wY2ljcExuUmxlSFJEYjI1MFpXNTBJRDBnWTI5dWRtVnlkR1ZrVjJWcFhHNGdJQ0FnZlNsY2JuMHBYRzRpTENKbWRXNWpkR2x2YmlCamIyNTJaWEowVjJWcEtHNTFiU3dnWkdWamFXMWhiSE1zSUdScGMzQnNZWGxFWldOcGJXRnNjeWtnZTF4dUlDQWdJR3hsZENCemRISWdQU0JDYVdkSmJuUW9iblZ0S1M1MGIxTjBjbWx1WnlncFhHNGdJQ0FnYkdWMElIZG9iMnhsUkdsblpYUnpYRzRnSUNBZ2JHVjBJSE50WVd4c1JHbG5aWFJ6WEc0Z0lDQWdiR1YwSUdadmNtMWhkSFJsWkU1MWJXSmNiaUFnSUNCc1pYUWdibVZuYVhScGRtVmNibHh1SUNBZ0lHbG1JQ2h6ZEhJdVkyaGhja0YwS0RBcElEMDlQU0FuTFNjcElIdGNiaUFnSUNBZ0lDQWdjM1J5SUQwZ2MzUnlMbk4xWW5OMGNtbHVaeWd4S1Z4dUlDQWdJQ0FnSUNCdVpXZHBkR2wyWlNBOUlIUnlkV1ZjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnVaV2RwZEdsMlpTQTlJR1poYkhObFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tITjBjaTVzWlc1bmRHZ2dQaUJrWldOcGJXRnNjeWtnZTF4dUlDQWdJQ0FnSUNCM2FHOXNaVVJwWjJWMGN5QTlJSE4wY2k1emRXSnpkSEpwYm1jb01Dd2djM1J5TG14bGJtZDBhQ0F0SUdSbFkybHRZV3h6S1Z4dVhHNGdJQ0FnSUNBZ0lDOHZJRkpsZG1WeWMyVWdkR2hsSUhOMGNtbHVaeUJtYjNJZ1pXRnphV1Z5SUcxaGJtbHdkV3hoZEdsdmJseHVJQ0FnSUNBZ0lDQjNhRzlzWlVScFoyVjBjeUE5SUhkb2IyeGxSR2xuWlhSekxuTndiR2wwS0NjbktTNXlaWFpsY25ObEtDa3VhbTlwYmlnbkp5bGNibHh1SUNBZ0lDQWdJQ0F2THlCSmJuTmxjblFnWTI5dGJXRnpJR0ZtZEdWeUlHVjJaWEo1SUhSb2NtVmxJR05vWVhKaFkzUmxjbk5jYmlBZ0lDQWdJQ0FnZDJodmJHVkVhV2RsZEhNZ1BTQjNhRzlzWlVScFoyVjBjeTV5WlhCc1lXTmxLQzhvWEZ4a2V6TjlLUzluTENBbkpERXNKeWxjYmx4dUlDQWdJQ0FnSUNBdkx5QlNaVzF2ZG1VZ2RISmhhV3hwYm1jZ1kyOXRiV0VnYVdZZ2NISmxjMlZ1ZEZ4dUlDQWdJQ0FnSUNCcFppQW9kMmh2YkdWRWFXZGxkSE11YzJ4cFkyVW9MVEVwSUQwOVBTQW5MQ2NwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSGRvYjJ4bFJHbG5aWFJ6SUQwZ2QyaHZiR1ZFYVdkbGRITXVjMnhwWTJVb01Dd2dMVEVwWEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZMeUJTWlhabGNuTmxJSFJvWlNCemRISnBibWNnWW1GamF5QjBieUJwZEhNZ2IzSnBaMmx1WVd3Z2IzSmtaWEpjYmlBZ0lDQWdJQ0FnZDJodmJHVkVhV2RsZEhNZ1BTQjNhRzlzWlVScFoyVjBjeTV6Y0d4cGRDZ25KeWt1Y21WMlpYSnpaU2dwTG1wdmFXNG9KeWNwWEc1Y2JpQWdJQ0FnSUNBZ0x5OGdjMlZzWldOMGN5QnZibXg1SUhSb1pTQmtaV05wWVcxc2MxeHVJQ0FnSUNBZ0lDQnpiV0ZzYkVScFoyVjBjeUE5SUhOMGNpNXpkV0p6ZEhKcGJtY29jM1J5TG14bGJtZDBhQ0F0SUdSbFkybHRZV3h6TENCemRISXViR1Z1WjNSb0tWeHVJQ0FnSUNBZ0lDQXZMM1J5ZFc1allYUnBibWNnWkdsblpYUnpYRzRnSUNBZ0lDQWdJSE50WVd4c1JHbG5aWFJ6SUQwZ2MyMWhiR3hFYVdkbGRITXVjM1ZpYzNSeWFXNW5LREFzSUdScGMzQnNZWGxFWldOcGJXRnNjeWxjYmlBZ0lDQWdJQ0FnTHk4Z1NXNXpaWEowSUdOdmJXMWhjeUJoWm5SbGNpQmxkbVZ5ZVNCMGFISmxaU0JqYUdGeVlXTjBaWEp6WEc0Z0lDQWdJQ0FnSUhOdFlXeHNSR2xuWlhSeklEMGdjMjFoYkd4RWFXZGxkSE11Y21Wd2JHRmpaU2d2S0Z4Y1pIc3pmU2t2Wnl3Z0p5UXhMQ2NwWEc1Y2JpQWdJQ0FnSUNBZ0x5OGdVbVZ0YjNabElIUnlZV2xzYVc1bklHTnZiVzFoSUdsbUlIQnlaWE5sYm5SY2JpQWdJQ0FnSUNBZ2FXWWdLSE50WVd4c1JHbG5aWFJ6TG5Oc2FXTmxLQzB4S1NBOVBUMGdKeXduS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6YldGc2JFUnBaMlYwY3lBOUlITnRZV3hzUkdsblpYUnpMbk5zYVdObEtEQXNJQzB4S1Z4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdabTl5YldGMGRHVmtUblZ0WWlBOUlIZG9iMnhsUkdsblpYUnpJQ3NnSnk0bklDc2djMjFoYkd4RWFXZGxkSE5jYmx4dUlDQWdJQ0FnSUNBdkx5QkJaR1J6SUc1bFoybDBhWFpsY3lCaVlXTnJJR2x1WEc0Z0lDQWdJQ0FnSUdsbUlDaHVaV2RwZEdsMlpTQTlQU0IwY25WbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSnRZWFIwWldST2RXMWlJRDBnSnkwbklDc2dabTl5YldGMGRHVmtUblZ0WWx4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeThnVW1WdGIzWmxJSFJ5WVdsc2FXNW5JR052YlcxaElHbG1JSEJ5WlhObGJuUmNiaUFnSUNBZ0lDQWdhV1lnS0dadmNtMWhkSFJsWkU1MWJXSXVjMnhwWTJVb0xURXBJRDA5UFNBbkxpY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjbTFoZEhSbFpFNTFiV0lnUFNCbWIzSnRZWFIwWldST2RXMWlMbk5zYVdObEtEQXNJQzB4S1Z4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWnZjbTFoZEhSbFpFNTFiV0pjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJ6Wld4bFkzUnpJRzl1YkhrZ2RHaGxJR1JsWTJsaGJXeHpYRzRnSUNBZ0lDQWdJSE50WVd4c1JHbG5aWFJ6SUQwZ2MzUnlMbk4xWW5OMGNtbHVaeWh6ZEhJdWJHVnVaM1JvSUMwZ1pHVmphVzFoYkhNc0lITjBjaTVzWlc1bmRHZ3BYRzRnSUNBZ0lDQWdJQzh2ZEhKMWJtTmhkR2x1WnlCa2FXZGxkSE5jYmlBZ0lDQWdJQ0FnYzIxaGJHeEVhV2RsZEhNZ1BTQnpiV0ZzYkVScFoyVjBjeTV6ZFdKemRISnBibWNvTUN3Z1pHbHpjR3hoZVVSbFkybHRZV3h6S1Z4dVhHNGdJQ0FnSUNBZ0lITnRZV3hzUkdsblpYUnpJRDBnYzIxaGJHeEVhV2RsZEhNdWNHRmtVM1JoY25Rb1pHbHpjR3hoZVVSbFkybHRZV3h6TENBbk1DY3BYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1NXNXpaWEowSUdOdmJXMWhjeUJoWm5SbGNpQmxkbVZ5ZVNCMGFISmxaU0JqYUdGeVlXTjBaWEp6WEc0Z0lDQWdJQ0FnSUhOdFlXeHNSR2xuWlhSeklEMGdjMjFoYkd4RWFXZGxkSE11Y21Wd2JHRmpaU2d2S0Z4Y1pIc3pmU2t2Wnl3Z0p5UXhMQ2NwWEc1Y2JpQWdJQ0FnSUNBZ0x5OGdVbVZ0YjNabElIUnlZV2xzYVc1bklHTnZiVzFoSUdsbUlIQnlaWE5sYm5SY2JpQWdJQ0FnSUNBZ2FXWWdLSE50WVd4c1JHbG5aWFJ6TG5Oc2FXTmxLQzB4S1NBOVBUMGdKeXduS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6YldGc2JFUnBaMlYwY3lBOUlITnRZV3hzUkdsblpYUnpMbk5zYVdObEtEQXNJQzB4S1Z4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdabTl5YldGMGRHVmtUblZ0WWlBOUlDY3dMaWNnS3lCemJXRnNiRVJwWjJWMGMxeHVYRzRnSUNBZ0lDQWdJQzh2SUVGa1pITWdibVZuYVhScGRtVnpJR0poWTJzZ2FXNWNiaUFnSUNBZ0lDQWdhV1lnS0c1bFoybDBhWFpsSUQwOUlIUnlkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Y20xaGRIUmxaRTUxYldJZ1BTQW5MU2NnS3lCbWIzSnRZWFIwWldST2RXMWlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdkx5QlNaVzF2ZG1VZ2RISmhhV3hwYm1jZ1kyOXRiV0VnYVdZZ2NISmxjMlZ1ZEZ4dUlDQWdJQ0FnSUNCcFppQW9abTl5YldGMGRHVmtUblZ0WWk1emJHbGpaU2d0TVNrZ1BUMDlJQ2N1SnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05eWJXRjBkR1ZrVG5WdFlpQTlJR1p2Y20xaGRIUmxaRTUxYldJdWMyeHBZMlVvTUN3Z0xURXBYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm05eWJXRjBkR1ZrVG5WdFlseHVJQ0FnSUgxY2JuMWNibVoxYm1OMGFXOXVJR052Ym5abGNuUklaWGdvY0hKbFEyOXVkbVZ5ZEdWa0tTQjdYRzRnSUNBZ2JHVjBJR052Ym5abGNuUmxaRk4wY2lBOUlIQnlaVU52Ym5abGNuUmxaRnh1SUNBZ0lHbG1JQ2h3Y21WRGIyNTJaWEowWldRdWJHVnVaM1JvSUNVZ01pa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1MlpYSjBaV1JUZEhJZ1BTQW5NQ2NnS3lCd2NtVkRiMjUyWlhKMFpXUmNiaUFnSUNCOVhHNGdJQ0FnWTI5dWRtVnlkR1ZrVTNSeUlEMGdRbWxuU1c1MEtDY3dlQ2NnS3lCamIyNTJaWEowWldSVGRISXBYRzRnSUNBZ2NtVjBkWEp1SUdOdmJuWmxjblJsWkZOMGNseHVmVnh1WEc1bWRXNWpkR2x2YmlCamIyNTJaWEowVlc1cGVDaHdjbVZEYjI1MlpYSjBaV1FwSUh0Y2JpQWdJQ0JqYjI1emRDQjBhVzFsU1c1TmFXeHNjeUE5SUhCeVpVTnZiblpsY25SbFpDQXFJREV3TURBZ0x5OGdZMjl1ZG1WeWRDQjBieUJ0YVd4cFhHNGdJQ0FnYkdWMElHTjFjbkpsYm5SVWFXMWxXbTl1WlNBOUlHNWxkeUJFWVhSbEtIUnBiV1ZKYmsxcGJHeHpLU0F2THlCamIyNTJaWEowSUc1bGR5QjBhVzFsWEc0Z0lDQWdZMjl1YzNRZ1ZWUkRJRDBnWTNWeWNtVnVkRlJwYldWYWIyNWxMblJ2VlZSRFUzUnlhVzVuS0NsY2JseHVJQ0FnSUdOdmJuTjBJRzl3ZEdsdmJuTWdQU0I3WEc0Z0lDQWdJQ0FnSUhkbFpXdGtZWGs2SUNkemFHOXlkQ2NzWEc0Z0lDQWdJQ0FnSUhsbFlYSTZJQ2R1ZFcxbGNtbGpKeXhjYmlBZ0lDQWdJQ0FnYlc5dWRHZzZJQ2R6YUc5eWRDY3NYRzRnSUNBZ0lDQWdJR1JoZVRvZ0oyNTFiV1Z5YVdNbkxGeHVJQ0FnSUNBZ0lDQm9iM1Z5T2lBbk1pMWthV2RwZENjc1hHNGdJQ0FnSUNBZ0lHMXBiblYwWlRvZ0p6SXRaR2xuYVhRbkxGeHVJQ0FnSUNBZ0lDQnpaV052Ym1RNklDY3lMV1JwWjJsMEp5eGNiaUFnSUNBZ0lDQWdkR2x0WlZwdmJtVk9ZVzFsT2lBbmMyaHZjblFuTEZ4dUlDQWdJSDFjYmlBZ0lDQmpkWEp5Wlc1MFZHbHRaVnB2Ym1VZ1BTQmpkWEp5Wlc1MFZHbHRaVnB2Ym1VdWRHOU1iMk5oYkdWRVlYUmxVM1J5YVc1bktDZGxiaTFIUWljc0lHOXdkR2x2Ym5NcFhHNWNiaUFnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNCamRYSnlaVzUwVkdsdFpWcHZibVVzWEc0Z0lDQWdJQ0FnSUZWVVF5eGNiaUFnSUNCOVhHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnZTF4dUlDQWdJR052Ym5abGNuUlhaV2tzWEc0Z0lDQWdZMjl1ZG1WeWRFaGxlQ3hjYmlBZ0lDQmpiMjUyWlhKMFZXNXBlQ3hjYm4xY2JpSmRMQ0p1WVcxbGN5STZXMTBzSW5abGNuTnBiMjRpT2pNc0ltWnBiR1VpT2lKd2IzQjFjQzVJUVZOSVgxSkZSbDh4TnpSbVlUVTBOV1l5TVRjMlltRTNMbXB6TG0xaGNDSjlcbiIsImNvbnN0IHsgY29udmVydFdlaSwgY29udmVydEhleCwgY29udmVydFVuaXggfSA9IHJlcXVpcmUoJy4vY29udmVydGVycycpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHByZUNvbnZlcnRlZFxuICAgIGxldCBjb252ZXJzaW9uVHlwZVxuXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnc2VsZWN0ZWRTdHInLCAnY29udmVyc2lvblR5cGUnXSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHByZUNvbnZlcnRlZCA9IHJlc3VsdC5zZWxlY3RlZFN0clxuICAgICAgICBjb252ZXJzaW9uVHlwZSA9IHJlc3VsdC5jb252ZXJzaW9uVHlwZVxuXG4gICAgICAgIGlmIChjb252ZXJzaW9uVHlwZSA9PT0gJ3dlaScgfHwgY29udmVyc2lvblR5cGUgPT09ICdoZXgnKSB7XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydkZWNpbWFscycsICdkaXNwbGF5RGVjaW1hbHMnXSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXlEZWNpbWFscycpLnZhbHVlID0gcmVzdWx0LmRpc3BsYXlEZWNpbWFsc1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNpbWFscycpLnZhbHVlID0gcmVzdWx0LmRlY2ltYWxzXG5cbiAgICAgICAgICAgICAgICBsZXQgY29udmVydGVkV2VpID0gcHJlQ29udmVydGVkXG4gICAgICAgICAgICAgICAgaWYgKGNvbnZlcnNpb25UeXBlID09PSAnaGV4Jykge1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZWRXZWkgPSBjb252ZXJ0SGV4KGNvbnZlcnRlZFdlaSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udmVydGVkV2VpID0gY29udmVydFdlaShjb252ZXJ0ZWRXZWksIHJlc3VsdC5kZWNpbWFscywgcmVzdWx0LmRpc3BsYXlEZWNpbWFscylcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udmVydGVkU3RyJykudGV4dENvbnRlbnQgPSBjb252ZXJ0ZWRXZWlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblR5cGUgPT09ICd1bml4VGltZScpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWNpbWFsc0Zvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICBjb25zdCB7IGN1cnJlbnRUaW1lWm9uZSwgVVRDIH0gPSBjb252ZXJ0VW5peChwcmVDb252ZXJ0ZWQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGltZVpvbmUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhVVEMpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udmVydGVkU3RyJykudGV4dENvbnRlbnQgPSBjdXJyZW50VGltZVpvbmVcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb252ZXJ0ZWRTdHIyJykudGV4dENvbnRlbnQgPSBVVENcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVjaW1hbHNGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb25cbiAgICAgICAgY29uc3QgZGVjaW1hbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVjaW1hbHMnKS52YWx1ZVxuICAgICAgICBjb25zdCBkaXNwbGF5RGVjaW1hbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheURlY2ltYWxzJykudmFsdWVcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgZGVjaW1hbHM6IGRlY2ltYWxzLCBkaXNwbGF5RGVjaW1hbHM6IGRpc3BsYXlEZWNpbWFscyB9KVxuXG4gICAgICAgIGxldCBjb252ZXJ0ZWRXZWkgPSBwcmVDb252ZXJ0ZWRcbiAgICAgICAgaWYgKGNvbnZlcnNpb25UeXBlID09PSAnaGV4Jykge1xuICAgICAgICAgICAgY29udmVydGVkV2VpID0gY29udmVydEhleChjb252ZXJ0ZWRXZWkpXG4gICAgICAgIH1cbiAgICAgICAgY29udmVydGVkV2VpID0gY29udmVydFdlaShjb252ZXJ0ZWRXZWksIGRlY2ltYWxzLCBkaXNwbGF5RGVjaW1hbHMpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb252ZXJ0ZWRTdHInKS50ZXh0Q29udGVudCA9IGNvbnZlcnRlZFdlaVxuICAgIH0pXG59KVxuIiwiZnVuY3Rpb24gY29udmVydFdlaShudW0sIGRlY2ltYWxzLCBkaXNwbGF5RGVjaW1hbHMpIHtcbiAgICBsZXQgc3RyID0gQmlnSW50KG51bSkudG9TdHJpbmcoKVxuICAgIGxldCB3aG9sZURpZ2V0c1xuICAgIGxldCBzbWFsbERpZ2V0c1xuICAgIGxldCBmb3JtYXR0ZWROdW1iXG4gICAgbGV0IG5lZ2l0aXZlXG5cbiAgICBpZiAoc3RyLmNoYXJBdCgwKSA9PT0gJy0nKSB7XG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMSlcbiAgICAgICAgbmVnaXRpdmUgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmVnaXRpdmUgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmIChzdHIubGVuZ3RoID4gZGVjaW1hbHMpIHtcbiAgICAgICAgd2hvbGVEaWdldHMgPSBzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSBkZWNpbWFscylcblxuICAgICAgICAvLyBSZXZlcnNlIHRoZSBzdHJpbmcgZm9yIGVhc2llciBtYW5pcHVsYXRpb25cbiAgICAgICAgd2hvbGVEaWdldHMgPSB3aG9sZURpZ2V0cy5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpXG5cbiAgICAgICAgLy8gSW5zZXJ0IGNvbW1hcyBhZnRlciBldmVyeSB0aHJlZSBjaGFyYWN0ZXJzXG4gICAgICAgIHdob2xlRGlnZXRzID0gd2hvbGVEaWdldHMucmVwbGFjZSgvKFxcZHszfSkvZywgJyQxLCcpXG5cbiAgICAgICAgLy8gUmVtb3ZlIHRyYWlsaW5nIGNvbW1hIGlmIHByZXNlbnRcbiAgICAgICAgaWYgKHdob2xlRGlnZXRzLnNsaWNlKC0xKSA9PT0gJywnKSB7XG4gICAgICAgICAgICB3aG9sZURpZ2V0cyA9IHdob2xlRGlnZXRzLnNsaWNlKDAsIC0xKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV2ZXJzZSB0aGUgc3RyaW5nIGJhY2sgdG8gaXRzIG9yaWdpbmFsIG9yZGVyXG4gICAgICAgIHdob2xlRGlnZXRzID0gd2hvbGVEaWdldHMuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKVxuXG4gICAgICAgIC8vIHNlbGVjdHMgb25seSB0aGUgZGVjaWFtbHNcbiAgICAgICAgc21hbGxEaWdldHMgPSBzdHIuc3Vic3RyaW5nKHN0ci5sZW5ndGggLSBkZWNpbWFscywgc3RyLmxlbmd0aClcbiAgICAgICAgLy90cnVuY2F0aW5nIGRpZ2V0c1xuICAgICAgICBzbWFsbERpZ2V0cyA9IHNtYWxsRGlnZXRzLnN1YnN0cmluZygwLCBkaXNwbGF5RGVjaW1hbHMpXG4gICAgICAgIC8vIEluc2VydCBjb21tYXMgYWZ0ZXIgZXZlcnkgdGhyZWUgY2hhcmFjdGVyc1xuICAgICAgICBzbWFsbERpZ2V0cyA9IHNtYWxsRGlnZXRzLnJlcGxhY2UoLyhcXGR7M30pL2csICckMSwnKVxuXG4gICAgICAgIC8vIFJlbW92ZSB0cmFpbGluZyBjb21tYSBpZiBwcmVzZW50XG4gICAgICAgIGlmIChzbWFsbERpZ2V0cy5zbGljZSgtMSkgPT09ICcsJykge1xuICAgICAgICAgICAgc21hbGxEaWdldHMgPSBzbWFsbERpZ2V0cy5zbGljZSgwLCAtMSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdHRlZE51bWIgPSB3aG9sZURpZ2V0cyArICcuJyArIHNtYWxsRGlnZXRzXG5cbiAgICAgICAgLy8gQWRkcyBuZWdpdGl2ZXMgYmFjayBpblxuICAgICAgICBpZiAobmVnaXRpdmUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9ybWF0dGVkTnVtYiA9ICctJyArIGZvcm1hdHRlZE51bWJcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0cmFpbGluZyBjb21tYSBpZiBwcmVzZW50XG4gICAgICAgIGlmIChmb3JtYXR0ZWROdW1iLnNsaWNlKC0xKSA9PT0gJy4nKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWROdW1iID0gZm9ybWF0dGVkTnVtYi5zbGljZSgwLCAtMSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWROdW1iXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2VsZWN0cyBvbmx5IHRoZSBkZWNpYW1sc1xuICAgICAgICBzbWFsbERpZ2V0cyA9IHN0ci5zdWJzdHJpbmcoc3RyLmxlbmd0aCAtIGRlY2ltYWxzLCBzdHIubGVuZ3RoKVxuICAgICAgICAvL3RydW5jYXRpbmcgZGlnZXRzXG4gICAgICAgIHNtYWxsRGlnZXRzID0gc21hbGxEaWdldHMuc3Vic3RyaW5nKDAsIGRpc3BsYXlEZWNpbWFscylcblxuICAgICAgICBzbWFsbERpZ2V0cyA9IHNtYWxsRGlnZXRzLnBhZFN0YXJ0KGRpc3BsYXlEZWNpbWFscywgJzAnKVxuXG4gICAgICAgIC8vIEluc2VydCBjb21tYXMgYWZ0ZXIgZXZlcnkgdGhyZWUgY2hhcmFjdGVyc1xuICAgICAgICBzbWFsbERpZ2V0cyA9IHNtYWxsRGlnZXRzLnJlcGxhY2UoLyhcXGR7M30pL2csICckMSwnKVxuXG4gICAgICAgIC8vIFJlbW92ZSB0cmFpbGluZyBjb21tYSBpZiBwcmVzZW50XG4gICAgICAgIGlmIChzbWFsbERpZ2V0cy5zbGljZSgtMSkgPT09ICcsJykge1xuICAgICAgICAgICAgc21hbGxEaWdldHMgPSBzbWFsbERpZ2V0cy5zbGljZSgwLCAtMSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdHRlZE51bWIgPSAnMC4nICsgc21hbGxEaWdldHNcblxuICAgICAgICAvLyBBZGRzIG5lZ2l0aXZlcyBiYWNrIGluXG4gICAgICAgIGlmIChuZWdpdGl2ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWROdW1iID0gJy0nICsgZm9ybWF0dGVkTnVtYlxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRyYWlsaW5nIGNvbW1hIGlmIHByZXNlbnRcbiAgICAgICAgaWYgKGZvcm1hdHRlZE51bWIuc2xpY2UoLTEpID09PSAnLicpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZE51bWIgPSBmb3JtYXR0ZWROdW1iLnNsaWNlKDAsIC0xKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZE51bWJcbiAgICB9XG59XG5mdW5jdGlvbiBjb252ZXJ0SGV4KHByZUNvbnZlcnRlZCkge1xuICAgIGxldCBjb252ZXJ0ZWRTdHIgPSBwcmVDb252ZXJ0ZWRcbiAgICBpZiAocHJlQ29udmVydGVkLmxlbmd0aCAlIDIpIHtcbiAgICAgICAgY29udmVydGVkU3RyID0gJzAnICsgcHJlQ29udmVydGVkXG4gICAgfVxuICAgIGNvbnZlcnRlZFN0ciA9IEJpZ0ludCgnMHgnICsgY29udmVydGVkU3RyKVxuICAgIHJldHVybiBjb252ZXJ0ZWRTdHJcbn1cblxuZnVuY3Rpb24gY29udmVydFVuaXgocHJlQ29udmVydGVkKSB7XG4gICAgY29uc3QgdGltZUluTWlsbHMgPSBwcmVDb252ZXJ0ZWQgKiAxMDAwIC8vIGNvbnZlcnQgdG8gbWlsaVxuICAgIGxldCBjdXJyZW50VGltZVpvbmUgPSBuZXcgRGF0ZSh0aW1lSW5NaWxscykgLy8gY29udmVydCBuZXcgdGltZVxuICAgIGNvbnN0IFVUQyA9IGN1cnJlbnRUaW1lWm9uZS50b1VUQ1N0cmluZygpXG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB3ZWVrZGF5OiAnc2hvcnQnLFxuICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgICAgc2Vjb25kOiAnMi1kaWdpdCcsXG4gICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0JyxcbiAgICB9XG4gICAgY3VycmVudFRpbWVab25lID0gY3VycmVudFRpbWVab25lLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tR0InLCBvcHRpb25zKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFRpbWVab25lLFxuICAgICAgICBVVEMsXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb252ZXJ0V2VpLFxuICAgIGNvbnZlcnRIZXgsXG4gICAgY29udmVydFVuaXgsXG59XG4iXSwibmFtZXMiOlsiJGJhMmEwMjZhM2Y4ZDI3YTckZXhwb3J0cyIsIiRiMGZlMWUwNjZlMzc5OTk2JHJlcXVpcmUkY29udmVydFdlaSIsImNvbnZlcnRXZWkiLCJudW0iLCJkZWNpbWFscyIsImRpc3BsYXlEZWNpbWFscyIsIndob2xlRGlnZXRzIiwic21hbGxEaWdldHMiLCJmb3JtYXR0ZWROdW1iIiwibmVnaXRpdmUiLCJzdHIiLCJCaWdJbnQiLCJ0b1N0cmluZyIsImNoYXJBdCIsInN1YnN0cmluZyIsImxlbmd0aCIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJyZXBsYWNlIiwic2xpY2UiLCJwYWRTdGFydCIsImNvbnZlcnRIZXgiLCJwcmVDb252ZXJ0ZWQiLCJjb252ZXJ0ZWRTdHIiLCJjb252ZXJ0VW5peCIsImN1cnJlbnRUaW1lWm9uZSIsIkRhdGUiLCJVVEMiLCJ0b1VUQ1N0cmluZyIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwidGltZVpvbmVOYW1lIiwiJGIwZmUxZTA2NmUzNzk5OTYkcmVxdWlyZSRjb252ZXJ0SGV4IiwiJGIwZmUxZTA2NmUzNzk5OTYkcmVxdWlyZSRjb252ZXJ0VW5peCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnZlcnNpb25UeXBlIiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwidGhlbiIsInJlc3VsdCIsInNlbGVjdGVkU3RyIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImNvbnZlcnRlZFdlaSIsInRleHRDb250ZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXQiXSwidmVyc2lvbiI6MywiZmlsZSI6InBvcHVwLkhBU0hfUkVGXzE3NGZhNTQ1ZjIxNzZiYTcuanMubWFwIn0=