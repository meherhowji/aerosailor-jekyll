---
layout: post
title: Selection Sort &ndash; 52 Weeks Of DSA
categories: [Algorithms]
excerpt_separator: <!--more-->
---

![Selection Sort](/public/sorting/selection-sort-visual.jpg "Multiple yatches docked at coast."){: .post-hero}
<!--more-->
#### Basic Principal
 * Take a randomly sorted array
 * We then mark the first element as smallest.
 * We traverse the array and if we encounter any smaller value, then we mark it as the smallest.
 * The smallest value in the traversal is moved to the left.
 * We continue doing this until the end of 

#### Complexity
* Time complexity for worst-case, average & best case is О(n<sup>2</sup>)
* Space complexity is O(1).

#### Implementation
Try the below example in <a href="http://jsbin.com/xedekoy/3/edit?js,console">JS Bin</a>

{% highlight js %}

var list = [1, 2, 4, 7, 9, 4, 0, 5, 7, 2, -5, -1, 8],
    swap = function(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    },
    smallest = null;

for (var i = 0; i < list.length; i++) { 
  smallest = i;
  for (var j = i; j < list.length; j++) {
    if(list[j] < list[smallest]) {
      smallest = j;
    }
  }
  swap(list, i, smallest);
}

{% endhighlight %}
