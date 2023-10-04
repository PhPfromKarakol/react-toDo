import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function ToDoItem({ todo, removeTodo, toggle }) {
    const labelId = `checkbox-list-label-${todo.id}`;

    const remove = () => {
        removeTodo(todo.id);
    };

    return (
        <ListItem
            secondaryAction={
                <IconButton onClick={remove} edge="end" aria-label="comments">
                    <RemoveCircleIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={toggle}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.text} />
            </ListItemButton>
        </ListItem>
    );
};
