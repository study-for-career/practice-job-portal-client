import { useLoaderData } from "react-router-dom";
import UseAuth from './../hooks/UseAuth';

const ApplyJob = () => {
    const { user, loader } = UseAuth()
    const job = useLoaderData()

    if (loader) {
        return
    }
    const { email } = user;


    const handlApplyJob = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        const submittedJob = { email, job, ...data }
        console.log(submittedJob);

    }
    return (
        <div className="bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="bg-base-100 w-full shadow-2xl">
                    <form onSubmit={handlApplyJob} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile</span>
                            </label>
                            <input type="number" placeholder="mobile" name='mobile' className="input input-bordered" required />
                        </div>



                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Apply Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyJob;