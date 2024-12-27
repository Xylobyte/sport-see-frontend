import DashboardPage from "./pages/DashboardPage.tsx";
import Header from "./components/Header.tsx";
import Aside from "./components/Aside.tsx";

const App = () => {
    return <>
        <Header/>
        <div className="flex">
            <Aside/>
            <DashboardPage/>
        </div>
    </>;
};

export default App;
