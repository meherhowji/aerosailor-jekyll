---
layout: post
title: "A Minimal Pomodoro App In ReactJS"
categories: [Workflow]
excerpt_separator: <!--more-->
---
{% codepen bLjgXM height:650 default-tab:js,result %}

<!--more-->

### Introduction
React JS is one of my favorite JavaScript framework, my most favorite part is how view and controller are designed, they stay nicely together like young siblings. 

A general try out app for many developers is a todo app but I think a Pomodoro App is an equal competitor but packs less user stories and hence simple enough to execute quickly. 

### User Stories
* A user can start and stop timer by clicking on the respective buttons.
* A user can update the time settings so that a custom timer can be started.

### Overall Design
```
class Pomodoro extends React.Component {
 constructor() {
   this.state = {
     //time components
   }
 }

 beginTimer() {}
 resetTimer() {}
 updateNewTime() {}
 chooseSetter() {}
 formatTime() {}
 runner() {}
 
 render(){
   //template n events
 }
}
```

### Functional 
1. **BeginTimer** checks whether the timer is running, if not then initiates a set interval.
2. **Runner** is invoked at every second, updating state and various time components.
3. **ResetTimer** clears the interval and sets the newly set second as the new timer value.
4. **UpdateNewTime** updates the timer value to new one set by the user. The new timer value is loaded when the **resettimer** is clicked by the user. 
5. **ChooseSetter** determines which component of the time user us trying to update, accordingly appropriate seconds are removed. 
6. **FormatTime** is used to update the time components in the state object all the time. Because the app uses only seconds for operations, we need this utility. 


### Conclusion 
Have a look at the codepen editor to go through the code. I am sure there would be scope of improvements and optimization. My idea was to play around with React in a simple fun way. 

Share or leave a comment if you like the Pomodoro app.