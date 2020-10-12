
export function setLanguage() {

  if (localStorage.getItem("language") === "english") {
    var x, i;
    x = document.querySelectorAll(".danish");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    var y, ii;
    y = document.querySelectorAll(".english");
    for (ii = 0; ii < x.length; ii++) {
      y[ii].style.display = "block";
    }
  }

  else if (localStorage.getItem("language") === "danish") {
    var xy, iii;
    xy = document.querySelectorAll(".danish");
    for (iii = 0; iii < xy.length; iii++) {
      xy[iii].style.display = "block";
    }
    var yx, iiii;
    yx = document.querySelectorAll(".english");
    for (iiii = 0; iiii < yx.length; iiii++) {
      yx[iiii].style.display = "none";
    }
    localStorage.setItem("language", "danish")
  }
}

