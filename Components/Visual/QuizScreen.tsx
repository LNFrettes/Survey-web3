import { AppBar, Box, Button } from '@mui/material';
import { copyFileSync } from 'fs';
import { useState } from 'react'
import SurveyData from '../../Data/SurveyData.json'
import  Question  from './Question';
import QuizResult from './QuizResults';



function QuizScreen(){
    const QuizData = SurveyData[0]
    const Questions = QuizData.questions
    

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [markedAnswers, setMarkedAnswers] = useState(new Array(Questions.length));
    const isQuestionEnd = currentQuestionIndex == Questions.length;
    const [startQuiz, setStartQuiz] = useState(true)

        
    return(
        <div>
        <Box sx={{
               border: 1,
               borderColor: 'grey.500',
               borderRadius: 5,
               padding: 2,
               display: 'flex' ,
        }
        }>
            {
            startQuiz ? <Button variant='outlined' onClick={() => {setStartQuiz(false)}}> Start </Button> : (isQuestionEnd ? (<QuizResult answers={markedAnswers}/>) : (
                <Question 
                    question = {Questions[currentQuestionIndex]}
                    totalQuestions = {Questions.length}
                    currentQuestion = {currentQuestionIndex + 1}
                    setAnswer = {(answer: string) => {
                        setMarkedAnswers((arr)=> {
                            let newArr = [...arr];
                            newArr[currentQuestionIndex ] = answer
                            console.log(newArr)
                            return newArr
                        })
                        setCurrentQuestionIndex(currentQuestionIndex + 1)
                    }}
                    />))}
        </Box>
        </div>
    )
}

export default QuizScreen