window.onload = function(){ 
    
    testSuite();

}


function testSuite()
{
    console.log(testANoProps1());
    // console.log(testTextNode1());
    console.log(testAProps1());

    console.log(testAPropsChildren1());

    
    diyREACT.render(testANoProps1(), document.body)

    diyREACT.render(testAPropsChildren1(), document.body)

    diyREACT.render(testAPropsChildren2(), document.body)
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
        diyREACT.createElement('a', {className: 'diy_el_child_class'}),
        diyREACT.createElement('span', {id: 'span_with_text'}, diyREACT.createElement('hello', null, 'DUM DUM DUM'))
    );
}



function testAPropsChildren2 (){
    return    diyREACT.createElement('a', {href: 'http://www.google.com'}, 'Click here please');
}