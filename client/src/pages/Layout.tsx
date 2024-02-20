import { Outlet } from 'react-router-dom';
import Header from "../components/Header";
import { useGetProjectsQuery } from '../stores/api/api';

function Layout():JSX.Element {
    const {isLoading, data} = useGetProjectsQuery('projects');

    console.log("DATA", data);
    return <div className="min-h-screen">
            <Header />
            <main className="flex m-auto max-w-[680px] px-3 xl:px-0 xl:max-w-[900px]"><Outlet/></main>
    </div>
}

export default Layout;