import React from "react";
// import firebase from "firebade/app";
import Loader from "./Loader";
import { useFormik } from "formik";
import { useState } from "react";
import { db, storage } from "../firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { submitFormSchema } from "../schemas/submitForm.schema";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

const initialValues = {
    image: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    cnic: "",
    address: "",
    last_degree: "",
    field_of_study: "",
    expected_salary: "",
};
const Form = () => {
    let navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [loader, setLoader] = useState(false);

    const {
        handleBlur,
        handleChange,
        values,
        errors,
        touched,
        handleSubmit,
        setFieldValue,
    } = useFormik({
        initialValues,
        validationSchema: submitFormSchema,
        onSubmit: async (values, actions) => {
            if (values.file) {
                try {
                    // const storage = await firebase
                    //     .app()
                    //     .storage(import.meta.STORAGE_URL);
                    setLoader(true);
                    const storageRef = ref(
                        storage,
                        `images/${values.file.name}`
                    );
                    await uploadBytes(storageRef, values.file);
                    const downloadURL = await getDownloadURL(storageRef);

                    let docRef = await addDoc(collection(db, "users"), {
                        image: downloadURL,
                        first_name: values.first_name,
                        last_name: values.last_name,
                        phone: values.phone,
                        email: values.email,
                        cnic: values.cnic,
                        address: values.address,
                        last_degree: values.last_degree,
                        field_of_study: values.field_of_study,
                        expected_salary: values.expected_salary,
                    });
                    console.log("docRef", docRef);
                    actions.resetForm();
                    setImage(null);
                    actions.setSubmitting(false);
                    setLoader(false);
                    navigate(`/`);
                    alert(
                        "Form submitted successfully! We will contact you for Inerview"
                    );
                } catch (error) {
                    console.error(error);
                }
            }
        },
    });
    // console.log(errors);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                setFieldValue("file", file);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-full my-10">
            {loader && <Loader />}
            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900"
                        htmlFor="image"
                    >
                        Upload Your Image
                    </label>
                    <input
                        type="file"
                        // value={values.image}
                        id="image"
                        className="w-full text-gray-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {touched.image && errors.image && (
                        <p className="text-red-800 font-normal text-sm mt-2">
                            {errors.image}
                        </p>
                    )}
                    {image && (
                        <img
                            src={image}
                            alt="Uploaded"
                            className="rounded-lg"
                            style={{ width: "100px", marginTop: "20px" }}
                        />
                    )}
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    {/* First Name */}
                    <InputField
                        type="text"
                        name="first_name"
                        label="First name"
                        value={values.first_name}
                        errorMessage={errors.first_name}
                        isError={touched.first_name && errors.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />

                    {/* Last Name */}
                    <InputField
                        type="text"
                        name="last_name"
                        label="Last name"
                        value={values.last_name}
                        errorMessage={errors.last_name}
                        isError={touched.last_name && errors.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    {/* Phone Number */}
                    <InputField
                        type="string"
                        name="phone"
                        label="Phone Number"
                        value={values.phone}
                        errorMessage={errors.phone}
                        isError={touched.phone && errors.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />

                    {/* Email Address */}

                    <InputField
                        type="email"
                        name="email"
                        label="Email Address"
                        value={values.email}
                        errorMessage={errors.email}
                        isError={touched.email && errors.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                </div>

                {/* Cnic */}
                <InputField
                    type="text"
                    name="cnic"
                    label="CNIC/B-Form"
                    value={values.cnic}
                    errorMessage={errors.cnic}
                    isError={touched.cnic && errors.cnic}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />

                {/* Address */}
                <InputField
                    type="text"
                    name="address"
                    label="Address"
                    value={values.address}
                    errorMessage={errors.address}
                    isError={touched.address && errors.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />

                {/* Last Degree */}
                <div className="relative z-0 w-full mb-5 group">
                    <select
                        id="last_degree"
                        name="last_degree"
                        className="block py-2.5 px-0 w-full text-sm font-normal text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.country}
                    >
                        <option defaultValue={true}>Last Degree</option>
                        <option value="Matric">Matric / O levels</option>
                        <option value="Inter">Intermediate / A levels</option>
                        <option value="Ba">Bachelor</option>
                        <option value="Ma">Master</option>
                    </select>
                </div>

                {/* Field of study */}
                <InputField
                    type="text"
                    name="field_of_study"
                    label="Field of Study"
                    value={values.field_of_study}
                    errorMessage={errors.field_of_study}
                    isError={touched.field_of_study && errors.field_of_study}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <InputField
                    type="number"
                    name="expected_salary"
                    label="Expected Salary"
                    value={values.expected_salary}
                    errorMessage={errors.expected_salary}
                    isError={touched.expected_salary && errors.expected_salary}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
