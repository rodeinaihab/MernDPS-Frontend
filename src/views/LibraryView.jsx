import React, {useState, useEffect} from 'react';
import {Table} from "./Table";
import {TableColumns} from "./columns";
import axios from "axios";


export default function LibraryView(props) {
    const [books, setBooks] = useState([]);

    const getBooksFromBackend = () => {
        return axios.get("http://localhost:4000/api/books").then(({data}) => {
            return data
        })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getBooksFromBackend().then((data) => {
            setBooks(data)
        })

    }, []);

    return (
        <div>
            {books.length  && (<Table columnNames={TableColumns} submissions={books} />)}

        </div>
    );
}
