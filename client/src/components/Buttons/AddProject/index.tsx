import {PlusIcon} from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../stores/general';
import { incrementByAmount } from '../../../stores/counter.Reducer';
function AddProject():JSX.Element {
    const count = useSelector((state:RootState)=>state.counter.value);
    const dispatch = useDispatch();

    const handleClick = ()=> {
        dispatch(incrementByAmount(100));
    }

    return (
        <div className='flex items-center gap-2'>
            <button><span className='text-lg hover:bg-burnt_sienna'>Projects</span></button>
            <button onClick={handleClick}><PlusIcon className='w-6 hover:bg-sandy_brown'/>{count}</button>
        </div>
    );
    
}

export default AddProject;