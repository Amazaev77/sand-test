import Sidebar from './components/Sidebar';
import './App.scss';
import Header from './components/Header';
import {FC, useEffect} from "react";
import Routes from "./pages";
import useWindowWidth from "./hooks/useWindowWidth";
import { useDispatch } from "react-redux";
import { hideVisibilitySidebar, showVisibilitySidebar } from "./redux/ducks/app";

const App: FC = () => {
  const dispatch = useDispatch()
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth < 1200) {
      dispatch(hideVisibilitySidebar())
    } else {
      dispatch(showVisibilitySidebar())
    }
  }, [windowWidth, dispatch])

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main">
          <Routes />
        </main>
      </div>
    </div>
  );
}

export default App;
