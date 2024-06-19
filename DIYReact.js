const diyREACT =
{
   createElement,
}


function createElement(type, props, ...children)
{
    return{
        type,
        props: {...props},
        children: children.map( child => typeof child === 'object' ? child : createTextElement(child))
    }
}



function createTextElement(text) {
    console.log('TEXTTTTTTT')
    return {
      type: "TEXT_ELEMENT",
      props: {
        nodeValue: text,
        children: [],
      },
    }
  }