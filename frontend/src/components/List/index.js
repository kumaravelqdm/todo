import * as React from 'react';
import {
    List, ListItem, ListItemText,
    ListItemAvatar, Avatar, Paper
} from '@mui/material';

export function ListData({ data = [] }) {
    return (
        <List>
            {data.map(vl => <Paper elevation={2} style={{ marginBottom: 15 }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={vl.name.toUpperCase()} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={vl.name}
                        secondary={
                            <React.Fragment>
                                {vl.description}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </Paper>)}
        </List>
    );
}