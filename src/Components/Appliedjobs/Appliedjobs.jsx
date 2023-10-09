import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";


const Appliedjobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);


    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }

            setAppliedJobs(jobsApplied);
            //console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [])
    return (
        <div>
            <h2 className="text-2xl">jobs I applied. {appliedJobs.length} </h2>
            <div className="dropdown">
                <label tabIndex={0} className="btn m-1">Click</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>All</a></li>
                    <li><a>Remote</a></li>
                    <li><a>Onsite</a></li>
                </ul>
            </div>
            <ul>
                {
                    appliedJobs.map(job => <li key={job.id}>{job.job_title} {job.company_name} {job.remote_or_onsite}</li>)
                }
            </ul>

        </div>
    );
};

export default Appliedjobs;