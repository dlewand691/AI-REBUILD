

function shufflestat(stat1, stat2) { 
    var stat_1 = document.getElementById(stat1);
    var stat_2 = document.getElementById(stat2);
    
    var arr = [stat_1, stat_2]
    var sortedArr = arr.sort(() => Math.random() - 0.5);
    return sortedArr;
} 

function displayStat(shuffledStatArr){
    shuffledStatArr[0].style.display = "block";
    shuffledStatArr[1].style.display = "none";
}

window.onload = function () {
    var stat_1_4 = shufflestat("stat1", "stat4-sprint2");
    var stat_2_5 = shufflestat("stat2", "stat5-sprint2")

    displayStat(stat_1_4)
    displayStat(stat_2_5)
}
