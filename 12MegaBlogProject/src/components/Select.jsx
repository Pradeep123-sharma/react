import React, {useId} from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {
                label && <label className='' htmlFor={id}></label>
            }
            <select {...props} id={id} ref={ref} 
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
                {/* Now for options. By default options is an array so we have to loop. */}
                {options?.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

// This is also a syntax.
export default React.forwardRef(Select)
