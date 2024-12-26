import axios from "axios";
import Swal from "sweetalert2";
import UseAuth from "../hooks/UseAuth";

const AddJobs = () => {

    const { user } = UseAuth();
    const { email } = user;

    const handleAddJob = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())
        const jobData = { email, ...data }

        axios.post('http://localhost:5000/jobs', jobData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log(err.message);

            })
    }

    return (


        <div className="bg-base-100 w-full shrink-0 shadow-2xl">
            <form onSubmit={handleAddJob} className="card-body">
                {/* Job Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" placeholder="title" name='title' className="input input-bordered" required />
                </div>
                {/* Job Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" placeholder="location" name='location' className="input input-bordered" required />

                </div>
                {/* Job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <input type="text" placeholder="Job Type" name='job_type' className="input input-bordered" required />

                </div>
                {/* Category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input type="text" placeholder="Category" name='job_category' className="input input-bordered" required />

                </div>
                {/* Application Deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input type="date" placeholder="Application Deadline" name='application_deadline' className="input input-bordered" required />

                </div>




                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Job</button>
                </div>
            </form>
        </div>

    );
};

export default AddJobs;