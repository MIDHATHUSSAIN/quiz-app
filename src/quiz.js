import { useRef, useState } from "react";
import { data } from "./data/data";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

function QUIZ() {
  let [index, setIndex] = useState(0);
  let [reactdata, setreactdata] = useState(data[index]);
  let [result , setResult] = useState(0)
  let [lock , setLock] = useState(false)
  let option1 = useRef(null)
  let option2 = useRef(null)
  let option3 = useRef(null)
  let optionarray = [option1,option2,option3]
  function showresult(){
    alert(`your score ${result} and total sore was ${data.length * 2}`)
  }
  function indexhandeler (){
    setIndex( index += 1)
    setreactdata(data[index])
    if(lock === true){
        optionarray.map((op)=>{
            op.current.classList.remove('correct')
            op.current.classList.remove('wrong')
            setLock(false)
        })
    }

  }
  function anscheck(e,ans){
    console.log(ans)
    console.log(reactdata.ans)
    if(lock === false){
        if(reactdata.ans===ans){
            console.log('hi')
            e.target.classList.add('correct')
            setResult( result += 2)
            setLock(true)
         }else{
            e.target.classList.add('wrong')
            setLock(true)
            optionarray[reactdata.ans - 1].current.classList.add('correct')
         }
    }
     
  }
  return (
    <div>
      <div class="card" >
        <img class="card-img-top" src={reactdata.img} alt="Card image cap"  height={150}/>
        <div class="card-header">{index + 1 }.  {reactdata.question}</div>
        <div> <ul class="list-group list-group-flush">
          <li ref = {option1} class="list-group-item"onClick={(e)=>{anscheck(e,1)}}>{reactdata.option1}</li>
          <li ref = {option2} class="list-group-item" onClick={(e)=>{anscheck(e,2)}}>{reactdata.option2}</li>
          <li ref = {option3} class="list-group-item" onClick={(e)=>{anscheck(e,3)}}>{reactdata.option3}</li>
        </ul></div>
        <div class="card-body">
            {index < data.length -1 ? (<button onClick={indexhandeler} className="btn">NEXT</button>) : (<button onClick={showresult} className="btn">Finish</button>)}
          
        </div>
      </div>
    </div>
  );
}

export default QUIZ;
