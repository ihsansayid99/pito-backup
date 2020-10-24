import React from 'react'
import SideNavbarMerchant from 'components/SideNavbarMerchant'
import Notification from 'components/notification'

const Notif = () => {
    return (
        <>
            <section className="flex flex-col xl:flex-row">
                <SideNavbarMerchant />
                <div className="py-10 xl:py-20 shadow-2xl w-full xl:w-4/5 mx-auto">
                    <div className="flex justify-end xl:px-20">
                        <h6 className="text-red-600 mx-4 font-bold xl:text-lg border-b-2 border-red-600">Dismiss All</h6>
                        <h6 className="text-red-600 mx-4 font-bold xl:ext-lg border-b-2 border-red-600">Marsk All as Read</h6>
                    </div>
                    <div className="mt-4">
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Notif;