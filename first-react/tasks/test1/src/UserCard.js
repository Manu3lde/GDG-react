import React from "react";

const UserCard = ({title, age, email}) => {
    const user = ['Manuel', 'Menata','Robel'];
    

    return (
        <div>
            <ul>
            {user.map(user => <li>{user}<p>{title} age:{age}</p>
                <p>And his email is: {email}</p></li>)}
            </ul>
            
        </div>
    )
    
}

export default UserCard;