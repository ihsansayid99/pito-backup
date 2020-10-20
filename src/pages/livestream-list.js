import React from 'react'
import Sidebar from 'components/SideNavbar'
import Searchbar from 'components/forms/search'
import Dropdown from 'components/forms/dropdown'
import FullWidth from 'components/view-video/FullWidth'

const itemsDate = [
    {
        id: 1,
        value: 'Views'
    },
    {
        id: 2,
        value: 'Favourites'
    }, {
        id: 3,
        value: 'Shares'
    }
]
const items = [
    {
        id: 1,
        value: 'Ongoing'
    },
    {
        id: 2,
        value: 'Upcoming'
    }, {
        id: 3,
        value: 'Previous'
    }
]



const LivestreamList = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row ">
                <Sidebar />
                <div className="pt-20 px-5 w-full">
                    <div className="flex justify-between items-center">
                        <Searchbar />
                        <div className="flex items-center">
                            <h2 className="font-semibold text-lg text-gray-700">Filter</h2>
                            <div className="flex ml-5">
                                <Dropdown title="Select..." items={items} />
                            </div>
                            <div className="flex ml-5">
                                <Dropdown title="Date..." items={itemsDate} />
                            </div>
                        </div>
                    </div>
                    <FullWidth />
                </div>
            </section>
        </>
    )
}

export default LivestreamList;