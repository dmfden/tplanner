import { Link } from "react-router-dom";
import { Iproject } from "../../@types/Project";
import { v4 as uuidv4 } from "uuid";
import { FolderIcon } from '@heroicons/react/24/solid';
import './navLinks.scss';

function mapProjects(projects: Iproject[]): JSX.Element {
    return (
        <ul className="mt-4">
            {projects.map(
                (item) =>
                    <li key={uuidv4()} className='mb-4'>
                        <Link to='#' className={`flex w-min gap-1 p-1 border rounded ${item.color}`}>
                            <span><FolderIcon className='w-5' /></span>{item.title}
                        </Link>
                    </li>
            )}
        </ul>
    );
}

export default mapProjects;