'use client'
import React, { useEffect, useState,useRef } from 'react'
import cytoscape from 'cytoscape'

export default function Cytoscape() {
    const cyRef = useRef(null)
    let [ nodeId ,setNodeId] = useState(0)
    let [ nodeLabel ,setNodelabel] = useState('label')

    useEffect( 
      ()=>{
        
            const cy = cytoscape({
                container: cyRef.current,

            
                  style: [
                    {
                      selector: 'node',
                      style: {
                        'background-color': '#666',
                        'label': 'data(id)',
                        'color':'rgb(38,217,59)'
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
                cy.on('click',(event)=>{
                let clientX = event.originalEvent.clientX
                let clientY= event.originalEvent.clientY
                var canvasCords = cy.forceRender().container().getBoundingClientRect()
                var cyPosition = {
                  x : clientX - canvasCords.left,
                  y : clientY - canvasCords.top,
                };

                var zoom = cy.zoom();
                var pan = cy.pan();
                cyPosition.x = ( cyPosition.x - pan.x) / zoom;
                cyPosition.y = ( cyPosition.y - pan.y) / zoom;
                console.log('cyPosition', cyPosition);
                cy.add( ()=>{
                  let newNodeId = nodeId +1
                  setNodeId(newNodeId)

                },{
                  selector: 'node',
                  group: 'nodes',
                  data:{id:nodeId,
                  label : 'Label'
                },
                  position:{
                    x:cyPosition.x,
                    y:cyPosition.y
                  }
                })
                })
                return () => {
                  cy.destroy();
                
                };
        },
        [])
  return (
    <div className='h-screen block' id="canvas" ref={cyRef}></div>
  )
}
