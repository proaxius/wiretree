'use client'
import React, { useEffect , useRef} from 'react'

export default function Menu() {

  //for the scrolling of horizontal menu via mouse wheel
const scrollView = useRef(null)
  function handleScroll(event){
    if(event.deltaY !== 0){ 
      event.preventDefault();
      scrollView.current.scrollLeft += event.deltaY
    
    }
  //just for developemnt purposes if seen after RELEASE report to developers
console.log('scrolling by  '+ event.deltaY)
  }
  return (
    <div className='bg-white  absolute bottom-0  overflow-x-auto overflow-y-hidden w-[100%]' onWheel={handleScroll} ref={scrollView}>
      <div className='space-x-4 inline-flex '  >
      <div draggable={true} className='bg-red-500 h-20 w-20' >1</div>
      <div draggable={true} className='bg-orange-500 h-20 w-20'>2</div>
      <div draggable={true} className='bg-yellow-500 h-20 w-20'>3</div>
      <div draggable={true} className='bg-green-500 h-20 w-20'>4</div>
      <div draggable={true} className='bg-red-500 h-20 w-20'>1</div>
      <div draggable={true} className='bg-orange-500 h-20 w-20'>2</div>
      <div draggable={true} className='bg-yellow-500 h-20 w-20'>3</div>
      <div draggable={true} className='bg-green-500 h-20 w-20'>4</div>
      <div draggable={true} className='bg-red-500 h-20 w-20'>1</div>
      <div draggable={true} className='bg-orange-500 h-20 w-20'>2</div>
      <div draggable={true} className='bg-yellow-500 h-20 w-20'>3</div>
      <div draggable={true} className='bg-green-500 h-20 w-20'>4</div>
      <div draggable={true} className='bg-red-500 h-20 w-20'>1</div>
      <div draggable={true} className='bg-orange-500 h-20 w-20'>2</div>
      <div draggable={true} className='bg-yellow-500 h-20 w-20'>3</div>
      <div draggable={true} className='bg-green-500 h-20 w-20'>4</div>
      <div draggable={true} className='bg-red-500 h-20 w-20'>1</div>
      <div draggable={true} className='bg-orange-500 h-20 w-20'>2</div>
      <div draggable={true} className='bg-yellow-500 h-20 w-20'>3</div>
      <div draggable={true} className='bg-green-500 h-20 w-20'>4</div>
      </div>
    </div>
  )
}
