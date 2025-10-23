import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
    Box,
    Button,
    Container,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import { Field, FieldArray, Form, Formik, type FormikHelpers } from "formik";
import { type FC, useMemo } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FORMS_LS_KEY } from "shared/configs/constants";
import { getMessageFromError } from "shared/lib/common";
import { formHandler } from "shared/lib/forms";
import { clearLS, loadFromLS } from "shared/lib/localStorage";

import { FORM_LS_KEY } from "../config";
import {
    type FormValues,
    createInitialsValues,
    validationSchema,
} from "../model";
import { AutoSave } from "./AutoSave";
import { LostDataModal } from "./LostDataModal";

export const AuthForm: FC = () => {
    const navigate = useNavigate();

    const initialValues = useMemo(() => {
        const valuesFromLS = loadFromLS<FormValues>({
            key: FORMS_LS_KEY,
            subTitle: FORM_LS_KEY,
        });
        return createInitialsValues(valuesFromLS);
    }, []);

    const submitHandler = async (
        formValues: FormValues,
        formikHelpers: FormikHelpers<FormValues>,
    ) => {
        try {
            await formHandler(formValues);
            toast.success("Форма успешно отправлена");
            formikHelpers.resetForm();
            clearLS({
                key: FORMS_LS_KEY,
                subTitle: FORM_LS_KEY,
            });
            setTimeout(() => navigate("/"), 10);
        } catch (error) {
            toast.error(getMessageFromError(error));
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
        >
            {({
                values,
                handleChange,
                handleBlur,
                isSubmitting,
                isValid,
                errors,
            }) => (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexFlow: "column",
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 4 }}>
                        Authentication
                    </Typography>
                    <Container maxWidth="sm">
                        <Form>
                            <TextField
                                required
                                value={values.username}
                                type="text"
                                name="username"
                                sx={{ width: "100%", mb: 2 }}
                                label="Имя"
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!errors.username}
                                helperText={errors.username}
                            />
                            <TextField
                                required
                                value={values.email}
                                type="text"
                                name="email"
                                sx={{ width: "100%", mb: 2 }}
                                label="Email"
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                            <TextField
                                required
                                value={values.password}
                                type="text"
                                name="password"
                                sx={{ width: "100%", mb: 2 }}
                                label="Пароль"
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                            <TextField
                                required
                                value={values.confirmation}
                                type="text"
                                name="confirmation"
                                sx={{ width: "100%", mb: 2 }}
                                label="Подтверждение пароля"
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!errors.confirmation}
                                helperText={errors.confirmation}
                            />
                            <FieldArray
                                name="links"
                                render={(arrayHelpers) => (
                                    <>
                                        {values.links &&
                                            values.links.length > 0 &&
                                            values.links.map((_, index) => (
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        mb: 2,
                                                        alignItems:
                                                            "flex-start",
                                                    }}
                                                    key={index}
                                                >
                                                    <Field
                                                        as={TextField}
                                                        variant="outlined"
                                                        name={`links.${index}`}
                                                        label={`Соцсеть ${index + 1}`}
                                                        sx={{ width: "100%" }}
                                                        error={
                                                            Array.isArray(
                                                                errors.links,
                                                            ) &&
                                                            errors.links[index]
                                                        }
                                                        helperText={
                                                            Array.isArray(
                                                                errors.links,
                                                            ) &&
                                                            errors.links[index]
                                                        }
                                                    />
                                                    <IconButton
                                                        onClick={() =>
                                                            arrayHelpers.remove(
                                                                index,
                                                            )
                                                        }
                                                        sx={{
                                                            ml: 2,
                                                            mt: "12px",
                                                        }}
                                                        color="error"
                                                        size="small"
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            ))}

                                        <Button
                                            onClick={() =>
                                                arrayHelpers.push("")
                                            }
                                            color="primary"
                                            sx={{ mb: 4 }}
                                            startIcon={<AddIcon />}
                                            disabled={
                                                Array.isArray(errors.links) &&
                                                !!errors.links.length
                                            }
                                        >
                                            Добавить ссылки на соцсети
                                        </Button>
                                    </>
                                )}
                            />
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    sx={{ mb: 2 }}
                                    disabled={!isValid}
                                    loading={isSubmitting}
                                    variant="contained"
                                    type="submit"
                                >
                                    Отправить
                                </Button>
                            </Box>
                            <AutoSave />
                            <LostDataModal />
                        </Form>
                    </Container>
                </Box>
            )}
        </Formik>
    );
};
