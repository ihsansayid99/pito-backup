import React from 'react'
import SideNavbarMerchant from 'components/SideNavbarMerchant'

import userAvatarDummy from 'assets/images/user-avatar.jpg'
import { ReactComponent as FbIcon } from 'assets/images/fb-icon-blue.svg'
import { ReactComponent as EmailIcon } from 'assets/images/email-icon.svg'
import { ReactComponent as GoogleIcon } from 'assets/images/google-icon-colorful.svg'
import { Link } from 'react-router-dom'

const profileEdit = () => {
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
    return (
        <>
            <section className="flex flex-col md:flex-row">
                <SideNavbarMerchant />
                <div className="py-10 md:py-20 flex flex-col md:flex-row w-full">
                    <div className="w-full md:w-1/2 xxl:w-1/2 px-4">
                        <div className="flex">
                            <img src={userAvatarDummy} draggable={false} className="rounded-full w-1/3 border-8 mr-4 border-red-600" alt="" />
                            {
                                tableBodyUser.map(x => {
                                    return (
                                        <div key={x.id} className="md:px-8 w-auto">
                                            <h4 className="text-red-600 text-2xl font-bold">{x.username}</h4>
                                            <p className="text-sm mt-1 font-light text-justify">
                                                {x.email}
                                            </p>
                                            <div className="flex flex-wrap w-full pt-2">
                                                <button className="px-4 py-2 w-auto bg-red-600 shadow-md my-2 text-white text-sm font-medium rounded-2xl">Upload New Avatar</button>
                                                <button className="px-4 py-2 w-auto border shadow-md border-red-600 text-red-600 text-sm font-medium rounded-2xl">Upload New Avatar</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="user-detail flex justify-center pt-2">
                            <button className="flex items-center text-sm md:text-base shadow-md mr-4 px-6 mt-4 py-2 border border-gray-50 rounded-lg bg white text-gray-700">
                                <FbIcon className="mr-3" /> Connect
                                                </button>
                            <button className="flex items-center text-sm md:text-base shadow-md px-6 mt-4 mr-4 py-2 border border-gray-50 rounded-lg bg white text-gray-700">
                                <GoogleIcon className="mr-3" /> Connect
                                                </button>
                            <button className="flex items-center text-sm md:text-base shadow-md mr-4 px-6 mt-4 py-2 border border-gray-50 rounded-lg bg white text-gray-700">
                                <EmailIcon className="mr-3" /> Email
                                                </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col">
                        <div className="flex flex-col pt-8 md:pt-0 px-4">
                            <h6 className="text-red-600 font-semibold text-lg">Edit Profile</h6>
                            <div className="flex flex-wrap w-full items-start my-2">
                                <label htmlFor="name" className="w-full md:w-1/4 text-base text-gray-700">Display Name</label>
                                <input type="text" placeholder="Your Display Name" className="w-full md:w-4/6 px-4 py-2 my-2 md:my-0 md:ml-4 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="flex flex-wrap w-full items-start my-2">
                                <label htmlFor="about" className="w-full md:w-1/4 text-base text-gray-700">About</label>
                                <textarea placeholder="Describe Your Self" className="w-full md:w-4/6 px-4 py-2 h-32 my-2 md:my-0 md:ml-4 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="flex flex-wrap w-full items-center my-4">
                                <label htmlFor="category" className="w-full md:w-1/4 text-base text-gray-700">Category</label>
                                <div className="flex flex-wrap w-full md:w-4/6 md:pl-4">
                                    <div className="form-categories border border-gray-300 rounded-lg px-2 py-2 mr-4 my-2" role="button">
                                        <input type="checkbox" name="category" className="px-4 py-2 border border-gray-300 rounded-lg mr-2" value="Category 1" /><span>Category 1</span>
                                    </div>
                                    <div className="form-categories border border-gray-300 rounded-lg px-2 py-2 mr-4 my-2" role="button">
                                        <input type="checkbox" name="category" className="px-4 py-2 border border-gray-300 rounded-lg mr-2" value="Category 2" /><span>Category 2</span>
                                    </div>
                                    <div className="form-categories border border-gray-300 rounded-lg px-2 py-2 mr-4 my-2" role="button">
                                        <input type="checkbox" name="category" className="px-4 py-2 border border-gray-300 rounded-lg mr-2" value="Category 3" /><span>Category 3</span>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-wrap w-full items-start my-2">
                                <label htmlFor="name" className="w-full md:w-1/4 text-base text-gray-700">Facebook Page Link</label>
                                <input type="text" placeholder="https://facebook.com" className="w-full md:w-4/6 px-4 py-2 my-2 md:my-0 md:ml-4 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="flex flex-wrap w-full items-start my-2">
                                <label htmlFor="name" className="w-full md:w-1/4 text-base text-gray-700">Instagram Page Link</label>
                                <input type="text" placeholder="https://instagram.com" className="w-full md:w-4/6 px-4 py-2 my-2 md:my-0 md:ml-4 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="flex flex-wrap w-full items-start my-2">
                                <label htmlFor="name" className="w-full md:w-1/4 text-base text-gray-700">Tiktok Page Link</label>
                                <input type="text" placeholder="https://tiktok.com" className="w-full md:w-4/6 px-4 py-2 my-2 md:my-0 md:ml-4 border border-gray-300 rounded-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col pt-8 md:pt-0 px-4 mt-4 md:mt-8">
                            <h6 className="text-red-600 font-semibold text-lg">Edit Password</h6>
                            <div className="flex flex-wrap w-full items-start my-2">
                                <label htmlFor="currentPassword" className="w-full md:w-1/4 text-base text-gray-700">Current Password</label>
                                <input type="text" placeholder="Your Current Password" className="w-full md:w-4/6 px-4 py-2 my-2 md:my-0 md:ml-4 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="flex flex-wrap w-full items-start my-2">
                                <label htmlFor="name" className="w-full md:w-1/4 text-base text-gray-700">New Password</label>
                                <input type="text" placeholder="Your New Passoword" className="w-full md:w-4/6 px-4 py-2 my-2 md:my-0 md:ml-4 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="flex flex-wrap w-full items-start my-2">
                                <label htmlFor="name" className="w-full md:w-1/4 text-base text-gray-700">Retype Password</label>
                                <input type="text" placeholder="Retype Your new Passoword" className="w-full md:w-4/6 px-4 py-2 my-2 md:my-0 md:ml-4 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="flex justify-end md:px-8 mt-4">
                                <button className="w-1/3 px-4 py-2 rounded-3xl border border-red-600 text-red-600 mx-5 font-medium">Cancel</button>
                                <button className="w-1/3 px-4 py-2 rounded-3xl bg-red-600 text-white font-medium">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default profileEdit;
