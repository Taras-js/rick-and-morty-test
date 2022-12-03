import './App.css';
import {client} from "./index"
import {useState} from "react";
import {gql} from "@apollo/client";
import Image from "./driver.png";
function App() {
    const [users, setUsers] = useState(null)
    client
    .query({
        query: gql`
            query Users {
                users {
                    id
                    name
                    username
                    email
                    phone
                    website
                    company {
                        name
                        catchPhrase
                        bs
                    }
                    address {
                        street
                        suite
                        city
                        zipcode
                        geo {
                            lat
                            lng
                        }
                    }
                }
            }
        `
    })
    .then(result => {
        if (result.data) {
            console.log('users:',result.data.users)
            if(result.data.users){
                setUsers(result.data.users)
            }
        }
    });

    return (
        <div className="App">
            <div className='wrapper__carts'>
                {users && users.map(user => {
                    return (
                        <div className='wrapper__cart' key={user?.id}>
                            <img className='image__user' src={Image} alt={'user'}/>
                            <div>Nick: <b>{user?.username}</b></div>
                            <div>Name: <b>{user?.name}</b></div>
                            <div>Phone: <b>{user?.phone}</b></div>
                            <div>Email: <b>{user?.email}</b></div>
                            <div>Website: <b>{user?.website}</b></div>
                            <div>Company: <b>{user?.company.name}</b></div>
                            <div className='wrapper__button'>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    );
}

export default App;
