---
title: "Gamma Functions"
publicationDate: "2023-04-18"
updatedDate: "2024-09-05"
---

_The following page includes the definitions of the gamma functions and their relations to each other.
These functions were particularly useful in the development of [promethium](https://github.com/berkay-yalin/promethium)._

## Gamma Function

$$
\Gamma(z) = \int_{0}^{\infty} t^{z - 1} e^{-t} dt
$$

## Incomplete Gamma Function

### Lower Incomplete Gamma Function

$$
\gamma(s, x) = \int_{0}^{x} t^{s - 1} e^{-t} dt
$$

### Upper Incomplete Gamma Function

$$
\Gamma(s, x) = \int_{x}^{\infty} t^{s - 1} e^{-t} dt
$$

## Regularized Incomplete Gamma Function

### Regularized Lower Incomplete Gamma Function

$$
P(a, x) = \frac{1}{\Gamma(a)} \int_{0}^{x} t^{a - 1} e^{-t} dt
$$

### Regularized Upper Incomplete Gamma Function

$$
Q(a, x) = \frac{1}{\Gamma(a)} \int_{x}^{\infty} t^{a - 1} e^{-t} dt
$$

### .

$$
P(a, x) + Q(a, x) = 1
$$
