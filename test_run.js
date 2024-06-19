window.onload = function(){ 
    
    testSuite();

}


function testSuite()
{
    console.log(testANoProps1());
    // console.log(testTextNode1());
    console.log(testAProps1());

    console.log(testAPropsChildren1());

    
}

function testANoProps1 (){
    return diyREACT.createElement('a');
}

// function testTextNode1 (){
//     return diyREACT.createTextElememt('THIS IS TEXT');
// }


function testAProps1 (){
    return diyREACT.createElement('div', {className: 'diy_el_class'});
}


function testAPropsChildren1 (){
    return diyREACT.createElement('div', {className: 'diy_el_class'}, 
        createElement('a', {className: 'diy_el_child_class'}),
        createElement('span', {id: 'span_with_text'}, createElement('hello'))
    );
}