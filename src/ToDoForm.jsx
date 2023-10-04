import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Create } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function ToDoForm({ addToDo }) {
    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        addToDo(text);
        setText("");
    };


    return (
        <ListItem>
            <form action="" onSubmit={handleSubmit}>
                <TextField value={text} onChange={handleChange} id="outlined-basic" label="Add to do" variant="outlined"
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end" >
                                <IconButton
                                    aria-label="Create to do"
                                    edge="end"
                                    type='submit'
                                >
                                    <Create />
                                </IconButton>
                            </InputAdornment>

                    }} />
            </form>
        </ListItem >
    );
};



// <OutlinedInput
//     id="outlined-adornment-password"
//     type={showPassword ? 'text' : 'password'}

//     label="Password"
// />