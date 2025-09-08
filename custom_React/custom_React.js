function customRender(reactElement, container) {
    // Creating a element in the dom tree
    const domElement = document.createElement(reactElement.type);

    // Inserting children
    domElement.innerHTML = reactElement.children;

    // Here we are setting attributes. 
    /* Now this approach is correct but here we are setting attributes one by one. So it is not efficient.
        domElement.setAttribute('href', reactElement.props.href);
        domElement.setAttribute('target', reactElement.props.target);
    */

    // So we'll use loops to set attributes.
    for (const prop in reactElement.props) {
        // Ye chota sa code hai dekhe ke liye ki kahin props mein children to nahi aa gaye.
        if (prop === 'children') {
            continue
        }
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google !'
}

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer)
