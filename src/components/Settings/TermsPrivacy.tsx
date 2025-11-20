"use client";

import { handleApiResponse } from "@/lib/handleRTKResponse";
import {
  useCreateTermsPrivacyMutation,
  useGetTermsPrivacyQuery,
} from "@/redux/api/sportsApi";
import { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { Button } from "../ui/button";
import { MediaButton } from "../ui/icon";

export default function TermsPrivacy() {
  const [terms, setTerms] = useState("");
  const [privacy, setPrivacy] = useState("");
  const { data } = useGetTermsPrivacyQuery("");

  const [createTermsPrivacyFN, { isLoading }] = useCreateTermsPrivacyMutation();

  const handleSave = async () => {
    const termsPrivacyInfo = {
      terms: terms,
      privacy: privacy,
    };
    await handleApiResponse(
      createTermsPrivacyFN,
      termsPrivacyInfo,
      "Terms and Privacy saved successfully!"
    );
  };

  return (
    <div className="bg-white p-5 border border-borderColor rounded-2xl shadow-custom">
      <div className="flex items-center gap-3">
        <MediaButton type="document" />
        <h1 className="text-textColor text-xl font-medium leading-[150%]">
          Top Venues by Revenue
        </h1>
      </div>

      {/* Terms of Service */}
      <div className="py-4">
        <h1 className="text-left text-base py-2 font-normal leading-5 text-textColor">
          Terms of Service
        </h1>

        <SunEditor
          key={data?.data?.terms || ""}
          height="150px"
          placeholder="Type here..."
          onChange={(content) => setTerms(content)}
          setContents={data?.data?.terms || ""}
          setOptions={{
            buttonList: [
              ["bold", "underline"],
              ["fontSize"],
              ["fontColor"],
              ["list"],
              ["fullScreen"],
            ],
            defaultStyle:
              "font-size: 16px; font-family: sans-serif; line-height: 1.5;",
          }}
        />
      </div>

      <hr className="my-5" />

      {/* Privacy Policy */}
      <div>
        <h1 className="text-left text-base py-2 font-normal leading-5 text-textColor">
          Privacy Policy
        </h1>

        <SunEditor
          key={data?.data?.privacy || ""}
          height="150px"
          placeholder="Type here..."
          onChange={(content) => setPrivacy(content)}
          setContents={data?.data?.privacy || ""}
          setOptions={{
            buttonList: [
              ["bold", "underline"],
              ["fontSize"],
              ["fontColor"],
              ["list"],
              ["fullScreen"],
            ],
            defaultStyle:
              "font-size: 16px; font-family: sans-serif; line-height: 1.5;",
          }}
        />
      </div>

      <div className="py-5">
        <Button
          onClick={() => handleSave()}
          variant="default"
          className="w-48 "
        >
          {isLoading ? "Saving..." : "Save Terms & Privacy"}
        </Button>
      </div>
    </div>
  );
}
