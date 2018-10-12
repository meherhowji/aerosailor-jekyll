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

Elm is a functional language that compiles to JavaScript. If you are used to using a tech stack that involved Webpack, 
Redux, npm/yarn, React, Immutable.js & TypeScript, then you would be shocked to death to know that Elm takes care of all
that.

I have recently used Foundation in one of my projects and I saw an opportunity to write a Foundation library for Elm. The most 
popular Elm library at the moment is elm-mdl, however it is not actively maintained. Foundation 6 is packed with the most
advanced CSS framework in the web, Grid XY. And I saw an opportunity to bring this to the Elm community.

Following is a little sneak peek of what the Elm code will look like compared to the actual HTML that we write to
achieve the same.  

On a side note, I would really appreciate if you support the project. Please let me know that this project is
useful, there is no other way for me to know. 

Look Ma! Still no love :cry:
{% include elm-foundation-github-button.html %}

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

