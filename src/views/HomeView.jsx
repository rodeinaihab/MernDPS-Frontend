import React from 'react';
import { useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./HomeView.css";

export default function HomeView(props) {
    const { handleSubmit, register} = useForm();

    let history = useHistory();

    const addBook = (data) => {
        axios.post("http://localhost:4000/api/books",  data).then((res) => {
            console.log(res);
            alert("Your book has been added successfully to the Library :)")
        })
    };

    return (
        <div>
            <h1>BookFinder App</h1>
            <div className={"addBookForm"}>
                <form onSubmit={handleSubmit(addBook)} >
                    <TextField
                        {...register("title")}
                        id="outlined-full-width"
                        label="Title"
                        style={{ margin: 8 }}
                        placeholder="Enter the title"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        {...register("author")}
                        id="outlined-full-width"
                        label="Author"
                        style={{ margin: 8 }}
                        placeholder="Enter the author"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <Button
                        className="submit-button"
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Add Book
                    </Button>
                    <Button
                        className="library-button"
                        variant="contained"
                        color="primary"
                        onClick={ () => history.push("/listBooks")}
                    >
                        Library
                    </Button>
                </form>

            </div>
        </div>
    );
}

