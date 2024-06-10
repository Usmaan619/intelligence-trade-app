import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";

import { BlurView } from "expo-blur";
import { Formik } from "formik";
import { ICONS } from "../constants/Contant";
import B from "../components/B.component";
import { authStyles } from "../styles/authStyle";
import { GradientHOC } from "../HOC/Gradient.hoc";
import { signUpValidationSchema } from "../utils/helper";
import CommonButton from "../components/CommonButton";

const SignUpPage = ({ navigation }) => {
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isShowPasswordConf, setIsShowPasswordConf] = useState(true);

  const togglePassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const togglePasswordConf = () => {
    setIsShowPasswordConf(!isShowPasswordConf);
  };

  const onSubmit = (val) => {
    console.log("val: ", val);

    navigation.navigate("DocumentVerif", { registerDetails: val });
  };

  return (
    <ScrollView>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          email: "",
          password: "",
          Confpassword: "",
          phoneNumber: "",
        }}
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
            <View style={styles.signUpcontainer}>
              <View className="flex-row justify-center items-center">
                <Image
                  source={ICONS?.intelligenceMainWhiteImg}
                  resizeMode="cover"
                  className="h-[90px] w-[170px] overflow-hidden"
                />
              </View>
              <Text className="text-center  text-lg font-semibold text-white">
                Create New Account
              </Text>

              <View style={styles.signUpInputMainContainer}>
                <SafeAreaView style={styles.signUpInputSubContainer}>
                  <Text style={styles.inputLabel}>Email</Text>
                  <BlurView intensity={100} style={styles.input}>
                    <TextInput
                      placeholder="you@example.com"
                      style={{ padding: 10 }}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                    />
                  </BlurView>

                  {errors.email && touched.email && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.email}
                    </Text>
                  )}

                  <Text style={styles.signUpinputLabel2}>Mobile No.</Text>
                  <BlurView intensity={100} style={styles.input}>
                    <TextInput
                      placeholder="7*****1511"
                      style={{ padding: 10 }}
                      onChangeText={handleChange("phoneNumber")}
                      onBlur={handleBlur("phoneNumber")}
                      value={values.phoneNumber}
                      keyboardType="phone-pad"
                    />
                  </BlurView>

                  {errors.phoneNumber && touched.phoneNumber && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.phoneNumber}
                    </Text>
                  )}

                  <Text style={styles.signUpinputLabel2}>Password</Text>
                  <BlurView intensity={100} style={styles.input}>
                    <TextInput
                      style={{ padding: 10 }}
                      secureTextEntry={isShowPassword}
                      placeholder="******"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                    <TouchableOpacity onPress={togglePassword}>
                      <Image
                        style={styles.passwordEye}
                        source={
                          isShowPassword ? ICONS.crossEyeImg : ICONS.eyeImg
                        }
                        fadeDuration={0}
                      />
                    </TouchableOpacity>
                  </BlurView>
                  {errors.password && touched.password && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.password}
                    </Text>
                  )}

                  <Text style={styles.signUpinputLabel2}>Confirm Password</Text>
                  <BlurView intensity={100} style={styles.input}>
                    <TextInput
                      style={{ padding: 10 }}
                      placeholder="******"
                      secureTextEntry={isShowPasswordConf}
                      onChangeText={handleChange("Confpassword")}
                      onBlur={handleBlur("Confpassword")}
                      value={values.Confpassword}
                    />
                    <TouchableOpacity onPress={togglePasswordConf}>
                      <Image
                        style={styles.passwordEye}
                        source={
                          isShowPasswordConf ? ICONS.crossEyeImg : ICONS.eyeImg
                        }
                        fadeDuration={0}
                      />
                    </TouchableOpacity>
                  </BlurView>
                  {errors.Confpassword && touched.Confpassword && (
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {errors.Confpassword}
                    </Text>
                  )}
                </SafeAreaView>
              </View>

              <View style={{ marginTop: "10%" }}>
                <CommonButton
                  onPress={() => {
                    handleSubmit();
                  }}
                  title={"Next"}
                />
              </View>
              <Text
                style={styles.dontHaveAccount}
                onPress={() => {
                  navigation.navigate("signIn");
                }}
              >
                already have account? <B>Sign in</B>
              </Text>
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create(authStyles);

export default GradientHOC(SignUpPage);
