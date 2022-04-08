import { Button } from "@mui/material"
import { getBalance, mintToken } from "../Functional/connections"

function QuizResult({answers}: any){

    function refreshBalance(){
        getBalance()
    }

    return(
        <div>
            {answers.map((answer: Array<string>, index: number) => {
                return(
                    <div>
                        <p>Question {index + 1}</p>
                        <p>{answer}</p>
                    </div>
                )
            })}
            <Button onClick={() => {mintToken(), refreshBalance()}}>Submit</Button>
        </div>
    )
}

export default QuizResult