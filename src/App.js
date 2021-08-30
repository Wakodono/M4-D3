import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import historyBooks from './components/historyBooks.json'
import BookList from './components/BookList'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/Welcome'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            {/* < /> */}
            <MyJumbotron />
            <BookList books={historyBooks} />
            <MyFooter />
        </div>
      </header>
    </div>
  );
}

export default App;
