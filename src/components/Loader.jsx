import React from "react";
import { BeatLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="w-screen fixed flex items-center justify-center top-0 left-0 h-screen bg-neutral-50 z-50">
            <BeatLoader />
        </div>
    );
};

export default Loader;
