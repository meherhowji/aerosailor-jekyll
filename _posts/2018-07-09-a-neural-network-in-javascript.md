---
layout: post
title: "A Neural Network in JavaScript"
categories: [machine learning, neuron]
excerpt_separator: <!--more-->
d3js:
- true

---

![image tooltip here](/public/neuron.jpg)
<!--more-->

# A Simple Neuron in JavaScript 

A neural network or a neuron we are going to program performs precisely similar to biological functioning unit and it's for the same reason we need to get back to our biology class. I hope by the end of this blog post you will feel neural network to be more fascinating than brain-fucking.

## What is a neuron?
A neuron is essentially a structural and primary unit of nervous system. They are the longest living cells in your body and in particular many research indicates that the nerve cells or neuron in are cerebral cortex live as long as we do. They are irreplaceable. They consume over 25% of calories you ingest.
Now those were some cool facts about the neurons where is the part that makes me write my own neuron. Well, there is still a long way but stay with me for some another while and I promise once we reach the zone, I call it the creative zone, there is nothing that will distract you.

## Structure of a neuron
A neuron has 3 parts; soma, dendrite and axon. Soma is the cell body contains all the regular cell stuff like DNA, RNA, Mitochondria, nucleus etc. Dendrites are the listeners, they take inputs from other neurons or cells and pass it on to the cell body. The axons transmit electrical impulses to the other cells. Essentially a neuron will be a function but we can see input-output is slowly entering the picture. 

## Action Potential
When a neuron is stimulated enough it sends out an electrical impulses down the axon. A neuron is negatively charged when resting and the membranes around it are positive. The potent difference is around -70mW. The movement of charge from the membranes to the cell body is key to the electricial activity in the neurons. Not all the events cause the flow of ions along the axons, such events that do, create enough Action Potential. When an external event creates enough stimulus to cross the potential from -70mW to **-55mW**, and then it rises slightly over 40mW. And this creates a biological chain reaction down the axon and an output is received. 
Now, we understood a threshold(certain events) trigger the action potential. It can be seen as a function that returns true or false. A neuron either fires or doesn't. Now the condition, for simplicity sake assume it to be random number. Think of a mad neuron that fires randomly.

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