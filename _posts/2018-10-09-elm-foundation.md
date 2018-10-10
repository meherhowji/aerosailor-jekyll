---
title: 'Building an Elm Library for Foundation CSS Framework'
layout: post
categories:
- elm
- functional programming
- foundation6
excerpt_separator: "<!--more-->"
---

![Elm Logo](/public/elm.png)

<!--more-->

## Elm 
Elm is a functional language that compiles to JavaScript. If you are used to using a tech stack that involved Webpack, 
Redux, npm/yarn, React, Immutable.js & TypeScript, then you would be shocked to death to know that Elm takes care of all
that. Look at the following infographic that I crafted for innovation lab in Credit Suisse. 

I have recently used Foundation in one of my projects and I saw an opportunity to write a Foundation library for Elm. The most 
popular Elm library at the moment is elm-mdl, however it is not actively maintained. Foundation 6 is packed with the most
advanced CSS framework in the web, Grid XY. I am beginning to start porting the grid XY feature to Elm.

Following is a little sneak peek of what the Elm code will look like compared to the actual HTML that we write to achive the same.
If you like what I am doing, please feel free to contribute and send me suggestions. 
I wouldn't mind at all if you give some stars to the project.


Grid XY in HTML / CSS

{% highlight html %}
<div class="container fluid">
    <div class="grid-x margin-x">
        <div class="cell">
            <!-- Hello Elm! -->
        </div>
    </div>
</div>
{% endhighlight %}

Grid XY in Elm. Clear & Concise!

{% highlight elm %}
view : Model -> Html Msg
view model =
            grid
                [ container Fluid, direction X, gutter Margin ]
                [ cell [] [ text "cell" ] ]
{% endhighlight %}


## Elm Good Parts
![An Infographic on Elm Performance Comparison & Strengths](/public/elm-good-parts.png)

## Elm Best Parts
![An Infographic on How Elm Replaces Existing Webapps Stack](/public/elm-best-parts.png)

