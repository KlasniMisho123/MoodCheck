import React from 'react'

export default function InputError(props) {
    const { errorText } = props;
    return (
        <label className='text-red-700 bg-red-300 p-1 flex gap-1 justify-center items-center '>
            <img src='https://cdn.pixabay.com/photo/2013/04/01/10/55/attention-98643_640.png' className='h-4 w-4'></img>
            {errorText}
        </label>
    );
}