const dom = document;
dom.select = dom.querySelector;
dom.selectAll = dom.querySelectorAll;

const root_div = dom.select("#root");
const plus_btn = dom.select("#plus_btn");
const minus_btn = dom.select("#minus_btn");
const zero_btn = dom.select("#zero_btn");
// 找id要用＃ 找class用.

// 初始化
root_div.innerHTML = 0;

const plus = (e) => {
    const origin_value = root_div.innerHTML;
    root_div.innerHTML = +origin_value + 1;
};
const minus = (e) => {
    const origin_value = root_div.innerHTML;
    root_div.innerHTML = +origin_value - 1;
};
const zero = (e) => {
    const origin_value = root_div.innerHTML;
    root_div.innerHTML = 0;
};

plus_btn.addEventListener("click", plus);
minus_btn.addEventListener("click", minus);
zero_btn.addEventListener("click", zero);
