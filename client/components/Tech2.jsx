import React from 'react';
import './tech.css'


class Tech2 extends React.Component {

  render() {
    return (
      <div className="intro" id="introduction">
        <h2 className="techH1">What is the difference between Margin, Border, and Padding?</h2>


        <p className="p-tech">Before we answer the question, let's talk about what they are first.</p>

        <p className="p-tech"> Here is an image below of what they look like:</p>
        <img class="pix" src="https://visualcomposer.com/wp-content/uploads/2019/05/Padding-margin-border-illustration.png" alt="mar-border-pad" />


        <p className="p-tech">Padding is what creates a space inside the element/container</p>
        <p className="p-tech">Margin is what creates a space around the element/container</p>
        <p className="p-tech">Border is between the margin and the padding. It is also the only visible parameter of the three</p>






        <p class="main-pts">When to use padding:</p>
        <p className="p-tech">To create a gap between the edges of the container and the content in it</p>
        <p className="p-tech">You want to increase the size of the content block, or create a bigger space within the border</p>
        <p className="p-tech">Increase the size of the content block without making the content itself bigger</p>
        <p className="p-tech">You wish to push the border further away from the content</p>
        <p className="p-tech">To show more/less of the background of your content block</p>
        <p className="p-tech">See image below:</p>

        <img class="pix" src="https://visualcomposer.com/wp-content/uploads/2019/05/Bigger-background-padding-1024x246.png" alt="padding-difference" />




        <p class="main-pts">When to use margin:</p>
        <p className="p-tech">To create a gap/space around the content block</p>
        <p className="p-tech"> To make a space between two elements</p>
        <p className="p-tech">Center the content block (using the same value for all sides)</p>
        <p className="p-tech">To create a space around the border</p>
        <img className="pix" src="https://visualcomposer.com/wp-content/uploads/2019/05/Space-with-margin.png" alt="margin-photo" />






        <p class="main-pts">When to use borders:</p>
        <p className="p-tech">To have a border around an element</p>
        <p className="p-tech">To make a border around an element, all you need is border-style. The values can be solid, dotted, dashed, double, groove, ridge, inset and outset.</p>
        <img className="pix" src="https://htmldog.com/figures/border-style.png" />



        <p className="p-tech">In CSS margin and padding (and border) are a part of the box model</p>
        <p className="p-tech">The structure of the box model is the following - in the middle, there's the content, then padding, then the border and then margin</p>


        <p className="p-tech">Below you can see an illustration of a CSS box model:</p>

        <img className="pix" src="https://visualcomposer.com/wp-content/uploads/2019/05/Box-model.png" alt="box-model" />
      </div>

    );
  }
}

export default Tech2;