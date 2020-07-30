import React, {useState} from 'react'
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import {quizStartPropType} from '../Types/quizTypes'

const StartQuiz: React.FC<quizStartPropType> = ({callback}) => {

   

    let [selectedCategory, setSelectedCategory] = useState(9);
    let [selectedLevel, setSelectedLevel] = useState('easy')

    const handleCategorySelection = (ev: any) => {
        setSelectedCategory(ev.target.value)
    }

    const handleLevelSelection = (ev:any) =>{
        setSelectedLevel(ev.target.value)
    }

    return (
        <div className="start-container">
            <form name="quizSelector" onSubmit={(e: React.FormEvent<EventTarget>) => callback(e,selectedCategory, selectedLevel )}>
                <Card style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
                    <CardContent>
                        <FormControl style={{ display: 'flex' }}>
                            <InputLabel htmlFor="uncontrolled-native" style={{ color: 'white' }}>select quiz subject</InputLabel>
                            <NativeSelect
                                style={{ backgroundColor: 'white' }}
                                defaultValue={30}
                                inputProps={{
                                    name: 'name'
                                }}
                                onChange={handleCategorySelection}
                            >
                                <option value={9}>General Knowledge</option>
                                <option value={10}>Entertainment: Books</option>
                                <option value={11}>Entertainment: Film</option>
                                <option value={12}>Entertainment: Music</option>
                                <option value={13}>Entertainment: Musicals &amp; Theatres</option>
                                <option value={14}>Entertainment: Television</option>
                                <option value={15}>Entertainment: Video Games</option>
                                <option value={16}>Entertainment: Board Games</option>
                                <option value={17}>Science &amp; Nature</option>
                                <option value={18}>Science: Computers</option>
                                <option value={19}>Science: Mathematics</option>
                                <option value={20}>Mythology</option>
                                <option value={21}>Sports</option>
                                <option value={22}>Geography</option>
                                <option value={23}>History</option>
                                <option value={24}>Politics</option>
                                <option value={25}>Art</option>
                                <option value={26}>Celebrities</option>
                                <option value={27}>Animals</option>
                                <option value={28}>Vehicles</option>
                                <option value={29}>Entertainment: Comics</option>
                                <option value={30}>Science: Gadgets</option>
                                <option value={31}>Entertainment: Japanese Anime &amp; Manga</option>
                                <option value={32}>Entertainment: Cartoon &amp; Animations</option>
                            </NativeSelect>

                        </FormControl>

                        <FormControl style={{ display: 'flex' }}>
                            <InputLabel htmlFor="uncontrolled-native" style={{ color: 'white' }}>select quiz difficulty</InputLabel>
                            <NativeSelect
                                style={{ backgroundColor: 'white' }}
                                defaultValue={30}
                                inputProps={{
                                    name: 'name'
                                }}
                                onChange={handleLevelSelection}
                            >
                                <option value='easy'>Easy</option>
                                <option value='medium'>Medium</option>
                                <option value='hard'>Hard</option>
                            </NativeSelect>

                        </FormControl>

                    </CardContent>
                    <CardActions>
                        <input type="submit" />
                    </CardActions>
                </Card>

            </form>
        </div>
    )
}

export default StartQuiz
