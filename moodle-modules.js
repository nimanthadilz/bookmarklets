// javascript:var s="%s";t="",t+="%s",nurl="https://online.uom.lk/";var paths={dm:"21762",aa:"21756",cp:"21757",ob:"21716",ml:"21760",dp:"20371",hci:"20293",rr:"20290",pp:"20289",ind:"18263",sec:"18167",cse:"14942",net:"17155",tw:"17159",ment:"16359"};args=[t];nurl+=args[0]in paths?"course/view.php?id="+paths[args[0]]:"my";location.replace(nurl,"<BR>");

var s = "%s";

nurl = "https://online.uom.lk/";
var paths = {
    // 6th sem
    ind: "18263",
    hci: "20293",
    pp: "20289",
    rr: "20290",
    wm: "20370",

    // 7th sem
    dm: "21762",
    aa: "21756",
    cp: "21757",
    ob: "21716",
    ml: "21760",
};

nurl += !(s in paths) ? "my" : "course/view.php?id=" + paths[s];
location.replace(nurl, "<BR>");
