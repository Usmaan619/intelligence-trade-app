import React from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
import { GradientHOC } from "../HOC/Gradient.hoc";
import { Formik } from "formik";
import { signUpValidationSchema } from "../auth/authService";
const WelcomePage = ({ navigation }) => {
  let formikFn;

  const unMount = () => {
    formikFn.setValues({
      email: "",
      password: "",
    });
  };

  const onSubmit = (val) => {
    console.log("val: ", val);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={onSubmit}
        >
          {(formikProps) => {
            const {
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            } = formikProps;
            formikFn = formikProps;
            return (
              <View style={{ flex: 1 }}>
                <Text>o</Text>
              </View>
            );
          }}
        </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default GradientHOC(WelcomePage);
