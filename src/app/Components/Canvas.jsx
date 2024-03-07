'use client'
import React from 'react'
import ReactFlow from 'reactflow'
import Menu from './Menu'

export default function Canvas() {
  return (
    <div className=''>
    <div className=' block h-[100vh] z-[-1]'>
    <ReactFlow style={{backgroundColor:'#000000',position:'absolute',zIndex:'-1'}}>
    
    </ReactFlow>
    <Menu />
    </div>
   </div>
  )
}   