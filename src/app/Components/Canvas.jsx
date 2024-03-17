'use client'
import React from 'react'
import ReactFlow, { Background, Handle, MiniMap } from 'reactflow'
import Menu from './Menu'

export default function Canvas() {
  return (
    <div className='h-[100vh]'>
    
    <ReactFlow attributionPosition='null' style={{backgroundColor:'#424242',zIndex:'-1',width:"100%"}} onDrop={(event)=>{
       event.preventDefault();
    const elementId = event.dataTransfer.getData("text/plain");
    
    } }
   
    onDragOver={(event)=> event.preventDefault()} >
 <Background color='#212121' variant='cross'/>
    </ReactFlow>
    <Menu />
    
   </div>
  )
}   