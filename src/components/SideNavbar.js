import React from 'react'

//import image 
import ProfilePicture from 'assets/images/profile.png'
import { ReactComponent as PitoLogoSmall } from 'assets/images/pito-small.svg'
import { ReactComponent as DashboardIcon } from 'assets/images/dashboard-icon.svg'
import { ReactComponent as LivestreamIcon } from 'assets/images/livestream-icon.svg'
import { ReactComponent as MerchantListIcon } from 'assets/images/merchantlist-icon.svg'
import { ReactComponent as UserlistIcon } from 'assets/images/userlist-icon.svg'
import { ReactComponent as AnalyticIcon } from 'assets/images/analytic-icon.svg'
import { ReactComponent as TicketIcon } from 'assets/images/ticketsup-icon.svg'
import { ReactComponent as CategoriesIcon } from 'assets/images/categories-icon.svg'
import { ReactComponent as LogoutIcon } from 'assets/images/logout-icon.svg'

//import components
import ListMenu from './listMenu/index'


const SideNavbar = () => {
    const classNameSVG = "icon mx-auto"
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <div className="w-full md:hidden">
                <button className="px-4 py-4 md:hidden focus:outline-none float-left" onClick={(e) => { setNavbarOpen(true) }}>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                        <path x-show="!open" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"></path>
                    </svg>
                </button>

            </div>
            <div className={["sidebar xl:block", navbarOpen ? "block w-full h-auto bg-gray-800 absolute z-40" : "hidden inset-0"].join(" ")}>
                <div className="w-full py-4">
                    <button className="px-4 py-4 md:hidden focus:outline-none float-right" onClick={(e) => { setNavbarOpen(false) }}>
                        <svg fill="#FFFFFF" viewBox="0 0 20 20" className="w-6 h-6">
                            <path x-show="open" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                        </svg>
                    </button>
                </div>
                <div className="py-10 w-full">
                    <PitoLogoSmall className="mx-auto" />
                    <div className="profile pt-6 text-center">
                        <img src={ProfilePicture} className="mx-auto" alt="" />
                        <h5 className="text-white mt-4 text-sm">Hello, <br /><span className="font-medium text-red-600 text-base">Trumps</span></h5>
                    </div>
                    <section className="mt-2">
                        <ListMenu linkTo="/">
                            <DashboardIcon className={classNameSVG} />
                        </ListMenu>
                        <ListMenu linkTo="/livestream-list">
                            <LivestreamIcon className={classNameSVG} />
                        </ListMenu>
                        <ListMenu linkTo="/merchant-list">
                            <MerchantListIcon className={classNameSVG} />
                        </ListMenu>
                        <ListMenu linkTo="/user-list">
                            <UserlistIcon className={classNameSVG} />
                        </ListMenu>
                        <ListMenu linkTo="/analytic">
                            <AnalyticIcon className={classNameSVG} />
                        </ListMenu>
                        <ListMenu linkTo="/tickets">
                            <TicketIcon className={classNameSVG} />
                        </ListMenu>
                        <ListMenu linkTo="/categories">
                            <CategoriesIcon className={classNameSVG} />
                        </ListMenu>
                        <ListMenu linkTo="/">
                            <LogoutIcon className={classNameSVG} />
                        </ListMenu>
                    </section>
                </div>
            </div>
        </>
    )
}

export default SideNavbar;
