

import Photo1 from "./NodeAssets/svg/header.svg"
import Photo2 from "./NodeAssets/svg/table-top.svg"


export default function NodeElements() {
   
        const dataElements = [
        {
            id:1,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:2,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:3,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:4,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:5,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:6,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:7,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:8,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:9,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:10,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:11,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:12,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:13,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:14,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:15,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:16,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:17,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:18,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:19,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:20,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:21,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:22,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:23,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:24,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:25,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:26,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:27,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:28,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:29,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
        {
            id:30,
            elementType:"Header",
            label:'Header',
            icon:"",

        },
       
    ]
    //this here where data will be repeatedly rendered

const container_y = useRef(null)
function scrollX(event){
if(event.deltaY !== 0){
    event.preventDefault()
    container_y.current.scrollLeft += event.deltaY
}
}

    return (
        <div className="h-52 w-[100vw] overflow-y-hidden overflow-x-auto" onWheel={scrollX}  ref={container_y}>
            <div  className="inline-flex gap-8 mx-4 ">

            {dataElements.map((inputSet)=>  { 
                return <div draggable={true} onDragStart={(event)=> event.dataTransfer.setData("text/plain",inputSet.elementType)} className="h-28 w-28" key={inputSet.id}>
                    <label>{inputSet.label}</label>
                    <p>{inputSet.id}</p>
                    </div>
            })}
            </div>
        </div>
    )
}