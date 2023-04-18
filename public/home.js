let amount = parseInt(document.querySelector("#amount").value);
let totalTime = parseInt(document.querySelector("#time").value);
let finalAns = document.querySelector("#ans");
let test = document.querySelector("#test");
let ans_cover = document.querySelector(".analysis");
let ReturnInSip = 0;
let Return = 0;
let cheek = false;
let testItem = "";
var amountANdTimeUpdate = () => {
  cheek = true;
  amount = parseInt(document.querySelector("#amount").value);
  totalTime = parseInt(document.querySelector("#time").value);
  test.innerHTML = testItem;
};
const calculate = () => {
  ReturnInSip = (amount * Math.pow(1.15, totalTime)).toFixed(2);
  finalAns.innerHTML = ReturnInSip + "$";
  renderList();
  ans_cover.style.display = "block";
};
const calculateInterest = (i) => {
  Return = (amount * Math.pow(parseFloat(i), totalTime)).toFixed(2);
  return Return;
};
let fundList = [
  {
    id: 1,
    name: "ICICI Predential Equity & Debt Fund",
    risk:"high",
    interestLow: 1.12,
    interestHigh: 1.15,
    categoryAvg: 1.121,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneMonthAvg: 1.0252,
    oneMonthAvg: 1.0252,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
  {
    id: 2,
    name: "Kotak Tax Saver Fund Direct-Growth ",
    risk:"high",
    interestLow: 1.12,
    interestHigh: 1.15,
    categoryAvg: 12.1,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneMonthAvg: 1.0252,
    oneMonthAvg: 1.0252,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
  {
    id: 3,
    name: "Mirae Asset Tax Saver Fund Direct-Growth",
    risk:"high",
    interestLow: 1.12,
    interestHigh: 1.15,
    categoryAvg: 12.1,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneMonthAvg: 1.0252,
    oneMonthAvg: 1.0252,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
  {
    id: 4,
    name: "Canara Robeco Equity Tax Saver Direct- Growth",
    risk:"very high",
    interestLow: 1.12,
    interestHigh: 1.15,
    categoryAvg: 12.1,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneMonthAvg: 1.0252,
    oneMonthAvg: 1.0252,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
  {
    id: 5,
    name: "DSP Tax Saver Direct Plan-Growth",
    risk:"very high",
    interestLow: 1.12,
    interestHigh: 1.15,
    categoryAvg: 12.1,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneMonthAvg: 1.0252,
    oneMonthAvg: 1.0252,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
  {
    id: 6,
    name: "Edelweiss Aggressive Hybrid Fund Direct - Growth",
    risk:"very high",
    interestLow: 1.12,
    interestHigh: 1.15,
    categoryAvg: 12.1,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneMonthAvg: 1.0252,
    oneMonthAvg: 1.0252,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
  {
    id: 7,
    name: "Baroda BNP Paribas Aggressive Hybrid Fund Direct - Growth",
    risk:"very high",
    interestLow: 1.12,
    interestHigh: 1.15,
    categoryAvg: 12.1,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneMonthAvg: 1.0252,
    oneMonthAvg: 1.0252,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
  {
    id: 8,
    name: "Motilal Oswal Long Term Equity Fund Direct-Growth",
    risk:"very high",
    interestLow: 1.12,
    interestHigh: 1.15,
    categoryAvg: 12.1,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneMonthAvg: 1.0252,
    oneMonthAvg: 1.0252,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
  {
    id: 9,
    name: "Mirae Asset Hybrid Equity Fund Direct-Growth",
    risk:"very high",
    interestLow: 1.12,
    interestHigh: 1.15,
    categoryAvg: 12.1,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneMonthAvg: 1.0252,
    oneMonthAvg: 1.0252,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
  {
    id: 10,
    name: "Canara Robeco Equity Hybrid Fund Direct-Growth",
    risk:"very high",
    interestLow: 1.12,
    interestHigh: 1.15,
    categoryAvg: 12.1,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneMonthAvg: 1.0252,
    oneMonthAvg: 1.0252,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
];
const renderList = () => {
  const testItem = fundList
    .map((e) => {
      return ` <section class="analysis" key=${e.id}> 
        <div class="ans-cover"> 
        <b class="ans-text">${e.name}</b> 
        <b class="ans-text">
      ${(e.interestLow * 100 - 100).toFixed(2)}-${(
        e.interestHigh * 100 -
        100
      ).toFixed(2)}%</b> 
      <b id="ans">${parseFloat(calculateInterest(e.interestHigh))}</b> 
      </div>
      </section> `;
    })
    .join("");
  test.innerHTML = testItem;
};
