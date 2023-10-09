import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id === id);
    console.log(job);
    return (
        <div>
            <h2>Job Details : {id}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2>deatils </h2>


                </div>
                <div className="border">
                    <h2>side things</h2>
                    <button className="text-[#FFF] bg-[#9873FF] btn-btn-primary w-full py-4">Apply Now</button>

                </div>

            </div>

        </div>
    );
};

export default JobDetails;