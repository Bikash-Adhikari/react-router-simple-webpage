import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data = useLoaderData()

    //how to bring github followers: API Call through the useEffect HOOK

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Bikash-Adhikari')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])


    return (
        <div className='text-center m-4 bg-gray-800 text-white p-4 text-3xl'>Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>


    )
}

export default Github


//API Call through the router 
// This method is for loader, best practice is to be written in diffenrent file
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Bikash-Adhikari')

    return response.json()
    //Then comment out the above fetch 
}





