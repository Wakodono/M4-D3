import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import historyBooks from './components/historyBooks.json'
import BookList from './components/BookList'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <WarningSign text = "Look out below!!" />
            <MyBadge text = "BADGE" color = "Light" />
            <SingleBook book={historyBooks[0]} />
            <BookList books={historyBooks} />
        </div>
      </header>
    </div>
  );
}

export default App;
