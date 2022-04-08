import { Box, Button } from "@mui/material"
import { useEffect, useRef, useState} from "react"
import { flushSync } from "react-dom"
import {Stack} from '@mui/material'




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
        <Box sx={{display: 'flex'}}>
            <div className='progress-bar' ref={progressBar}>
                <p>Question {currentQuestion} of {totalQuestions}</p>
                <p>{question.text}</p>
                <img src={question.image} height='100px'></img>

                <Stack direction="row" spacing={2}>              
                    {
                        question.options.map((option: any, index: number)=>{
                            return(
                                <Button  key={index}  onClick={()=> {setSeletedOption(option.text)}}> 
                                    <p>{option.text}</p>
                                </Button>
                            )
                        })
                    }
                </Stack>

                <Button key={'next'}  variant='contained' onClick={() => {gotoNextQuestion()}} > next </Button>
            </div>
        </Box>
    )

}
export default Question