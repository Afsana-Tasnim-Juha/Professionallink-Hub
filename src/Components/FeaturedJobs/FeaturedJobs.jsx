import { useState, useEffect } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div>
            <div>
                <div>
                    <h2 className="text-3xl text-center font-bold">Highlighted Career Opportunities: {jobs.length}</h2>
                    <p className="text-center text-l mt-4">Explore thousands of job opportunities with all the information you need. It's your future.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {
                        jobs.map(job => <Job key={job.id} job={job}></Job>)
                    }

                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;
