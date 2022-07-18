import React from "react";

import Card from './card';

import classes from './UserList.module.css';

const UserList = props => {
    return (

        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li>
                        {user.name} ({user.age})
                    </li>
                ))}
            </ul>
        </Card>
    );
};


export default UserList;