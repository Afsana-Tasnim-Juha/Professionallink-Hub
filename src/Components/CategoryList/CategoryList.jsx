
import { FaMoneyCheck } from "react-icons/fa";
import { PiDiamondsFourDuotone } from "react-icons/pi";
import { MdSocialDistance } from "react-icons/md";
import { MdEngineering } from "react-icons/md";

const CategoryList = () => {
    return (
        <div>
            <h2 className="text-3xl text-center font-bold text-[#1A1919] mt-20">Job Opportunities</h2>
            <p className="text-center text-l mt-8">Discover countless job possibilities with comprehensive details. It's your path to the future.</p>
            <div className="flex flex-wrap  place-content-around my-8">
                <div className="card  bg-purple-50 w-full md:w-1/2 lg:w-1/5  ">

                    <div className="card-body">
                        <p className="w-[80px]"><FaMoneyCheck></FaMoneyCheck></p>
                        <h2 className="card-title">Account & Finance</h2>
                        <p className="text-[#A3A3A3] text-xs">300 Jobs Available</p>

                    </div>
                </div>

                <div className="card bg-purple-50 w-full md:w-1/2 lg:w-1/5 ">

                    <div className="card-body">
                        <p className="w-[80px]"><PiDiamondsFourDuotone></PiDiamondsFourDuotone></p>
                        <h2 className="card-title">Creative Design</h2>
                        <p>100+ Jobs Available</p>

                    </div>
                </div>

                <div className="card bg-purple-50 w-full md:w-1/2 lg:w-1/5  ">

                    <div className="card-body">
                        <p className="w-[80px]"><MdSocialDistance></MdSocialDistance></p>
                        <h2 className="card-title">Marketing & Sales</h2>
                        <p>150 Jobs Available</p>

                    </div>
                </div>
                <div className="card bg-purple-50 w-full md:w-1/2 lg:w-1/5  ">

                    <div className="card-body">
                        <p className="w-[80px]"><MdEngineering></MdEngineering></p>
                        <h2 className="card-title">Engineering Job</h2>
                        <p>224 Jobs Available</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryList;