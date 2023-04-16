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
  { id: 1, name: "nifty500", interestLow: 1.12, interestHigh: 1.15 },
  { id: 2, name: "hdfc mid cap", interestLow: 1.12, interestHigh: 1.15 },
  { id: 3, name: "canara mid cap", interestLow: 1.12, interestHigh: 1.15 },
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
