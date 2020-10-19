window.onload = function () {
    var stat1id = document.getElementById("stat1");
    var stat4sprint2id = document.getElementById("stat4-sprint2");

    // hide both on initial load
    // stat1id.style.display = "none";
    // stat4sprint2id.style.display = "none";

    var arr = ["stat1", "stat4-sprint2"]
    var sorted_arr = arr.sort(() => Math.random() - 0.5);

    var stat_show = document.getElementById(sorted_arr[0]);
    var stat_hide = document.getElementById(sorted_arr[1]);

    stat_show.style.display = "block";
    stat_hide.style.display = "none";

    var stat2id = document.getElementById("stat2");
    var stat5sprint2id = document.getElementById("stat5-sprint2");

    // stat2id.style.display = "none";
    // stat5sprint2id.style.display = "none";

    var arr2 = ["stat2", "stat5-sprint2"]
    var sorted_arr2 = arr2.sort(() => Math.random() - 0.5);

    var stat_hide2 = document.getElementById(sorted_arr2[0]);
    var stat_show2 = document.getElementById(sorted_arr2[1]);

    stat_hide2.style.display = "none";
    stat_show2.style.display = "block";
};