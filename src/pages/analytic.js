import React, { useEffect } from 'react'
import Sidebar from 'components/SideNavbar'

const Analytic = () => {
    useEffect(() => {
        document.getElementById("embeded-dashboard").src = "https://embed.app.octoboard.com/embed?token=https://embed.app.octoboard.com/embed?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImF2djlXODd5d2l4bmhlY2luLWNrZ2h3ZjBhbjBzbW8wN3JuYnY3MWd4YmdAb2N0b2JvYXJkLmNvbSIsInBhc3N3b3JkIjoiOTQ4YTRiNzQyMGQ1NjNhYmVmZDk5MzMwODQ1NjY3M2MzZWNmMjE0MGRlYTMwMTQ5YTE5MGRhYTM2NGI2ZjVmMSIsImlhdCI6MTYwMzE5NzE5OH0.frqPI7zSGWk6DSdJSJhu_OzpResHvtlu84Hk-Az_DQ8"
    })
    return (
        <>
            <section className="flex flex-col md:flex-row ">
                <Sidebar />
                <div className="pt-20 px-5 w-full flex">
                    <iframe title="Dashboard Analytic" id="embeded-dashboard" allowtransparency="true" scrolling="no" frameBorder="0" style={{ border: "none", overflow: "hidden", minHeight: "600px", width: "100%" }}></iframe>
                </div>
            </section>
        </>
    )
}


export default Analytic;