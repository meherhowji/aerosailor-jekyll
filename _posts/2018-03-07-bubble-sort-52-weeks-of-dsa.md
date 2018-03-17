---
layout: post
title: Bubble Sort &ndash; 52 Weeks Of DSA
excerpt_separator: <!--more-->
---
![Bubble Sort](/public/sorting/bubble-sort-visual.jpg "Bubbles in a glass of water"){: .post-hero}
<!--more-->
#### Basic Principal
 * Take a randomly sorted array
 * We are going to compare each pair of items, and we will swap them if second is smaller than first.
 * Then we will compare second with third and perform the swap again if third is smaller than second.
 * This continues until we have reached the end.
 * We maintain a flag to keep track of the sort state of the list and save some iterations.
 * This is how each iteration looks like: ![placeholder]( https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif "Bubble sort visualised")

#### Complexity
* Time complexity for both worst-case and average is О(n<sup>2</sup>)
* Best case time complexity is Ω(n), is the only significant advantage.
* Space complexity is O(1).

#### Implementation
Try the below example in <a href="http://jsbin.com/jirate/2/edit?js,console">JS Bin</a>

{% highlight js %}

var cards = [4, 1, 6, 8, 1, 5, 4, 9, 7, 3, 1, -9, 0],
    swapped = true;

do {
  swapped = false;
  for (var i = 0; i < cards.length; i++) {
    if (cards[i] > cards[i + 1]) {
      var temp = cards[i];
      cards[i] = cards[i + 1];
      cards[i + 1] = temp;
      swapped = true;
    }
  }
} while (swapped);

{% endhighlight %}
