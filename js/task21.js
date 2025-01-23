const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.some(item => item.amount > 0) ? data.filter(item => item.amount > 0).reduce((acc, item) => acc + item.amount, 0) : 0;
};

console.log(getPositiveIncomeAmount(funds)); // 13300

const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0) ? data.reduce((acc, item) => acc + item.amount, 0) : getPositiveIncomeAmount(data);
};

console.log(getTotalIncomeAmount(funds)); // -1500