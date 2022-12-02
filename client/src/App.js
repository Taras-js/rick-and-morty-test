import './App.css';
import {client} from "./index"
import {useState} from "react";
import {gql} from "@apollo/client";

function App() {
    const [books, setBooks] = useState(null)
    client
    .query({
        query: gql`
            query Books {
                books {
                    title
                    author
                }
            }
        `,
    })
    .then(result => {
        console.log('result:', result.data.books)
        if (result.data) {
            setBooks(result.data.books)
        }
    });
    return (
        <div className="App">
            <>
                {books.map(i => {
                    return (
                        <>
                          <div>
                            i.title
                          </div>
                          <div>
                            i.author
                          </div>
                        </>


                    )

                })}

            </>


        </div>
    );
}

export default App;
