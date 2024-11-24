"use client";
import { auth } from "@/firebase";
import { Button, Card, Input, NumberInput } from "@mantine/core";
import {
  ApplicationVerifier,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import React, { FormEvent, useEffect, useState, useTransition } from "react";

const OTPLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [resendCountDown, setResendCountDown] = useState(0);
  const [reCaptchaVerifier, setReCaptchaVerifier] = useState<
    RecaptchaVerifier | ApplicationVerifier
  >();
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (resendCountDown > 0) {
      timer = setTimeout(() => {
        setResendCountDown((prev) => prev - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [resendCountDown]);

  useEffect(() => {
    const recapthaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );

    setReCaptchaVerifier(recapthaVerifier);

    return () => {
      recapthaVerifier.clear();
    };
  }, []);

  async function requestOtp(e?: FormEvent<HTMLFormElement>) {
    e?.preventDefault();

    setResendCountDown(60);

    startTransition(async () => {
      setError("");

      if (!reCaptchaVerifier) {
        setError("Recaptha not verified");
      }
      try {
        const confirmationResult = await signInWithPhoneNumber(
          auth,
          phoneNumber,
          reCaptchaVerifier
        );
        setConfirmationResult(confirmationResult);
        setSuccess("OTP sent successfully");
      } catch (error: any) {
        console.log(error);
        setResendCountDown(0);
      }
    });
  }

  return (
    <div>
      <Card shadow="md" w={"300px"}>
        {!confirmationResult && (
          <form onSubmit={requestOtp}>
            <NumberInput
              label="Phone Number"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.toString())}
            />
            <p className="text-xs">
              Please enter your mobile number with country code(+91)
            </p>
          </form>
        )}

        <Button variant="gradient" onClick={() => requestOtp()}>
          Send OTP
        </Button>

        {error}
        {success}

        <div id="recaptcha-container" />
      </Card>
    </div>
  );
};

export default OTPLogin;
