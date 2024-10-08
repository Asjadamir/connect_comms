import React from "react";

const About = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7605317111456!2d74.33999707435447!3d31.475772949346336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042715f767ad%3A0xb0251034ce47145e!2sARFA%20Tower%2C%20Lahore%20%E2%80%93%20Kasur%20Rd%2C%20Nishtar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1722162583092!5m2!1sen!2s"
                    style={{
                        filter: "grayscale(1) contrast(1.2) opacity(0.4)",
                        width: "100%",
                        height: "100%",
                    }}
                    allowFullScreen
                ></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                        Feedback
                    </h2>
                    <p className="leading-relaxed mb-5 text-gray-600">
                        Kindly give any kind of your feedback or query here.
                    </p>
                    <div className="relative mb-4">
                        <label
                            htmlFor="email"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Button
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
