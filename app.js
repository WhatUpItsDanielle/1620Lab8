// step 1 add this JavaScript file to index.html in the head element using the appropriate attribute

//write functions for all of the following
//use querySelector or querySelectorAll for all of the following, where needed.

//step 2 select the first paragraph in the second div and add the class 'paragraph-color' so that the styles in the style sheet are applied to only that paragraph

function changeColor(){
    document.querySelector(".first-paragraph").classList.add("paragraph-color");
}
changeColor();

// step 3 create a paragraph template using a template litteral

function ParagraphTemplate(){
    const pTemplate = "Lab 8            July 15";
    return(pTemplate)
}

// step 5 add the paragraph template you just created to the first div using innerHTML

document.body.querySelector("#first-div").innerHTML = ParagraphTemplate();