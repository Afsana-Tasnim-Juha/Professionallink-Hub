import profile from '../../assets/profile.jpg'


const Banner = () => {
    return (
        <div className='flex  my-7'>
            <div className='text-center '>
                <h1 className="text-[#1A1919] font-bold text-5xl w-[570px]">One Step <br /> Closer To Your <br /> <span className="text-[#9873FF]">Dream Job</span> </h1>
                <p className="text-[#757575] font-normal my-6">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish</p>
                <button className="btn bg-[#9873FF] text-[#FFF]">Get Started</button>

            </div>
            <div className='w-[816px] '>
                <img src={profile} alt="" />


            </div>
        </div>
    );
};

export default Banner;