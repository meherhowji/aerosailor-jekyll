---
layout: post
title: Bubble Sorting In JavaScript
---

![placeholder](https://upload.wikimedia.org/wikipedia/commons/8/83/Bubblesort-edited-color.svg "Bubble sort depiction image")

<div class="message">
	Bubble sort feels intuitive as you walk through the array, you swap only if the next number is larger. 
</div>

#### Basic Principal

 * Take a randomly sorted array
 * We are going to compare each pair of items, and we will swap them if second is smaller than first.
 * Then we will compare second with third and perform the swap again if third is smaller than second.
 * This continues until we have reached the end.
 * We maintain a flag to keep track of the sort state of the list and save some iterations.
 * This is how each iteration looks like: ![placeholder]( https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif "Bubble sort visualised")


#### Complexity
* Time complexity for both worst-case and average is О(n<sup>2</sup>)
* Best case time complexity is O(n), is the only significant advantage.


#### Code

A loop that runs through all the elements of the array for each of the array item. That's a O(N<sup>2</sup>) complexity of time.

{% highlight js %}

  var cards = [4,1,6,8,1,5,4,9,7,3,1],
      swapped = true,
      swap = function(array, index) {
        var temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;
      };
  
  do {
    swapped = false;
    console.log('Rows -> ' + cards);
    for(var i = 0; i < cards.length; i++) {
      if (cards[i] > cards[i + 1]) {
        console.log('Swapping -> (' + cards[i] +',' + cards[i+1] +')'); 
        swap(cards, i);
        swapped = true;
      }
    }
  } while(swapped);
 }

{% endhighlight %}

Run this example


-----

Want to see something else added? <a href="https://github.com/poole/poole/issues/new">Open an issue.</a>

[^fn-sample_footnote]: Handy! Now click the return link to go back.
