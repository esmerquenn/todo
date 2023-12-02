import React from 'react'
import { FaStar, FaUser } from "react-icons/fa6";

function Header() {
  const path = './assets/img/'
  const arr = [
    {img: 'c1.jpg.webp',h2:'English Grammar',btn: 'free'},
    {img: 'c2.jpg.webp',h2:'Vocabulary',btn: '$20'},
    {img: 'c3.jpg.webp',h2:'Expository writing',btn: '$45'}
  ]
  return (
    <>
      <div className="a flex justify-between w-[80%] m-auto h-[100vh] items-center">
        {arr.map((item, i)=>(
        <article key={i} className='rounded-[10px] duration-[.5s] shadow-lg hover:shadow-xl w-[340px] overflow-hidden'>
          <img className='w-[100%] ' src={path + item.img} alt="" />
          <div className=' p-[20px]'>
              <h2 className='font-bold text-[1.5em]'>{item.h2}</h2>
              <h5 className='text-[1.1em] text-[#00000052] duration-[.5s] hover:text-[#333] '>Sarah Parker : Art & Design</h5>
              <p className='text-[1em] pr-[20px] py-[10px] font-normal text-[#5a5a5ac2] leading-6 font-[arial]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
          </div>
          <div className='bg-[#f7f7f7] flex justify-between'>
            <div className='flex'>
              <span className='flex items-center justify-center w-[70px] border-r-[1px] text-[#00000052] p-[10px] text-[.7em] gap-[6px]'><FaUser /> 10</span>
              <span className='flex items-center justify-center w-[70px] border-r-[1px] text-[#00000052] p-[10px] text-[.7em] gap-[6px]'><FaStar /> 4.5</span>
            </div>
            <button className='text-[#fff] text-[.8em] font-bold w-[70px] p-[7px] uppercase bg-[#3762f0]'>{item.btn}</button>
          </div>
        </article>))}
        
        </div>
    </>
  )
}

export default Header
