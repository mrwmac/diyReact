const diyREACT =
{
   createElement,
}


function createElement(type, props, ...children)
{
    return{
        type,
        props: {...props},
        children
    }
}


function createTextElement(text)
{
    return createElement('TEXT_ELEMENT', {nodeValue: text})
}