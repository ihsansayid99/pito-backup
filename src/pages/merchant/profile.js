import React from 'react'
import SideNavbarMerchant from 'components/SideNavbarMerchant'
import userAvatarDummy from 'assets/images/user-avatar.jpg'
import { ReactComponent as FbIcon } from 'assets/images/fb-icon.svg'
import { ReactComponent as IgIcon } from 'assets/images/ig-icon.svg'
import { ReactComponent as TtIcon } from 'assets/images/tiktok-icon.svg'

import Dropdown from 'components/forms/dropdown'
import LineCustom from 'components/graphic-chart/LineCustom'
import HistoryLivestreams from 'components/view-video/user-livestream'
import { Link } from 'react-router-dom'

const Profile = () => {
    const tableBodyUser = [
        {
            id: '10111',
            username: 'Tommy A.S',
            device: 'Android/Ios',
            email: 'example@gmail.com',
            lastSession: "01/09/2020 (00:18)",
            joinedDate: "01/09/2020 (00:18)"
        }
    ]
    const MostRecent2 = [
        {
            id: 1,
            value: 'Date'
        },
        {
            id: 2,
            value: 'Views'
        }, {
            id: 3,
            value: 'Favourites'
        },
        {
            id: 4,
            value: 'Shares'
        }
    ]
    return (
        <>
            <section className="flex flex-col md:flex-row">
                <SideNavbarMerchant />
                <div className="py-10 md:py-20 flex flex-col md:flex-row w-full">
                    <div className="w-full md:w-3/5 xxl:w-1/2 px-4">
                        <div className="flex items-center">
                            <img src={userAvatarDummy} draggable={false} className="rounded-full w-1/3 border-8 mr-4 border-red-600 mx-auto" alt="" />
                            {
                                tableBodyUser.map(x => {
                                    return (
                                        <div key={x.id} className="md:px-8 w-auto">
                                            <h4 className="text-red-600 text-2xl font-bold">{x.username}</h4>
                                            <p className="text-sm mt-1 font-light text-justify">
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <div className="flex flex-wrap text-sm font-medium text-gray-700 items-center mt-2">
                                                <h6>Category 1</h6><div className="rounded-full w-1 h-1 bg-gray-700 mx-2"></div>
                                                <h6>Category 2</h6><div className="rounded-full w-1 h-1 bg-gray-700 mx-2"></div>
                                                <h6>Category 3</h6>
                                            </div>
                                            <div className="flex flex-wrap mt-4 md:mt-2">
                                                <div className="flex flex-col mr-8 text-center">
                                                    <h4 className="font-bold text-2xl text-red-600">53.240</h4>
                                                    <p className="font-light text-sm text-gray-300">Views</p>
                                                </div>
                                                <div className="flex flex-col mr-8 text-center">
                                                    <h4 className="font-bold text-2xl text-red-600">2.300</h4>
                                                    <p className="font-light text-sm text-gray-300">Subscriber</p>
                                                </div>
                                                <div className="flex flex-col text-center">
                                                    <h4 className="font-bold text-2xl text-red-600">489</h4>
                                                    <p className="font-light text-sm text-gray-300">Shared</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="w-1/5 hidden md:flex flex-col">
                                <FbIcon className="mb-4" />
                                <IgIcon className="mb-4" />
                                <TtIcon className="mb-4" />
                            </div>
                        </div>
                        <div className="flex justify-end pt-8">
                            <Link to="/merchant/profile/edit"><button className="rounded-3xl text-sm md:text-base font-medium mr-2 md:mr-6 text-white bg-red-600 px-6 py-2 md:px-10 md:py-2">Edit Account</button></Link>
                        </div>
                        <div className="pt-8">
                            <LineCustom />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col">
                        <div className="pt-8 flex flex-col px-4">
                            <div className="flex justify-between items-center">
                                <p className="text-red-600 font-bold text-base">Livestreams History</p>
                                <Dropdown title="Date" items={MostRecent2} />
                            </div>
                            <div className="pt-6">
                                <HistoryLivestreams />
                                <HistoryLivestreams />
                                <HistoryLivestreams />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile;
