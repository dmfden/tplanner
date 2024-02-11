
import { useEffect, useState } from 'react';
import NavMenu from '../NavMenu';
import { Squares2X2Icon, ArrowLeftCircleIcon } from '@heroicons/react/24/solid';

const buttonOpenCloseAnim = 'duration-500 hover:-translate-x-1 hover:-translate-y-1 focus:-translate-x-1 focus:-translate-y-1';

function Header(): JSX.Element {

    const [isOpenPanel, setIsOpenPanel] = useState(false);


    useEffect(() => {
        window.innerWidth > 1024 && setIsOpenPanel(true);
    }, []);
    
    const testHandle = () => {
      //  dispatch(addProject({ id: 'sfsfs', title: 'sfsfsf', compleated: false }));
    }

    const drawerControllCtaHandler = () => {
        setIsOpenPanel((prev) => !prev);
    }

    const drawerPos = isOpenPanel ? "left-0" : "-left-full";
    const ariaIsOpenMenu = isOpenPanel;

    return (
        <header className="py-4 shadow-lg bg-saffron-100">
            <div className="px-4">
                <button className={`group flex flex-row flex-wrap gap-1 ${buttonOpenCloseAnim}`} onClick={drawerControllCtaHandler} id='menubutton' aria-controls="menu">
                    <div className='flex w-full gap-1'>
                        <Squares2X2Icon className='w-6' />
                        <span>OPEN PANEL</span>
                    </div>
                    <div className='w-full h-[2px]'>
                        <div className='w-0 h-full duration-700 bg-saffron group-hover:w-full'></div>
                    </div>
                </button>
            </div>
            <div className={`absolute top-0 bottom-0 w-3/4 shadow-lg duration-700 px-2 py-4 bg-charcoal-300 ${drawerPos} md:w-2/4 lg:w-1/3 xl:w-[12%]`} id="menu" aria-expanded={ariaIsOpenMenu}>
                <button className='flex gap-1 ml-auto' onClick={drawerControllCtaHandler}>Close <ArrowLeftCircleIcon className='w-6' id='menubutton_close' aria-controls="menu" /></button>
                <NavMenu />
            </div>
        </header>
    );
}

export default Header;