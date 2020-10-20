import React from 'react'

import RenderTHead from './RenderTHead'
import RenderTBody from './RenderTBody'
import RenderTBodyUserListing from './RenderTBodyUserListing'
import RenderTBodyTickets from './RenderTBodyTickets'
import RenderTBodyCategory from './RenderTBodyCategory'

const index = ({ itemHead, itemBody, itemBodyUser, itemBodyTickets, itemBodyCategory }) => {
    return (
        <>
            <table class="min-w-full bg-white">
                <thead class="bg-pink-500 text-gray-700 font-semibold text-lg">
                    <tr>
                        <RenderTHead itemHead={itemHead} />
                    </tr>
                </thead>
                <tbody class="text-gray-700">
                    {
                        itemBody && <RenderTBody itemBody={itemBody} />
                    }

                    {
                        itemBodyUser && <RenderTBodyUserListing itemBodyUser={itemBodyUser} />
                    }
                    {
                        itemBodyTickets && <RenderTBodyTickets itemBodyTickets={itemBodyTickets} />
                    }
                    {
                        itemBodyCategory && <RenderTBodyCategory itemBodyCategory={itemBodyCategory} />
                    }
                </tbody>
            </table>
        </>
    )
}

export default index;
