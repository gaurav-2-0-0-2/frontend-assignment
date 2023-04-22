// import { RJSFSchema } from '@rjsf/utils';
// import validator from '@rjsf/validator-ajv8';
// import Form from '@rjsf/core';
import { useState } from 'react';
// import { inputData } from '../data/data';
// import schema from '../data/fakeData.js';
// import DynamicForm from './Form';

// console.log(inputData);

// console.log(schema);

export default function Input() {
    // const data = JSON.parse(schema);

    // let spec = [];
    // console.log(schema.spec);
    // console.log(spec);

    // const [jsonData, setJsonData] = useState('');
    // const schema = JSON.parse(jsonData);


    // const handleJsonInput = (event) => {
    //     setJsonData(event.target.value);
    // }


    // return (

    //     <div>
    //         <h1 className='text-5xl'>I am Input </h1>

    //         <textarea
    //             className='bg-gray-200 outline-none px-2'
    //             name="textarea"
    //             cols="70"
    //             rows="25"
    //             value={jsonData}
    //             placeholder='Enter JSON data'
    //             onChange={handleJsonInput}
    //         />

    //         <Form schema={schema} /*onSubmit={(formData) => console.log(formData)}*/
    //             validator={validator}

    //         />


    //     </div>
    // )


    // return (
    //     <div>
    //         <Form schema={schema} validator={validator} />
    //     </div>
    // )




    //// Without RJFS 

    const [jsonData, setJsonData] = useState([]);
    // const schema = JSON.parse(jsonData);
    // console.log(schema);


    // To handle user input 
    const handleJsonInput = (event) => {
        const value = event.target.value;
        // console.log(value);
        try {
            const jsonData = JSON.parse(value);
            console.log(jsonData);
            setJsonData(jsonData);
        } catch (error) {
            console.log(error);
        }
    };


    // const handleEditClick = () => {
    //     setJsonData({});
    // };

    return (

        <div className='grid grid-cols-2 gap-10'>

            <textarea
                className='bg-gray-200 outline-none px-2'
                name="textarea"
                cols="100"
                rows="25"
                value={JSON.stringify(jsonData)}
                onChange={handleJsonInput}
            />




            {/* {console.log(jsonData)} */}



            <div>
                {/* {jsonData.map((input, index) => {
                    return (
                        <div key={index}>
                            <div className='flex flex-row gap-4 my-2'>
                                <h1>{input.label}</h1>
                                <input type="text" placeholder={input.placeholder} />
                            </div>

                        </div>

                    )

                })} */}

                {jsonData.length > 0 && (
                    <div>
                        {jsonData.map((input, index) => (
                            <div key={index} className='flex flex-row gap-4 my-2'>
                                <h1>{input.label}</h1>
                                {index === 0 ? (
                                    <input type="text" placeholder={input.placeholder} />
                                ) : index === 1 ? (
                                         <div>
                                            <button>{input.subParameters.options.label}</button>
                                         </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                )}
            </div>



            {/* {Object.keys(jsonData).length === 0 ? (
                <textarea
                    className='bg-gray-200 outline-none px-2'
                    name='textarea'
                    cols='70'
                    rows='25'
                    value={JSON.stringify(jsonData)}
                    placeholder='Enter JSON data'
                    onChange={handleJsonInput}
                />
            ) : (
                <div>
                    {jsonData.map((input, index) => {
                        return (
                            <div key={index}>
                                <h1>{input.label}</h1>
                            </div>

                        )

                    })}
                    <button onClick={handleEditClick}>Edit</button>
                </div>
            )} */}



            {/* This is working */}

            {/* {inputData.map((input)=>{
            return(
                <div>
                   <h3>{input.sort}</h3>
                    <h1>{input.label}</h1>
                </div>
               )
             })} */}


            {/* This is working */}


        </div>

    )





















































    ////// New Code 

    // const [formData, setFormData] = useState({});
    // const [schema, setSchema] = useState({});
    // const [uiSchema, setUiSchema] = useState({});

    // const handleInputChange = (event) => {
    //     const inputJson = event.target.value;
    //     try {
    //         const inputArray = JSON.parse(inputJson);
    //         // Create schema and uiSchema based on the first object in the array
    //         const [firstObject] = inputArray;
    //         const properties = Object.keys(firstObject).reduce(
    //             (acc, key) => ({ ...acc, [key]: { type: 'string' } }),
    //             {}
    //         );
    //         setSchema({ type: 'object', properties });
    //         setUiSchema(Object.keys(properties).reduce(
    //             (acc, key) => ({ ...acc, [key]: { 'ui:label': key } }),
    //             {}
    //         ));
    //         // Set the form data to an empty object
    //         setFormData({});
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const handleFormSubmit = ({ formData }) => {
    //     console.log(formData);
    //     setFormData(formData);
    // };

    // return (
    //     <div>
    //         <textarea className='bg-gray-200' rows="20" cols={40} onChange={handleInputChange} />
    //         <Form schema={schema} validator={validator} uiSchema={uiSchema} formData={formData} onSubmit={handleFormSubmit} />
    //     </div>
    // );

}
