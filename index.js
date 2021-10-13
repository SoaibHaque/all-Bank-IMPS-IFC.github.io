const Selector = ele => document.querySelector(ele),
    SelectorAll = eleAll => document.querySelectorAll(eleAll),
    newEle = newele => document.createElement(newele),
    hrefIndex = href => window.location.href.indexOf(href),
    lsGet = item => localStorage.getItem(item),
    lsSet = (key, value) => localStorage.setItem(key, value),
    lsRem = item => localStorage.removeItem(item),
    sI = (fun, time) => setInterval(fun, time),
    sT = (fun, time) => setTimeout(fun, time),
    cI = intervaliable => clearInterval(intervaliable),
    cT = intervaliable => clearTimeout(intervaliable),
    docLis = (eve, fun) => document.addEventListener(eve, fun);

// changes occur after select bank

let copyIFC = () => {
    Selector('#ifc').select();
    document.execCommand("copy");
}

let ifcCode = (v) => {
    Selector('#ifc').value = v;
}

let afterSelect = (v) => {
    let value = v.split("_");
    Selector("#search").value = value[0];
    ifcCode(value[1]);
}

Selector('#search').onchange = () => afterSelect(Selector('#search').value);

Selector('#search').onfocus = () => Selector('#search').select();

Selector('#ifc').onfocus = () => copyIFC();