import React,{useState} from 'react'

function Events() {

const[val,setVal] = useState(0)

function headOneEvent(){
    setVal(new Date().setTime())
        
}
function headTwoEvent(){
setVal(new Date().setTime())

}




  return (
    <div className='tab'>

<h1 onMouseEnter={headOneEvent}>HEAD ONE</h1>
<h2 onMouseOut={headTwoEvent} >HEAD TW0</h2>
<div  >DIV</div>
<table>
<tr>
<th>table</th>
</tr>
<tr>
<td>heading name </td>
<td>date and time logs</td>
<td>Event name</td>
</tr>

<tr>
    <td>{headOneEvent}</td>
    <td>{headOneEvent}</td>
    <td>{headOneEvent}</td>
</tr>







</table>
    </div>
  )
}

export default Events


// Assignment 2 [ "create a h1", "create a h2", "create a div", "manage state to track that when user mouse overed on the h1 and when mouse out with date and time", "create a html table to show the logs.", [ { "time": "", "eventName": "out or in" }, { "time": "", "eventName": "out or in" } ] ]