import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/result' element={<Result />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </Router>
  );
}
export default App;
