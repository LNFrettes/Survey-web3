import { Button } from "@mui/material"
import { useEffect, useRef, useState} from "react"
import { flushSync } from "react-dom"




function Question({question , totalQuestions, currentQuestion, setAnswer}: any){

    const [selectedOption, setSeletedOption] = useState(null)
    const timer = useRef(0)
    const progressBar = useRef(null)

    function gotoNextQuestion(){
        if(timer.current){
            clearTimeout(timer.current) 
        };

        flushSync(()=>{
            setAnswer(selectedOption)
        });
        setSeletedOption(null)
    }


    useEffect(()=>{
        // progressBar.current.classList.remove('active')
        // setTimeout(()=>{
        //     progressBar.current.classList.add('active')
        // }, 0)
        timer.current = window.setTimeout(gotoNextQuestion, question.lifetimeSeconds*1000);
  
    }, [question])

 

    return(
        <div>
            <h2>aa</h2>
            <div className='progress-bar' ref={progressBar}>
                <p>{currentQuestion}</p>
                
                <p>{totalQuestions}</p>
                <p>{question.text}</p>
                <img src={question.image}></img>
                
                {
                    question.options.map((option: any, index: number)=>{
                        return(
                            <div>


                            <Button key={index}  onClick={()=> {setSeletedOption(option.text)}}> 
                                <p>{option.text}</p>
                            </Button>
                            </div>
                        )
                    })
                }

                <Button key={'next'} onClick={() => {gotoNextQuestion()}}> next </Button>
            </div>
        </div>
    )

}
export default Question