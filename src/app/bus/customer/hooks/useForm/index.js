import {useState} from "react";

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues);

    const handleChange = (event) => {
        //event.persist() -  доступен между ререндерами наш ивент в неизменяемом виде
        //чтобы handleChange повесить на несколько элементов внутри одного компонента
        event.persist();
        setForm((prevValues) => ({
            ...prevValues,
            [event.target.name]: event.target.value,
        }));
    };

    return {
        handleChange,
        form,
    }
}