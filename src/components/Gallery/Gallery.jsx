import { useEffect, useState } from "react"

// ghtfrdesa
function Gallery(props){
const[a,setA]=useState(6)

function inc(){
    setA(a+1)
    console.log(a)
}

function dec(){
    setA(a-1)
    console.log(a)
}


useEffect(()=>{},[])
return(
<div>
 <h1>Gallery {props.hh}</h1> 
 <button onClick={inc}>+</button>
 <button onClick={dec}>-</button>  
</div>

)
}
export default Gallery