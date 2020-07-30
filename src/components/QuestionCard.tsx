import React, { useState } from 'react'
import { questionPropsType } from '../Types/quizTypes'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const QuestionCard: React.FC<questionPropsType> = ({ question, options, callback }) => {

    let [selectedAns, setSelectedAns] = useState('');

    const handleSelection = (ev: any) => {
        setSelectedAns(ev.target.value)
    }

    function decodeHtml(input:string) {
        var txt = document.createElement("textarea");
        txt.innerHTML = input;
        return txt.value;
    }

    return (
        <div className="card-container ">
            <Card style={{backgroundColor:'rgba(255,255,255,0.8)'}}>
                <CardContent>
                    <Typography variant="h4" component="h2">Question</Typography>
                    <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}>
    <Typography variant="h6" >{decodeHtml(question)}</Typography>
                        {
                            options.map((opt: string, index: number) => {
                                return (
                                    <div key={index}>
                                        <label>
                                            <input
                                                type="radio"
                                                name="opt"
                                                required
                                                checked={selectedAns === opt}
                                                value={opt}
                                                onChange={handleSelection}
                                            />
                                            {decodeHtml(opt)}
                                        </label>
                                    </div>
                                )
                            })
                        }
                        <input type='submit' />
                    </form>
                </CardContent>
                <CardActions>
                    <Button>

                    </Button>
                </CardActions>
            </Card>

        </div>
    )
}

export default QuestionCard
