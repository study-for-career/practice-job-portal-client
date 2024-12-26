import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';

const MyJobs = () => {
    const { user, loader } = UseAuth()
    if (loader) {
        return
    }
    const [myJobs, setMyJobs] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/job?email=${user.email}`, {
            withCredentials: true
        })
            .then(res => setMyJobs(res.data))
    }, [])

    return (
        <div>
            <h1>My Total Jobs : {myJobs.length}</h1>
        </div>
    );
};

export default MyJobs;