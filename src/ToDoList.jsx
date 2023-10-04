import { useState, useEffect } from "react";


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import { Box, Typography } from "@mui/material";




export default function ToDoList() {

    const getInitData = () => {
        const data = JSON.parse(localStorage.getItem('todos'));
        if (!data) {
            return [];
        }
        return data;
    };

    const [todos, setTodos] = useState(getInitData);

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(t => t.id !== id);
        })
    };

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                else {
                    return todo;
                }
            })
        })
    }

    const addToDo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }];
        })
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            m: 3,
        }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                To Do
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo => {
                    return <ToDoItem todo={todo} key={todo.id} removeTodo={removeTodo} toggle={() => toggleTodo(todo.id)} />
                })}
                <ToDoForm addToDo={addToDo} />
            </List>
        </Box>

    );
};




// export default function CheckboxList() {
//     const [checked, setChecked] = React.useState([0]);

//     const handleToggle = (value: number) => () => {
//         const currentIndex = checked.indexOf(value);
//         const newChecked = [...checked];

//         if (currentIndex === -1) {
//             newChecked.push(value);
//         } else {
//             newChecked.splice(currentIndex, 1);
//         }

//         setChecked(newChecked);
//     };

//     return (
//         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//             {[0, 1, 2, 3].map((value) => {
//             })}
//         </List>
//     );
// }