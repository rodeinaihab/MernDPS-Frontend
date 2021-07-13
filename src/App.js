import {useEffect, useState} from 'react'
import './App.css';
import {BrowserRouter, Switch, Route}  from "react-router-dom";
import HomeView from "./views/HomeView";
import LibraryView from "./views/LibraryView";
import axios from "axios";

function App() {
    const [books, setBooks] = useState([]);
    useEffect(() => {

        axios.get("http://localhost:4000/api/books").then((res) => {
            setBooks(res);
        })
    }, []);
  return (
      <BrowserRouter>
        <div className="App">
            <Switch>
                <Route exact path={"/"}>
                    <HomeView />
                </Route>
                <Route exact path={"/listBooks"}>
                    <LibraryView books={books} />
                </Route>
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
