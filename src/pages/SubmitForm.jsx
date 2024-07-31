import React from "react";
import Form from "../components/Form";

const SubmitForm = () => {
    return (
        <div className="w-full py-6 px-5">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-center text-neutral-800">
                    Application Form
                </h1>

                <div className="flex text-xl mt-7 gap-2">
                    <h3 className="font-semibold">Job Title : </h3>
                    <p> Social Media Manager</p>
                </div>

                <div className="text-lg mt-1">
                    <h3 className="font-semibold inline-block mr-2">
                        Description :
                    </h3>
                    <p className="inline">
                        We're seeking a passionate and detail-oriented team
                        member to work remotely and contribute to the expansion
                        of our exciting digital project. This is a fantastic
                        opportunity to gain valuable experience in a fast-paced
                        environment, with no formal education required!
                    </p>
                </div>

                <div className="text-lg mt-1">
                    <h3 className="font-semibold inline-block mr-2">
                        Location :
                    </h3>
                    <p className="inline">Pakistan (Remote)</p>
                </div>

                <div className="flex text-lg mt-1 gap-2">
                    <h3 className="font-semibold">Salary : </h3>
                    <p>40,000 - 80,000</p>
                </div>

                <div className="text-lg mt-1">
                    <h3 className="font-semibold">Requirements : </h3>
                    <ul className="list-disc ml-6">
                        <li>Aged 16 to 30 with a hunger to learn and grow.</li>
                        <li>
                            A quick learner with a positive and can-do attitude
                        </li>
                        <li>
                            Comfortable working independently and
                            collaboratively
                        </li>
                        <li>Strong communication and interpersonal skills </li>
                    </ul>
                </div>

                <Form />
            </div>
        </div>
    );
};

export default SubmitForm;
