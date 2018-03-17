---
layout: post
title: "52 Weeks Of DSA - Insertion Sort"
excerpt_separator: <!--more-->
---

![Insertion Sort](/public/sorting/insertion-sort-visual.jpg "A lady keeping a document in the drawer"){: .post-hero}
<!--more-->
#### Basic Principal
 * Take a randomly sorted array
 * We then mark the first element as sorted.
 * We take the next element and compare it with the previous.
 * If the previous is larger than current then we move the previous element to the current position.
 * We are not swapping the values here, we are re-position the previous one place so that the current item can be inserted at the right index.
 * Lets take an example to understand this manoeuvre of items. Lets assume we have a list 3, 5, 1. 
 * We first take 3 and run it against all the items in the list but in reverse order. 
 * So for 3 will be compared with 3 and no action will be taken. In next iteration we take 5 and run a loop in reverse to compare it with 3 and because 5 > 3, we again take no action. Now we take 1 and compare it against 5, as our left side value(sorted side) is larger than our current item ie 1, we move 5 to a position forward. It will make our list look like, 3, 5, 5. Now we again compare 1 against 3, so we again move 3 forward. Out list now looks like 3, 3, 5. And because we have run through our list we just move our current item to the inner index. Hence our list looks like 1, 3, 5. Take a look at the code to get even better clarity.
 * We traverse the array and if we encounter any smaller value, then we mark it as the smallest.
 * The smallest value in the traversal is moved to the left.
 * We continue doing this until the end of 

#### Complexity
* Time complexity for worst-case & average case is О(n<sup>2</sup>)
* Best time complexity is Ω(n).
* Space complexity is O(1).

#### Implementation
Try the below example in <a href="http://jsbin.com/gageqim/edit?js,console">JS Bin</a>

{% highlight js %}

var array = [3, 5, 6, 1, 0, 4, 7, 9, 8, -10, 0.5], i, j, current;

for (var i = 0; i < array.length; i++) {
  current = array[i];

  for (j = i - 1; j > -1, array[j] > current; j--) {
    array [j + 1] = array[j];
  }
  array[j + 1] = current;
}

{% endhighlight %}
