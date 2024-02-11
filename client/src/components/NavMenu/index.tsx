import {PlusCircleIcon, BriefcaseIcon,CalendarIcon, CalendarDaysIcon} from '@heroicons/react/24/solid';

const ctaClassNames = 'flex items-center w-full gap-3 mb-3 hover:bg-burnt_sienna focus:bg-burnt_sienna';
const regularIconCtaClassName = 'w-5 my-2';

function NavMenu ():JSX.Element {    
    return (
        <section className='py-4'>
            <button className={ctaClassNames}><PlusCircleIcon className='w-8'/> <span>Add Task</span></button>
            <button className={ctaClassNames}><BriefcaseIcon className={regularIconCtaClassName} /><span>Inbox</span></button>
            <button className={ctaClassNames}><CalendarIcon className={regularIconCtaClassName} /><span>Today</span></button>
            <button className={ctaClassNames}><CalendarDaysIcon className={regularIconCtaClassName}/><span>Upcoming</span></button>
        </section>
    );
}

export default NavMenu;