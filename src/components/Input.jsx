import { useEffect, useState } from 'react';
import { Switch } from 'antd';
import { useRef } from 'react';
// import useTabs from "@olivieralexander/usetabs";
// import Tabs from './Tabs';


export default function Input() {

    const [jsonData, setJsonData] = useState('');
    const [jsonObject, setJsonObject] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [toggleSS, setToggleSS] = useState(false);
    const [toggleCC, setToggleCC] = useState(false);
    // const [formData, setFormData] = useState({});
    const [formData, setFormData] = useState({});
    // const containerRef = useRef(null);
    // const defaultRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);
    const [naplesStylePizza, setNaplesStylePizza] = useState(false);



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

    const onChangeCC = (checked) => {
        console.log(`switch to ${checked}`);
        setToggleCC(checked);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(JSON.stringify(jsonObject));
        alert(JSON.stringify(formData));
    }

    const handleInput = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }


    const handleCancel = (e) => {
        e.preventDefault();
        window.location.reload();
    }



    // const { setHightlight, highlightStyles } = useTabs({
    //     container: containerRef,
    // });

    const handleClick = (index) => {
        setActiveIndex(index);
        if(naplesStylePizza === true){
            setNaplesStylePizza(false)
        }else{
            setNaplesStylePizza(true)
        }

    }

    const checkActive = (index, className) =>
        activeIndex === index ? className : "";


    return (
        <div className='grid grid-cols-2'>

            <div>
                <h1 className=' text-3xl font-bold'>Input Your JSON array</h1>
                <textarea className='bg-gray-100 outline-none p-4' onChange={handleChange} value={jsonData} cols="80" rows="27"></textarea>
            </div>

            <div>
                <h1 className='font-bold text-3xl'>This is your Form</h1>
                <div className='bg-white p-10 border-solid border-4 border-blue-400 rounded-xl'>
                    <h1 className='text-2xl font-bold'>New Pizza</h1>
                    <hr className='my-4 border-2 border-gray-200' />
                    {jsonObject.map((item, index) => {
                        return (


                            <form onSubmit={handleSubmit}>
                                <div key={index} className='p-5 bg-gray-100 rounded-xl my-4'>
                                    {/* <h1 className='text-2xl'>New Pizza</h1> */}
                                    {index === 0 ? (
                                        <div className='flex flex-row gap-5 justify-between mt-10'>
                                            <h1 className='required font-bold'>{item.label}</h1>
                                            <input className=' outline-none bg-blue-100 px-2 rounded-md w-[30rem] h-[3rem]' required={item.required} name={item.jsonKey} value={formData.pizzaName} onChange={handleInput} placeholder={item.placeholder} type="text" />
                                        </div>
                                    ) : index === 1 ? (
                                        <div>
                                            {/* Pizza Type  */}
                                            <h1 className='required font-bold'>{item.label}</h1>
                                            <hr className='my-4 border-2 border-gray-200' />
                                            <div className='flex gap-5 justify-between mt-4'>
                                                {/* Tabs Section */}
                                                <main>
                                                    <div className="text-center">
                                                        {item.subParameters.map((subp, index) => {
                                                            return (
                                                                <div>
                                                                    {index === 0 ? (
                                                                        <div className='flex gap-14'>
                                                                            {
                                                                                subp.validate.options.map((tab, i) => {
                                                                                    return (
                                                                                        <div>
                                                                                            <button
                                                                                                onClick={(e) => {
                                                                                                    e.preventDefault();
                                                                                                    handleClick(i);
                                                                                                }}
                                                                                                className={`tab ${checkActive(i, "active")}`}
                                                                                            >
                                                                                                {tab.label}
                                                                                            </button>
                                                                                        </div>
                                                                                    )

                                                                                })
                                                                            }
                                                                        </div>


                                                                    ) : (
                                                                        <div>
                                                                            {naplesStylePizza ? (
                                                                                <div>
                                                                                    {
                                                                                        index === 1 ? (

                                                                                            <div className='flex justify-between mt-5'>
                                                                                                <h1 className='required font-bold pt-2'>{subp.subParameters[0].label}</h1>

                                                                                                <select onChange={handleInput} name={subp.subParameters[0].jsonKey} value={formData.sliceCount} className='w-[30rem] h-[3rem] rounded-md outline-none bg-blue-100 p-2'>
                                                                                                    {subp.subParameters[0].validate.options.map((slice, index) => (
                                                                                                        <option key={index} value={slice.value}>{slice.value}</option>
                                                                                                    ))}
                                                                                                </select>
                                                                                            </div>
                                                                                        ) : null
                                                                                    }
                                                                                </div>
                                                                            ) : (
                                                                                <div>
                                                                                    {/* Cheeseburst Sub section */}
                                                                                    {index === 2 ? (
                                                                                        <div>
                                                                                            <div className='flex justify-between'>
                                                                                                <div className='flex gap-4 mt-5'>
                                                                                                    <h1 className=' font-bold'>{subp.subParameters[0].label}</h1>
                                                                                                    {/* {toggleCC && (
                                                                                                   
                                                                                                )} */}
                                                                                                    <Switch size='small' className='bg-gray-300' onChange={onChangeCC} />
                                                                                                </div>
                                                                                                <div>
                                                                                                    <label className='mr-5'>{subp.subParameters[1].label}</label>
                                                                                                    <input className='outline-none rounded-md px-4 mt-5 w-[20rem] h-[3rem] bg-blue-100' placeholder={subp.subParameters[1].placeholder} type="text" 
                                                                                                        onChange={handleInput}
                                                                                                        name={subp.subParameters[1].jsonKey}
                                                                                                        value={formData.type}
                                                                                                    />

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    ) : null}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )


                                                        })}


                                                        {/* <div
                                                            style={highlightStyles}
                                                            className="bg-gray-500 bg-opacity-10 rounded-sm"
                                                        /> */}
                                                    </div>
                                                </main>
                                                {/* Tabs Section */}

                                            </div>
                                            {/* Slices sub section  */}

                                        </div>

                                    ) : index === 2 ? (
                                        <div>
                                            {/* Toppings Section  */}
                                            <div >
                                                <h1 className='required font-bold'>{item.label}</h1>
                                                <hr className='my-4 border-2 border-gray-200' />
                                                {/* Sauce sub-section  */}
                                                <div className='flex justify-between mt-5'>
                                                    <h1 className='required font-bold'>{item.subParameters[0].label}</h1>
                                                    {/* DropDown  */}
                                                    <select name={item.subParameters[0].jsonKey} value={formData.sauce} onChange={handleInput} className='w-[30rem] h-[3rem] rounded-md outline-none bg-blue-100 p-2'>
                                                        {item.subParameters[0].validate.options.map((slice, index) => (
                                                            <option key={index} value={slice.value}>{slice.value}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                {/* Main Topping sub-section  */}
                                                <div className=' flex justify-between mt-5'>
                                                    <h1 className='required font-bold'>{item.subParameters[1].label}</h1>
                                                    {/* DropDown  */}
                                                    <select name={item.subParameters[1].jsonKey} value={formData.main_toppings} onChange={handleInput} className='w-[30rem] h-[3rem] rounded-md outline-none bg-blue-100 p-2'>
                                                        {item.subParameters[1].validate.options.map((slice, index) => (
                                                            <option key={index} value={slice.value}>{slice.value}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                {/*Include seasoning checkbox*/}

                                                <div className='flex gap-5'>
                                                    <input type="checkbox" className='bg-red-500 border-blue-500' name={item.subParameters[2].jsonKey} onChange={handleInput} checked={formData.include_seasoning} />
                                                    <h1 className='pt-2 font-bold'>{item.subParameters[2].label}</h1>
                                                </div>

                                                <div className='mt-5'>
                                                    {toggle ? (
                                                        <div className='flex justify-between'>
                                                            <h1 className=' font-bold'>{item.subParameters[3].label}</h1>
                                                            <select name={item.subParameters[3].jsonKey} value={formData.second_toppings} onChange={handleInput} className='p-2 w-[30rem] h-[3rem] rounded-md outline-none bg-blue-100'>
                                                                {item.subParameters[3].validate.options.map((slice, index) => (
                                                                    <option key={index} value={slice.value}>{slice.value}</option>
                                                                ))}
                                                            </select>
                                                        </div>

                                                    ) : null}
                                                    <div className='flex gap-4'>
                                                        {toggle ? (
                                                            <h1 className=' font-bold'>Hide advanced field</h1>
                                                        ) : (
                                                            <h1 className=' font-bold'>Show advanced field</h1>
                                                        )}
                                                        <Switch size='small' className='bg-gray-300' onChange={onChange} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : index === 3 ? (
                                        <div>
                                            {toggleSS ? (
                                                <div className='flex justify-between'>
                                                    <h1 className=' font-bold'>{item.label}</h1>
                                                    <select name={item.jsonKey} value={formData.size} onChange={handleInput} className='p-2 w-[30rem] h-[3rem] rounded-md outline-none bg-blue-100'>
                                                        {item.validate.options.map((slice, index) => (
                                                            <option key={index} value={slice.value}>{slice.value}</option>
                                                        ))}
                                                    </select>
                                                </div>


                                            ) : null}
                                            <div className='flex gap-4 justify-between mt-5'>
                                                <div className='flex gap-4  '>

                                                    {toggleSS ? (
                                                        <h1 className=' font-bold'>Hide advanced field</h1>
                                                    ) : (
                                                        <h1 className=' font-bold'>Show advanced field</h1>
                                                    )}
                                                    <Switch size='small' className='bg-gray-300' onChange={onChangeAnother} />
                                                </div>

                                                <div className='flex gap-5'>
                                                    <button className=' bg-red-300 px-4 py-3 rounded-md' onClick={handleCancel}>Cancel</button>
                                                    <button type='submit' className=' bg-gray-400 px-4 py-3 rounded-md text-white'>Submit</button>

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

        </div>
    )

}

























































