import * as yup from "yup";

const phoneRegExp =
    /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

export const submitFormSchema = yup.object({
    image: yup.mixed(),
    first_name: yup
        .string()
        .min(3, "First name must be atlest 3 characters")
        .max(15, "First name must be atmost 15 characters")
        .required("First name is required"),
    last_name: yup
        .string()
        .min(3, "Last name must be atlest 3 characters")
        .max(15, "Last name must be atmost 15 characters")
        .required("Last Name is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    phone: yup
        .string()
        .max(11, "Invalid Phone Number")
        .min(11, "Invalid Phone Number")
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Phone number is required"),
    cnic: yup
        .string()
        .matches(
            /^[0-9]{5}-\d{7}-\d{1}$/,
            "CNIC must be in the format XXXXX-XXXXXXX-X"
        )
        .required("CNIC is required"),
    address: yup
        .string()
        .min(10, "Addres must be at least 10 characters")
        .max(40, "Address must be atmost 40 characters")
        .required("Address is required"),
    last_degree: yup.string().required("Degree is required"),
    field_of_study: yup.string().min(3).max(25).optional(),
    expected_salary: yup.number().required("Salary is required"),
});
