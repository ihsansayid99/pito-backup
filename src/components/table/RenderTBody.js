import React from 'react'

const RenderTBody = ({ itemBody }) => {
    return (
        <>
            {
                itemBody && itemBody.map((item, index) => {
                    return (
                        <tr key={index} className="border-b border-gray-50">
                            <td class="text-center py-3 px-4 text-red-600 font-bold text-sm">{item.id}</td>
                            <td class="text-center py-3 px-4 text-red-600 font-bold text-sm">{item.merchantName}</td>
                            <td class="text-center py-3 px-4 text-gray-400 font-light"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">{item.email}</a></td>
                            <td class="text-center py-3 px-4 text-gray-400 font-light">{item.totalLivestream}</td>
                            <td class="text-center py-3 px-4 text-gray-400 font-light">{item.totalUpcomingLivestream}</td>
                            <td class="text-center py-3 px-4 text-gray-400 font-light">{item.totalFavourites}</td>
                            <td class="text-center py-3 px-4 text-gray-400 font-light">{item.totalShare}</td>
                            <td class="text-center py-3 px-4 text-gray-400 font-light">{item.totalViews}</td>
                            <td class="text-center py-3 px-4 text-gray-400 font-light">{item.lastSession}</td>
                            <td class="text-center py-3 px-4 text-gray-400 font-light">{item.joinedDate}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default RenderTBody;