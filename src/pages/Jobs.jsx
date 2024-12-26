import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div>
            <h1>Jobs: {jobs.length}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {
                    jobs.slice(0, 9).map(job => <div key={job._id}
                        className="flex flex-col justify-between border-2 rounded-lg border-gray-300 bg-gray-100 p-5 hover:bg-white hover:border-gray-500 "
                    >
                        <div className="flex gap-2 items-center">
                            <img
                                className="w-16"
                                src={job?.company_logo}
                                alt={job?.title} />
                            <div>
                                <h2 className="text-xl font-semibold">{job?.category}</h2>
                                <h3>{job?.location}</h3>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">{job?.title}</h1>
                            <div className="flex gap-3 text-gray-500">
                                <h3>{job?.jobType}</h3>
                                <h3>Deadline : {job?.applicationDeadline}</h3>
                            </div>
                            <p>{job?.description}</p>
                            <div className="flex gap-2 flex-wrap">
                                {
                                    job?.requirements.map((requirement, idx) => <button key={idx} className="btn text-xs">
                                        {requirement}
                                    </button>)
                                }
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <h2>{job?.salaryRange.currency.toUpperCase()}: {job?.salaryRange.min}-{job?.salaryRange.max}/month </h2>
                            <Link to={`/jobs/apply/${job._id}`} className="btn btn-accent">Apply Now</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Jobs;