# Web Workers Example

The code in this repository provides an example of how to use [__Web Workers__][WebWorkers]
on the browser and take advantage of parallel computing.
For the sake of demonstration, a simple algorithm to compute [coprime numbers][Coprime] is presented. Specifically,
we need to find all coprime numbers from 1 to 1x10^6 such that added together sum __the number of the beast (666)__.

To compute the coprime numbers, I use an algorithm called [Euclid's algorithm][Euclids]. For each number $1 \leq 1x10^8$,
the evaluation of `GCD(i, 666) == 1` is done and if it holds, such number `i` is added to the final result.

[Coprime]: https://en.wikipedia.org/wiki/Coprime_integers
[Euclids]: https://en.wikipedia.org/wiki/Euclidean_algorithm