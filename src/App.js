import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import NewsLetter from "./NewsLetter";
import Body from "./Body";
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Body */}
      <Body/>
      {/* Footer */}
      <NewsLetter />
      <Footer/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
