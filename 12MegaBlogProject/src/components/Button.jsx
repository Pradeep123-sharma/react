import React from 'react'

/* 
    1.) Here 'children' is nothing but only the text value that we pass to display on button. Its generally a fancy name. We can also write it as a 'text' or 'btnText'.
    2.) Now 'className' is that if any other ui developer wants to give their own css classes and to use that first use paptics in button classname and usig $ sign add that varible.
    3.) And lastly we have use '...props' because maybe if developer eants to give more attributes to button then we'll simply spread here and use it.
*/
function Button(
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor =  'text-white',
    className = '',
    ...props
) {
    return (
        <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
            {children}
        </button>
    )
}

export default Button
