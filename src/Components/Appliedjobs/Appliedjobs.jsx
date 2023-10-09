import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";


const Appliedjobs = () => {
    const jobs = useLoaderData();

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const JobsApplied = jobs.filter
        }
    }, [])
    return (
        <div>
            <h2>jobs I applied </h2>

        </div>
    );
};

export default Appliedjobs;