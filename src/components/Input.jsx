import { useEffect, useState } from 'react';
import { Switch } from 'antd';


export default function Input() {

    const [jsonData, setJsonData] = useState('');
    const [jsonObject, setJsonObject] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [toggleSS, setToggleSS] = useState(false);
    const [formData , setFormData] = useState('');


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


    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        setToggle(checked);
    };

    const onChangeAnother = (checked) => {
        console.log(`switch to ${checked}`);
        setToggleSS(checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(JSON.stringify(jsonObject));
    }

    return (
        <div className='grid grid-cols-2'>
            <div>
                <textarea className='bg-gray-100 outline-none p-4' onChange={handleChange} value={jsonData} name="" cols="50" rows="24"></textarea>
            </div>

            <div>

                {jsonObject.map((item, index) => {
                    return (


                        <form onSubmit={handleSubmit}>
                            <div key={index} className=' bg-blue-100 p-10'>
                                <h1 className='text-2xl'>New Pizza</h1>
                                {index === 0 ? (
                                    <div className='flex flex-row gap-5 justify-between mt-10'>
                                        <h1>{item.label}</h1>
                                        <input className='outline-none px-2' name='pizza_name' onChange={(e)=>setFormData(e.target.value)} placeholder={item.placeholder} type="text" />
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
                                            {/* <button className='bg-blue-200'>dropdown</button> */}
                                            <select>
                                                {item.subParameters[1].subParameters[0].validate.options.map((slice) => (
                                                    <option value={slice.value}>{slice.value}</option>
                                                ))}
                                            </select>



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
                                                {/* DropDown  */}
                                                <select>
                                                    {item.subParameters[0].validate.options.map((slice) => (
                                                        <option value={slice.value}>{slice.value}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            {/* Main Topping sub-section  */}
                                            <div className='flex justify-between mt-5'>
                                                <h1>{item.subParameters[1].label}</h1>
                                                {/* DropDown  */}
                                                <select>
                                                    {item.subParameters[1].validate.options.map((slice) => (
                                                        <option value={slice.value}>{slice.value}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/*Include seasoning checkbox*/}

                                            <div className='flex'>
                                                <input type="checkbox" name='' id="" />
                                                <h1>{item.subParameters[2].label}</h1>
                                            </div>

                                            <div className='mt-5'>
                                                {toggle ? (
                                                    <div className='flex justify-between'>
                                                        <h1>{item.subParameters[3].label}</h1>
                                                        <select>
                                                            {item.subParameters[3].validate.options.map((slice) => (
                                                                <option value={slice.value}>{slice.value}</option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                ) : null}
                                                <div className='flex gap-4'>
                                                    {toggle ? (
                                                        <h1>Hide advanced field</h1>
                                                    ) : (
                                                        <h1>Show advanced field</h1>
                                                    )}
                                                    <Switch size='small' onChange={onChange} />
                                                </div>


                                            </div>

                                        </div>

                                    </div>

                                ) : index === 3 ? (

                                    <div>
                                        {toggleSS ? (
                                            <div className='flex justify-between'>
                                                <h1>{item.label}</h1>
                                                <select>
                                                    {item.validate.options.map((slice) => (
                                                        <option value={slice.value}>{slice.value}</option>
                                                    ))}
                                                </select>
                                            </div>

                                        ) : null}
                                        <div className='flex gap-4 justify-between'>
                                            <div className='flex gap-4'>
                                                {toggleSS ? (
                                                    <h1>Hide advanced field</h1>
                                                ) : (
                                                    <h1>Show advanced field</h1>
                                                )}
                                                <Switch size='small' onChange={onChangeAnother} />
                                            </div>

                                            <div className='flex gap-5'>
                                                <button className=' bg-transparent border-red-300'>Cancel</button>
                                                <button type='submit' className=' bg-gray-400 text-white'>Submit</button>

                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </form>
                    )

                })}

            </div>

        </div>
    )

}

























































