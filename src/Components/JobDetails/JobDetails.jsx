import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleAppliedJob = () => {
        saveJobApplication(idInt);
        toast("Applied Successfully");
    }

    return (
        <div>
            <h2>Job Details : {id}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2>deatils </h2>


                </div>
                <div className="border">
                    <h2>side things</h2>
                    <button onClick={handleAppliedJob} className="text-[#FFF] bg-[#9873FF] btn-btn-primary w-full py-4">Apply Now</button>

                </div>

            </div>
            <ToastContainer />

        </div>
    );
};

export default JobDetails;