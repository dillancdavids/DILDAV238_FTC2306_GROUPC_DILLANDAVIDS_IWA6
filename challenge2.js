const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

if (hourOfDay !== undefined && minuteOfDay !== undefined && hourOfDay === 0 && minuteOfDay === 0) {
  const taxAsDecimal = parseFloat(tax) / 100; // Convert tax percentage to decimal
  const startingAfterTax = salary * (1 - taxAsDecimal); // Calculate salary after tax
  const balance = startingAfterTax - transport - food - rent; // Calculate balance
  console.log('R ' + balance.toFixed(2)); // Print the formatted balance
}