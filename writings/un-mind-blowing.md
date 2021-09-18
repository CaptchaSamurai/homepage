# un-mind-blowing (🤯) = 🥱

Many math tidbits are dubbed as *mind blowing*.
Here I show that some are *boring*.

**Table of contents**

[TOC]

---

## $0.999... = 1$

Say you have infinite supply of plushies. And I have only finite amount of them. Who have more?

![plushies_v1](/home/kamil/Documents/Writings/Images/plushies_v1.png)

You have more. Pretty boring, huh? We will see that "$0.999... = 1$" is, in essence, the same observation.

When contemplating "$0.999... = 1$" you probably think that there is a small real number by which $0.999\dots$ differs from $1$.

After all $0.9$ differs by $0.1$, and $0.99$ differs by $0.01$. So shouldn't $0.999 \dots$ differ by $0.0\dots 01$? So why is it $0$?! 🤯 

I will make it boring. I promise. The only thing we need to know is to know that these three dots in "$0.999... = 1$" actually mean the result of this game:

---

You hold $0.999\dots$
I will be giving you numbers as close to $1$ as I want, but not $1$.
Is your number always closer to $1$ than mine?

---

If the answer is "yes" you win. We will write this result as $0.999 \dots = 1$.
If the answer is "no" you lose. We will write $0.999\dots ≠ 1$.

Who will win? Let's see one of possible moves.

Say I give you $0.97$. Is your number closer to $1$​ than mine?
You don't know what exact number you are holding, but you know that $0.99$ is closer to it than $0.9$ is. And $0.9999$ is even closer.

The precision of two digits is enough to decide that you are closer than me.  
$$
\begin{align}

\overbrace{0.99}^\text{≈ 0.999$\dots$} - 1 &= 0.01 \\
0.97 \,\,\,\, - 1 &= 0.03 % ugly, sorry
\end{align}
$$
I loose in this move.

But there is still a hope for me. I can give you a number much, MUCH closer to $1$. Say
$$
0.\underbrace{9 \dots 9999}_\text{gazilion nines}8
$$
Note that here "$\dots$" means, that we don't have enough space to write it down. No limit is hiding here. Same symbol, different meaning.

Okay, so up to gazillionth place we go head to head. But then you see that your number is closer to $1$ than mine.
$$
\begin{align}
1 -  \overbrace{0.\underbrace{999 \dots 999}_\text{gazilion nines}9}^\text{≈ $0.999 \dots$} &= 0.0 \dots 01 \\

1- 0.\underbrace{999 \dots 999}_\text{gazilion nines}8 &= 0.0 \dots 02
\end{align}
$$
You win again!

Since gazillion could be anything, $10^{10}$, $10^{10^{10}}$, whatever, I will loose with you all the time, no matter how close to $1$ I will get. It's hopeless. You won the game.

To sum up. The notation
$$
0.999... = 1
$$
is a shorthand for describing the result of the game in which you have infinite supply of nines, and you can go to $1$ as close as you want. Even though I can throw any number close to $1$ you always will be closer. This is because my number differs from $1$ by a tiny bit, and approximation of yours number can get closer than my numbers. 

In essence it's like noting that unlimited supply will surpass a finite supply. Who would have thought? 🥱

---

To fill in the details familiarize with [the definition of the limit](https://www.youtube.com/watch?v=GghShJHvxTY) and note that
$$
0.999\dots = \frac{9}{10} +\frac{9}{10^2} + \frac{9}{10^4} + \dots
$$


---

Image [source](https://www.etsy.com/listing/903867618/set-of-0-9-posable-puppet-numbers-10).

---

## There are as many integers as even integers

Work in progress.

# About

This series originated after seeing [this](https://twitter.com/Atrix256/status/1438934776115720193) tweet.

By [Kamil Przespolewski](https://twitter.com/k_przespolewski).
Page is being updated on the fly. I plan to post few more post.
Last update: 18.09.2021.
