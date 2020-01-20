/// <reference path="../DI/parent.js"/>
/// <reference path="../DI/parent.js"/>

function onButtonClick(){

    // Create an instance of Child Class
    let childObj=new child();

    // create an instnce of parent Class
    let parentObj=new parent(childObj);
    childObj.fullName="Kishor Naik";
    parentObj.parentDemo1();
    console.log(childObj.fullName);
    parentObj.parentDemo2();
    parentObj.parentDemo3();
    parentObj=null;

}

onButtonClick();
