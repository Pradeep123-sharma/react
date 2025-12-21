//  Here we'll build a Real-time Text Editor.
import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import config from '../config/config'

/* 
    Why we need Controller ?
    Standards input field work easily with React Hook Form's register(via useForm hook) and the forwardRef technique, but an exteral RTE is a seperate, controlled component that needs its value and events managed to interact with parent Form, that's why.
    The Controller from react-hook-form is used to wrap all external controlled components. 
*/
/* 
    This 'control' actually comes from react-hook-from aur yhi responsible hai iski sari states ko parent form mei le jane ke liye.
*/

function RTE({name, control, label, defaultValue=""}) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
            <Controller 
            apiKey={config.tinyMCEApiKey}
            name={name}
            // Jo bhi parent element isko call karega vo as it is control mei aa jayega.
            control={control}
            /* render hum aise hi karte hai. Pehle to callback likhte hai aur fir usme pass to hum "field" hi karte hai lekin usme alag properties de skte hai jaise ki input, select, and amy more.
            Fir uske baad event konsa lagana hai vo. */  
            render={({field: {onChange}})=> (
                // Aur fir yaha par jin jin elements ko render karna hai vo likhdo. For editor read documnentation.
                <Editor
                    apiKey='w7wej1dybdyf69f60b7mdq138pn6p97irts13n6eai0pnl8t'
                    initialValue={defaultValue}
                    init={{
                        initialValue: defaultValue,
                        height: 500,
                        menubar: true,
                        plugins: [
                            "image",
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                            "anchor",
                        ],
                        toolbar:
                            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                    }}
                    onEditorChange={onChange}
                />
            )}
            />
        </div>
    )
}

export default RTE
