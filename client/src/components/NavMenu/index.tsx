import { PlusCircleIcon, BriefcaseIcon, CalendarIcon, CalendarDaysIcon, FolderIcon } from '@heroicons/react/24/solid';
import { Suspense, lazy, useEffect } from 'react';
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../stores/general';
import { getProjects } from '../../stores/projects.Reducer';
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';
import mapProjects from './mapProjects';

const AddProject = lazy(() => import('../Buttons/AddProject'));
const ctaClassNames = 'flex items-center w-full gap-3 mb-3 hover:bg-burnt_sienna focus:bg-burnt_sienna';
const regularIconCtaClassName = 'w-5 my-2';

function NavMenu(): JSX.Element {
    const projectItems = useSelector((state: RootState) => state.projects.projects);
    const projectError = useSelector((state: RootState) => state.projects.errors);
    const test = useSelector((state: RootState) => state.counter);
    const dispatch: AppDispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProjects());
    }, []);

    const projectLinks = projectItems && mapProjects(projectItems);
    
    return (
        <section className='py-4'>
            <button className={ctaClassNames}><PlusCircleIcon className='w-8' /> <span>Add Task</span></button>
            <button className={ctaClassNames}><BriefcaseIcon className={regularIconCtaClassName} /><span>Inbox</span></button>
            <button className={ctaClassNames}><CalendarIcon className={regularIconCtaClassName} /><span>Today</span></button>
            <button className={ctaClassNames}><CalendarDaysIcon className={regularIconCtaClassName} /><span>Upcoming</span></button>
            <div className='py-1 my-2 border-t border-saffron'>
                <Suspense fallback={<Loading />}>
                    <AddProject />
                </Suspense>
                {projectLinks}

            </div>

        </section>
    );
}

export default NavMenu;