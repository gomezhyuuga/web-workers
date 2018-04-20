function gcd(a, b) {
  if (b === 0) return a;
  else return gcd(b, a % b);
}

onmessage = function (event) {
  var data  = event.data;
  var start = data.start;
  var end   = data.end;

  var sum = 0;
  for (var i = start; i < end; i++) {
    if (gcd(i, 666) === 1) sum += i;
  }

  postMessage(sum);
}
