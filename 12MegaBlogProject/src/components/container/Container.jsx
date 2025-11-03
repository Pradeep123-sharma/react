import React from 'react'

function Container({children}) {
    /* Now sometimes paranthesis is not necessary like in if-else, but it is recommended to put semicolon after that so that it clarifies others that it is one line. */
    return <div className='w-full max-w-7xl mx-auto px-4'>
            {children}</div>;
    
}

export default Container