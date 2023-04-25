// import { RJSFSchema } from '@rjsf/utils';
// import validator from '@rjsf/validator-ajv8';
// import Form from '@rjsf/core';
import { useEffect, useState } from 'react';
import { Dropdown } from 'antd';
// import { inputData } from '../data/data';
// import schema from '../data/fakeData.js';

export default function Input() {


    // export default function Input({ jsonObject, onJsonChange }) {
    //     const [jsonData, setJsonData] = useState('');

    //     useEffect(() => {
    //         // setJsonData(JSON.stringify(jsonObject, null, 2));
    //         try {
    //             const parsedData = JSON.parse(jsonObject);
    //             onJsonChange(parsedData);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }, [jsonObject]);

    //     const handleInputChange = (event) => { 
    //         setJsonData(event.target.value);
    //     };

    //     return (
    //         <div>
    //             <label>
    //                 <textarea className='bg-gray-100 p-4' cols={50} rows={15} value={jsonData} onChange={handleInputChange} />
    //             </label>
    //         </div>
    //     );
    // }

    const [jsonData, setJsonData] = useState('');
    const [jsonObject, setJsonObject] = useState([]);


    useEffect(() => {
        try {
            const parsedData = JSON.parse(jsonData);
            setJsonObject(parsedData);
        } catch (error) {
            console.error(error);
        }
    }, [jsonData]);




    const handleChange = (e) => {
        setJsonData(e.target.value);
        // setJsonData(value);
    }

    return (
        <div className='grid grid-cols-2'>
            <div>
                <textarea className='bg-gray-100 outline-none p-4' onChange={handleChange} value={jsonData} name="" cols="50" rows="24"></textarea>
            </div>

            {/* {jsonObject && <pre>{JSON.stringify(jsonObject, null, 2)}</pre>} */}
            <div>
                {jsonObject.map((item, index) => {
                    return (
                        <div key={index} className=' bg-blue-100 p-5'>
                            {index === 0 ? (
                                <div className='flex flex-row gap-5 justify-between'>
                                    <h1>{item.label}</h1>
                                    <input className='outline-none px-2' placeholder={item.placeholder} type="text" />
                                </div>
                            ) : index === 1 ? (
                                <div>
                                    <h1>{item.label}</h1>
                                    <div className='flex gap-5 justify-between'>
                                        <button className=' bg-blue-200 p-5'>{item.subParameters[0].validate.options[0].label}</button>
                                        <button className=' bg-blue-200 p-5'>{item.subParameters[0].validate.options[1].label}</button>
                                    </div>
                                    {/* Slices sub section  */}
                                    <div className='flex justify-between mt-5'>
                                        <h1>{item.subParameters[1].subParameters[0].label}</h1>
                                        <button className='bg-blue-200'>dropdown</button>
                                    </div>
                                </div>

                            ) : index === 2 ? (
                                <div>
                                    {/* Toppings Section  */}
                                    <div >
                                        <h1>{item.label}</h1>
                                        {/* Sauce sub-section  */}
                                        <div className='flex justify-between mt-5'>
                                            <h1>{item.subParameters[0].label}</h1>
                                            <button className='bg-blue-200'>dropdown</button>
                                        </div>
                                        {/* Main Topping sub-section  */}
                                        <div className='flex justify-between mt-5'>
                                            <h1>{item.subParameters[1].label}</h1>
                                            <button className='bg-blue-200'>dropdown</button>
                                        </div>

                                        {/*Include seasoning checkbox*/}

                                        <div className='flex'>
                                            <input type="checkbox" name='' id="" />
                                            <h1>{item.subParameters[2].label}</h1>
                                        </div>

                                        


                                    </div>

                                </div>
                            ) : null}
                        </div>
                    )
                })}
            </div>

        </div>
    )

}

























































