function shufflestat(t,s){return[document.getElementById(t),document.getElementById(s)].sort(()=>Math.random()-.5)}function displayStat(t){t[0].style.display="block",t[1].style.display="none"}window.onload=function(){var t=shufflestat("stat1","stat4-sprint2"),s=shufflestat("stat2","stat5-sprint2");displayStat(t),displayStat(s)};
//# sourceMappingURL=toggle-stat-min.js.map