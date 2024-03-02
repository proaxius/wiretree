'use client'
import React, { useEffect,useRef } from 'react'
import cytoscape from 'cytoscape'
export default function Cytoscape() {
    const cyRef = useRef(null)

    useEffect( 
      ()=>{
        
            const cy = cytoscape({
                container: cyRef.current,

                elements: [
                    { data: { id: 'a' } },
                    { data: { id: 'b' } },
                    { data: { id: 'ab', source: 'a', target: 'b' } }
                  ],
                  style: [
                    {
                      selector: 'node',
                      style: {
                        'background-color': '#666',
                        'label': 'data(id)'
                      }
                    },
                    {
                      selector: 'edge',
                      style: {
                        'width': 3,
                        'line-color': '#ccc',
                        'target-arrow-color': '#ccc',
                        'target-arrow-shape': 'triangle'
                      }
                    }
                  ]
                });
            cy.on('clieck','node',(event)=>{
                console.log('Node clicked')
            })
                return () => {
                  cy.destroy();
                
                };
        },[])
  return (
    <div className='h-screen' ref={cyRef}></div>
  )
}
