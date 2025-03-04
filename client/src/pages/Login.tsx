import React from 'react'
import Pen from '../assets/icons/Pen'
import Contents from '../assets/icons/Contents'
import Users from '../assets/icons/users'
import ReCAPTCHA from "react-google-recaptcha";

function Login() {
    function onChange() {
      }
  return (

    <div className='mx-6 mt-8'>
        <div>
            <p className='font-semibold text-3xl mb-2'>Đăng nhập</p>
            <hr className='' />
            <p className='my-3 text-sm px-1'>Ngôn ngữ: <span className='cursor-pointer'>
            Deutsch | English | Esperanto | Français | Español | Italiano | Nederlands | Tiếng Việt
            </span> </p>
            <hr />
            <div className=' w-3/5 h-[600px] border my-4 flex'>
                <form className='w-1/2 my-8 mx-6' action="">
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='mb-2 text-lg'>Tên đăng nhập</label>
                            <input required type="text" className=' block w-full text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-lg' placeholder='Nhập tên đăng nhập' />
                        </div>
                        <div className='flex w-full mt-6'>
                            <div className=' flex flex-col w-1/2 mr-6'>
                                <label className='mb-2' htmlFor="">Mật khẩu</label>
                                <input required className='block w-full text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-lg' type="password"  placeholder='Nhập mật khẩu' />
                            </div>
                        </div>
                        <div className='my-6'>
                            <label htmlFor="">Email</label>
                            <input required placeholder='Nhập vào Email' className='mt-2 block w-full text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-lg' type="text" />
                        </div>
                        <ReCAPTCHA 
                            className=''
                            sitekey="6LdVipMoAAAAAKI2EvA4ks0wZsmOa5rkeba3XlI8"
                            onChange={onChange}
                        />
                        <button type='submit' className='bg-sky-500 mt-12 h-12 rounded-lg text-white'>
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <hr className='my-6' />
    </div>
  )
}

export default Login