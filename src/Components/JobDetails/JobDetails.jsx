import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";
import background1 from '../../assets/images/bg1.png';
import background2 from '../../assets/images/bg2.png';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { PiSubtitlesLight } from "react-icons/pi";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";


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
            <div className=" flex justify-between ">
                <img src={background1} alt="" />
                <h2 className="text-[#1A1919] font-bold text-2xl text-center mt-20">Job Details : {id}</h2>
                <img src={background2} alt="" />
            </div>

            <div className="grid gap-4 md:grid-cols-4 mt-16">
                <div className=" md:col-span-3">
                    <p className="text-[#757575] mt-8 text-xs"><span className="text-[#1A1919] font-bold">Job Description: </span> {job.job_description}</p>
                    <p className="text-[#757575] mt-6 text-xs"><span className="text-[#1A1919] font-bold">Job Responsibility: </span> {job.job_responsibility}</p>
                    <p className="text-[#757575] mt-6 text-xs"><span className="text-[#1A1919] font-bold">Educational Requirements: </span> {job.educational_requirements}</p>
                    <p className="text-[#757575] mt-6 mb-8 text-xs"><span className="text-[#1A1919] font-bold">Experiences: </span> {job.experiences}</p>



                </div>
                <div className=" bg-purple-50">
                    <div className="pl-2">
                        <h2 className="font-bold text-black mt-7 ml-7 mb-4">Job Details</h2>


                        <h2 className="flex mb-4"><AiOutlineDollarCircle className="text-2xl mr-2" ></AiOutlineDollarCircle><span className="text-bold text-black">Salary:</span>{job.salary}(Per Month)</h2>

                        <h2 className="flex mb-4"><PiSubtitlesLight className="text-2xl mr-2" ></PiSubtitlesLight><span className="text-bold text-black">Job Title:</span>{job.job_title}</h2>

                        <h2 className="font-bold text-black mb-4 ">Contact Information</h2>


                        <h2 className="flex mb-4"><AiOutlinePhone className="text-2xl mr-2" ></AiOutlinePhone><span className="text-bold text-black">Phone:</span>{job.contact_information.phone}</h2>

                        <h2 className="flex mb-4"><HiOutlineMailOpen className="text-2xl mr-2" ></HiOutlineMailOpen><span className="text-bold text-black">Email:</span>{job.contact_information.email}</h2>

                        <h2 className="flex mb-4"><GrLocation className="text-2xl mr-2" ></GrLocation><span className="text-bold text-black">Address:</span>{job.contact_information.address}</h2>





                    </div>




                    <button onClick={handleAppliedJob} className="text-[#FFF] bg-[#9873FF] btn-btn-primary w-full py-4 mt-2">Apply Now</button>

                </div>

            </div>
            <ToastContainer />

        </div>
    );
};

export default JobDetails;