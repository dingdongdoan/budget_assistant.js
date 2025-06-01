const startupName = "BudHelp";
const initialCapital = 40000;
const monthlyRevenue = 13000;
const monthlyExpenses = 6000;

const netCashFlow = monthlyRevenue - monthlyExpenses;
const currentBalance = initialCapital + netCashFlow;
const isProfitable = netCashFlow > 0;

console.log("Startup Name: " + startupName);
console.log("Net Monthly Cash Flow: $" + netCashFlow);
console.log("Current Balance: $" + currentBalance);
console.log("Profitability Status: " + isProfitable);