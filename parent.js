function parent(childObj){

    // Global Variable
    let _childObj=childObj;

    // Public Method
    this.parentDemo1=function(){

        // Bad Practice to define any class ka instance
        // Death Relationship
        //let childObj=new child();
        //childObj.childDemo();

        _childObj.childDemo();
        console.log(_childObj.fullName);
        _childObj.fullName="Sagar";
    }

    this.parentDemo2=()=>{
        _childObj.childDemo();

        console.log(_childObj.fullName);
    }

    
    this.parentDemo3=()=> _childObj.childDemo();
}