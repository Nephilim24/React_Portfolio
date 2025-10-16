import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Loader from "./components/Loader/Loader.jsx";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Loader />
      <Header />
      <Main />
      <Analytics />
    </>
  );
}

export default App;
