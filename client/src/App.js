import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <div className="App">
      <h1>My Awesome Blog</h1>
      <HomePage></HomePage>
      <AboutPage></AboutPage>
      <ArticlesListPage></ArticlesListPage>
      <ArticlePage></ArticlePage>
    </div>
  );
}

export default App;
