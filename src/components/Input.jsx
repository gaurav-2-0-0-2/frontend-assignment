// import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';
import { useState } from 'react';
// import schema from '../data/data.json';
import DynamicForm from './Form';


// const schema = {
//     "title": "A person information",
//     "description": "A simple person data.",
//     "type": "object",
//     "properties": {
//         "firstName": {
//             "type": "string",
//             "title": "First name"
//         },
//         "lastName": {
//             "type": "string",
//             "title": "Last name"
//         },
//         "telephone": {
//             "type": "string",
//             "title": "Telephone",
//             "minLength": 10
//         }
//     }
// }




export default function Input() {
    // const data = JSON.parse(schema);

    // let spec = [];
    // console.log(schema.spec);
    // console.log(spec);

    const [jsonData, setJsonData] = useState('');


    const handleJsonInput = (event) => {
        setJsonData(event.target.value);
    }


    return (

        <div>

            <h1 className='text-5xl'>I am Input </h1>



            <textarea
                className='bg-gray-200 outline-none px-2'
                name="textarea"
                cols="70"
                rows="25"
                value={jsonData}
                placeholder='Enter JSON data'
                onChange={handleJsonInput}
            />

            <DynamicForm jsonData={jsonData} onSubmit={(formData) => console.log(formData)} />
        </div>
    )

}
