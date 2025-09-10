function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function checkPrime() {
  const number = parseInt(document.getElementById("numberInput").value);
  const resultDiv = document.getElementById("result");
  const listDiv = document.getElementById("primeList");

  if (isNaN(number)) {
    resultDiv.innerHTML = "Masukkan angka yang valid!";
    resultDiv.style.color = "red";
    listDiv.innerHTML = "";
    return;
  }

  if (isPrime(number)) {
    resultDiv.innerHTML = number + " adalah bilangan prima ✅";
    resultDiv.style.color = "green";
  } else {
    resultDiv.innerHTML = number + " bukan bilangan prima ❌";
    resultDiv.style.color = "red";
  }

  let primes = [];
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) primes.push(i);
  }
  listDiv.innerHTML = "Bilangan prima sampai " + number + ": <br>" + primes.join(", ");
}
