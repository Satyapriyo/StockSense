// import fundData from "./data";
let amount = parseInt(document.querySelector("#amount").value);
let totalTime = parseInt(document.querySelector("#time").value);
let finalAns = document.querySelector("#ans");
let test = document.querySelector("#test");
let ans_cover = document.querySelector(".analysis");
let hide = document.querySelector(".hide");
let title = document.querySelector(".title");
let ReturnInSip = 0;
let Return = 0;
let cheek = false;
let testItem = "";
// alert(fundData);
var amountANdTimeUpdate = () => {
  cheek = true;
  amount = parseInt(document.querySelector("#amount").value);
  totalTime = parseInt(document.querySelector("#time").value);
  test.innerHTML = testItem;
};
const calculate = () => {
  hide.style.display = "block";
  // ReturnInSip = (amount * Math.pow(1.15, totalTime)).toFixed(2);
  // finalAns.innerHTML = ReturnInSip + "$";
  renderList();
  ans_cover.style.display = "block";
  title.style.display = "block";
};
const calculateInterest = (i) => {
  let interest = i;
  interest = interest / 100 + 1;
  Return = (amount * Math.pow(parseFloat(interest), totalTime)).toFixed(2);
  return Return;
};
let lowRiskFunds = [
  {
    id: 1,
    name: "Quant Multi Asset Fund Direct-Growth",
    risk: "moderate high",
    interestLow: 12,
    interestHigh: 13.91,
    categoryAvg: 11.95,
    oneMonthAvg: 4.8,
    threeMonthAvg: 2.45,
    sixMonthAvg: 3.1,
    oneYearAvg: 8.92,
    threeYearAvg: 38.44,
    fiveYearAvg: 21.65,
    start: 5,
  },
  {
    id: 2,
    name: "ICICI Prudential Short Term Fund Direct Plan-Growth",
    risk: "moderate",
    interestLow: 12,
    interestHigh: 8.59,
    categoryAvg: 7.72,
    oneMonthAvg: 1.01,
    threeMonthAvg: 2.34,
    sixMonthAvg: 4.26,
    oneYearAvg: 8.18,
    threeYearAvg: 7.21,
    fiveYearAvg: 8,
    start: 5,
  },
  {
    id: 3,
    name: "Aditya Birla Sun Life Short Term Direct Fund -Growth",
    risk: "moderate high",
    interestLow: 12,
    interestHigh: 8.73,
    categoryAvg: 7.72,
    oneMonthAvg: 1,
    threeMonthAvg: 2.25,
    sixMonthAvg: 4.15,
    oneYearAvg: 7.21,
    threeYearAvg: 7.63,
    fiveYearAvg: 7.81,
    start: 5,
  },
  {
    id: 4,
    name: "Quant Multi Asset Fund Direct-Growth",
    risk: "moderate high",
    interestLow: 12,
    interestHigh: 13.91,
    categoryAvg: 11.95,
    oneMonthAvg: 4.8,
    threeMonthAvg: 2.45,
    sixMonthAvg: 3.1,
    oneYearAvg: 8.92,
    threeYearAvg: 38.44,
    fiveYearAvg: 21.65,
    start: 5,
  },
];
let fundList = [
  {
    id: 1,
    name: "ICICI Predential Equity & Debt Fund Direct Growth",
    risk: "high",
    interestLow: 12,
    interestHigh: 18.32,
    categoryAvg: 13.9,
    oneMonthAvg: 2.52,
    threeMonthAvg: 0.9,
    sixMonthAvg: 4.81,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
    start: 5,
  },
  {
    id: 2,
    name: "Kotak Tax Saver Fund Direct-Growth ",
    risk: "high",
    interestLow: 12,
    interestHigh: 16.85,
    categoryAvg: 15.5,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
    start: 5,
  },
  {
    id: 3,
    name: "Mirae Asset Tax Saver Fund Direct-Growth",
    risk: "high",
    interestLow: 12,
    interestHigh: 16.68,
    categoryAvg: 10.97,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
  {
    id: 4,
    name: "Canara Robeco Equity Tax Saver Direct- Growth",
    risk: "very high",
    interestLow: 12,
    interestHigh: 16.4,
    categoryAvg: 15.5,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
  {
    id: 5,
    name: "DSP Tax Saver Direct Plan-Growth",
    risk: "very high",
    interestLow: 12,
    interestHigh: 15.75,
    categoryAvg: 15.5,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
  {
    id: 6,
    name: "Edelweiss Aggressive Hybrid Fund Direct - Growth",
    risk: "very high",
    interestLow: 12,
    interestHigh: 15.36,
    categoryAvg: 13.83,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
  {
    id: 7,
    name: "Baroda BNP Paribas Aggressive Hybrid Fund Direct - Growth",
    risk: "very high",
    interestLow: 12,
    interestHigh: 13.76,
    categoryAvg: 10.1,
    oneMonthAvg: 1.0252,
    threeMonthAvg: 1.0009,
    sixMonthAvg: 1.0481,
    oneYearAvg: 1.0606,
    threeYearAvg: 1.2842,
    fiveYearAvg: 1.1446,
  },
];
const renderList = () => {
  const testItem = fundList
    .map((e) => {
      return ` <section class="analysis" key=${e.id}> 
        <div class="ans-cover " data-aos="fade-up"> 
        <b class="ans-text">${e.name}</b> 
        <b class="ans-text">
      ${e.interestHigh}% since inception</b>
      <b id="ans">${parseFloat(calculateInterest(e.interestHigh))}</b>
      <b class="ans-text">${e.risk}</b>
      <b class="ans-text">${e.categoryAvg}%</b>
      </div>
      </section> `;
    })
    .join("");
  test.innerHTML = testItem;
};
