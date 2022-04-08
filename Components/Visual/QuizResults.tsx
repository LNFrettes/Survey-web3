import { Box, Button } from "@mui/material"
import { getBalance, mintToken } from "../Functional/connections"

function QuizResult({answers}: any){

   

    return(
        <Box >
            <b>Results:</b>
            {answers.map((answer: Array<string>, index: number) => {
                return(
                    <div>
                        <p >Question {index + 1}: {'null' || answer}</p>
                    </div>
                )
            })}
            <Button variant='contained'  onClick={() => {mintToken()}}>Submit</Button>
        </Box>

    )
}

export default QuizResult