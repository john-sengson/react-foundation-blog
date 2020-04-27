import React from 'react';
import './tech.css';


class Tech3 extends React.Component {

  render() {
    return (
      <div className="intro" id="introduction">

        <p className="main-pts">
          Difference between HTML and CSS:
        </p>
        <p className="p-tech">
          To know the difference we need to know that they both make, a website.
        </p>
        <p className="p-tech">
          So think of website as your home.
        </p>
        <p className="p-tech">
          HTML is the foundation which are the walls, bedroom, toilet, doors etc.
        </p>
        <p className="p-tech">
          CSS is what define the sizes of the rooms for example, design, and layout of the whole house.
        </p>
        <img className="pix" src="https://i1.wp.com/generalassemb.ly/blog/wp-content/uploads/2013/10/Blogpost-Amy04.jpg?ssl=1" alt="house" />


        <p className="main-pts">
          Control Flow and loop:
        </p>
        <p className="p-tech">
          Control flow is the order in which individual statements, instructions or function calls of an imperative program are executed
        </p>
        <p className="p-tech">
          A loop is a sequence of statements which is specified once but which may be carried out several times in succession
        </p>
        <p className="p-tech">
          So if we look deep within ourselves control flow is like our daily routines.
        </p>
        <p className="p-tech">
          We get up, get ready, get to work or school, spend the day there, go home, rest and sleep for example.
        </p>
        <p className="p-tech">
          Loops are routines we do multiple times a day.
        </p>
        <p className="p-tech">
          Just like the list above , we do those day after day.
        </p>
        <p className="p-tech">
          You can also say eating 3 x a day, breathing continuosly, even blinking is like looping.
        </p>






        <p class="main-pts">
          DOM- what is it?
        </p>
        <img className="pix" src="https://media3.picsearch.com/is?d-TFDYcMog5aXj-oYrSDlFItcj5c68HqVrSr7O-Wne8&height=226" alt="domfast" />
        <p className="p-tech">
          Not that Dom!
        </p>
        <p className="p-tech">
          It's this one below:
        </p>
        <img className="pix" src="https://www.w3schools.com/js/pic_htmltree.gif" alt="realDom" />
        <p className="p-tech">
          The Document Object Model (DOM) is a programming API for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.
        </p>
        <p className="p-tech">
          The image above is how the DOM will interpret a HTML document.
        </p>
        <p className="p-tech">
          If you look at the images below, the left side is me using the DOM on a website
        </p>
        <p className="p-tech">
          The right side is the page after some manipulation with the DOM.
        </p>
        <img class="pix" src="photo\playwithDOM.jpg" alt="mydom" />


        <p className="main-pts">
          Arrays and objects differences:
        </p>
        <p className="p-tech">
          Both arrays and objects are ways of grouping pieces of data together into meaning collections.
        </p>
        <p className="p-tech">
          They differ however because an array is used to store a group of values in order, called elements, and can access them through their sequence.
        </p>
        <p className="p-tech">
          You can retrieve information about the elements base on their position in the array.
        </p>
        <p className="p-tech">
          So let's treat a library as an array. There are aisles for book type, titles, chapters, and pages.
        </p>
        <p className="p-tech">
          So if you need to read the ending of a book you like, you will first  go to the correct aisle first base on the type, then look for the title, and then go through the contents of that book.
        </p>
        <p className="p-tech">
          On the other hand, you can access data on an object through properties of the values.
        </p>
        <p className="p-tech">
          Still thinking of the library, let say takapuna library as the name, place is takapuna, car park spaces is 60.
        </p>
        <p className="p-tech">
          If you ask for its name it will tell you its assigned name property of takapuna.
        </p>



        <p className="main-pts">
          What are functions?
        </p>
        <p className="p-tech">
          Functions is a block of code designed to perform a particular task.
        </p>
        <p className="p-tech">
          It needs to be called/ invoke for it to be executed.
        </p>
        <p className="p-tech">
          Think of like a math equation. The task is to add a+b.
        </p>
        <p className="p-tech">
          It will always stay like the equation unless you ask for the answer.
        </p>



        <p className="p-tech">
          ****Images sourced from google image search and wikipedia***

        </p>
      </div>
    );
  }
}

export default Tech3;