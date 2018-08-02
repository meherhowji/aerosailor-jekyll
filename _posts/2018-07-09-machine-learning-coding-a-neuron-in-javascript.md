---
title: 'Machine Learning: Coding a Neuron in JavaScript'
layout: post
categories:
- machine learning
- neuron
- artificial intelligence
excerpt_separator: "<!--more-->"
d3js:
- true
---

![image tooltip here](/public/neuron.jpg)

<!--more-->

We see around ourselves surrounded by some very common and strange use cases of machine learning in our digital ecosystem. From movie recommendation to facial recognition, some very common apps that we use deploy such algorithms to help us deliver a better environment. A very smallest unit of such an algorithm is a Neuron. A neural network is a collection of neurons. You can find many libraries that give you ease of creation of network with just few lines of code. 

However writing your own neural is definitely not that much amount of code either. We write a thousand line of code in a month or more, how long is just a hundrend! Not much trust me. And we will break that 100 line into groups so that its even more easier to understand. A neuron has a life cycle and its phases will help us modularise our code . I hope by the end of this blog post you will feel neural network to be more fascinating than mind-bending. 


## What is a neuron?
A neural network or a neuron we are going to program performs very much similar to a biological functioning neuron. A biological neuron is essentially a structural and the primary unit of nervous system. They are the longest living cells in your body and in particular many research indicates that the nerve cells or neuron in our cerebral cortex live as long as we do. They are irreplaceable. They consume over 25% of calories you take in a day. 

A neuron has 3 parts; soma, dendrite and axon. Soma is the cell body contains all the regular cell stuff like DNA, RNA, Mitochondria, nucleus etc. Dendrites are the listeners, they take inputs from other neurons or cells and pass it on to the cell body. And the axons transmit electrical impulses to the other cells. That is the general structure and data flow.

## Action Potential
So when a neuron is stimulated enough it sends out an electrical impulses. A neuron is negatively charged when is resting and the membranes around it are positive. The movement of charge from the membranes to the cell body is key to the electricial activity in the neurons. Not all the events cause the flow of ions along the axons, such events that do, create enough Action Potential. 

The potential difference of neuron and the membrane is around -70mW. When an external event creates enough stimulus to cross the potential from -70mW to **-55mW**,  and when it further crosses till 40mW, a biological chain reaction is created and impulse is sent down the axon and an output is received. :sleeping:

Now, we understood a threshold(certain events) trigger the action potential. And the threshold at its simplest form looks like a switch. A neuron either fires or doesn't to look at it another way. Therefore, threshold condition can be safely assumed as a random number. 

## Activation Function

So **activation function** precisely is a non linear function which decides whether the output of the neuron should be forwarded/propagated-forward or not. Without an activation function it is impossible to solve a non-linear problem.
Linear equations are those that have constant change in x & y. Eg miles and km conversion. In other words, functions that would make up a straight line on a cartesian plane.

## Perceptron
Its the simplest neural network, with just one single neuron. It is based on feed forward model so when input is fed to the network, some processeing is performed and an output is returned. Lets look at the steps:

#### Feeding Input 
Lets use a simple function, sin(x), as the input to our perceptron.
{% highlight js %}
// sin(0) = 0
// sin(30) = 0.5
// sin(60) = 0.866
// sin(90) = 1

let input = [45];
{% endhighlight %}

#### Adding Weights
Every input that passes through neuron must be weighted. 
{% highlight js %}
let weight = Math.random() * 0.3 - 0.1;
{% endhighlight %}

#### Passing through activation function
Our activation function is very simple at its best. Its limits our output within a range and returns binary output, either 0 or 1. Following is a very simple step function which is like a switch with 2 states; on or off. We have many such other functions that can gives us a ranged output. Another very popular such function is Sigmoid, it features a S-shaped curved.
{% highlight js %}
// step function
let stepFn = sum => {
	return sum > 0 ? 1 : 0;
}

// sigmoid
let sigmoidFn = sum => {
	return 1/(1 + Math.exp(-sum));
}
{% endhighlight %}

{% include sigmoid-plot.html %}

#### Output
This is the guess of our single neuron and its far from accurate because we haven't trained it yet.
{% highlight js %}
let input = 45;
let weight = Math.random() * 0.3 - 0.1;
let sum = input * weight;
let activationFunction = sum => {
	return sum > 0 ? 1 : 0;
}

let output = activationFunction(sum);
console.log(output)
{% endhighlight %}

### Cost Function
We have our neuron making guesses but they are just some random values, how do we correct it. Before that we need to find out how far are we from our target value. A cost function is what answers that.

{% include cost-pred-plot.html %}