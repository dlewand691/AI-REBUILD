

function shuffle_stat(stat1, stat2) { 
    var stat1_id = document.getElementById(stat1);
    var stat2_id = document.getElementById(stat2);
    
    var arr = [stat1_id, stat2_id]
    var sorted_arr = arr.sort(() => Math.random() - 0.5);
    return sorted_arr;
} 

function display_stat(shuffled_stat_arr){
    shuffled_stat_arr[0].style.display = "block";
    shuffled_stat_arr[1].style.display = "none";
}

window.onload = function () {
    var stat_1_4 = shuffle_stat("stat1", "stat4-sprint2");
    var stat_2_5 = shuffle_stat("stat2", "stat5-sprint2")

    display_stat(stat_1_4)
    display_stat(stat_2_5)
}
