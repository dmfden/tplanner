import {PlusIcon} from '@heroicons/react/24/solid';

function AddProject():JSX.Element {
 


    const handleClick = ()=> {
       
    }

    return (
        <div className='flex items-center gap-2'>
            <button><span className='text-lg hover:bg-burnt_sienna'>Projects</span></button>
            <button onClick={handleClick}><PlusIcon className='w-6 hover:bg-sandy_brown'/></button>
        </div>
    );
    
}

export default AddProject;