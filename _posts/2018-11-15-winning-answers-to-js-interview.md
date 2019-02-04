---
title: 'Winning JavaScript Interviews - S01E01'
layout: post
categories:
- javascript
- tutorial
excerpt_separator: "<!--more-->"
---

![Elm Logo](/public/elm.png)

<!--more-->

"All happy families are alike; each unhappy family is unhappy in its own way." - Leo Tolstoy, Anna Karenina 

I was very fascinated by this quote when I first read this in Tolstoy's must read, Anna Karenina. Recently, I was reading Guns, Germs & Steel, which is another 
beautiful title that explores the last 13000 years of the human history. The context

JavaScript interviews can be simple and yet the results sometimes can be daunting. I believe there are many right ans

## Use Strict          
This the least tricky of all however the articulation is the key here. If we break down strict mode it does one 
or many of the following depending on your application.
1. Primarily, it empowers you to put the 
program in strict operating context. Strict operating context gives many 
advantages over the regular JS context which is very lenient & less vigilant, making debugging easier.
* Variables need to declared before they are used. 
    e.g. spelling mistakes in variables make a new variable to get created.
* Stops using future reserve words.
* Does not let you delete variables, functions and arguments.
* Makes eval safer. Eval variables leak out of the eval block, in strict mode they stay scoped.
2. Also an interesting point here is that Strict Mode is a string and not a keyword. Because making it a 
keyword would require browsers to adapt and process such request. This would make the application backward incompatible. String 
such as Strict Mode in older browsers are ignored hence the safest option.
3. Strict mode can be block scoped: Adding a new function to an old application shouldn't stop us from using this powerful
feature and hence Strict Mode works in block scope. 

{% highlight js %}
function usingStrictMode() {
    'strict mode'
    // throws except for using future reserve word
    var class = 'test'  
}
{% endhighlight %}

## Call by Value / Reference

1. Primitives types are passed by value whereas objects are passed by reference.
2. When a primitive type is passed then a copy is created and changes in the function does not effect the value outside. 
{% highlight js %}
     var a = 1; 
     function foo(a) {
        a = 2;
     }
     foo(a); 
     console.log(a); // 1
{% endhighlight %}
3. When an object is passed into a function, we are not passing a copy but a reference and when we make changes inside the function the outside variable is affected. 
4. And an important part is also that we cannot change the object itself but only its properties. 
