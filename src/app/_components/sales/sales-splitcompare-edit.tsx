import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { SalesPageType } from "@/interfaces/salesPage";
import { siteProduct } from "@/lib/site-info";
import BuyButton from "./buy-button";
import markdownStyles from "./markdown-sales-styles.module.css";
import EditImage from "../edit-image";
import markdownToHtml from "@/_utils/markdownToHtml";

import MarkdownEditor from "@/_components/markdown-editor3";

const raleway = Raleway({ subsets: ["latin"] });

type Props2 = {
  info: SalesPageType;
  setCurrentPost: (post: SalesPageType) => void;
};

const SplitCompareEdit = ({ info, setCurrentPost }: Props2) => {
  const [editSubheading, setEditSubheading] = useState(false);
  const [formattedSubheading, setFormattedSubheading] = useState("");
  useEffect(() => {
    const formatSub = async () => {
      const formatted = await markdownToHtml(info.splitcompare.subheading);
      setFormattedSubheading(formatted);
    };
    formatSub();
  }, [info.splitcompare.subheading]);

  const updateContent = (newContent: string) => {
    setCurrentPost({
      ...info,
      splitcompare: { ...info.splitcompare, subheading: newContent },
    });
  };

  return (
    <div
      className="flex flex-col w-full px-4 pt-6 items-center "
      id="how-it-works"
    >
      <div className="relative flex flex-col w-full max-w-[1260px] items-center text-center pb-[250px] bg-slate-100 rounded-md">
        <div className="block  pb-4 items-center justify-center bg-slate-800 text-white rounded-md p-4 ">
          <p className=" text-[14px] font-bold w-full text-center">
            Split Compare Background
          </p>
          <EditImage
            src={info.splitcompare.background}
            alt="background"
            width={1800}
            height={1200}
            className="w-full h-full object-cover object-bottom-left"
            post={info}
            setPost={setCurrentPost}
            field="splitcompare.background"
          />
        </div>
        {/* <div className="hidden lg:block absolute inset-0 w-full h-full">
          <Image
            src={info.splitcompare.background}
            alt="Background"
            fill
            className="rounded-lg object-cover border-[3px] border-[#fff] shadow-xl
              "
          />
        </div> */}
        {/* <h4 className="relative text-[26px] lg:text-[50px] font-[600] text-[#005279] mt-8 px-4 lg:px-20 xl:px-36 z-10 leading-tight">
          {info.splitcompare.heading}
        </h4> */}
        <textarea
          className="mt-4 text-[26px] leading-tight lg:text-[50px]  text-[#005279] font-bold text-xl  px-2 border-2 border-yellow-500 border-dashed w-full text-center"
          onChange={(e) => {
            setCurrentPost({
              ...info,
              splitcompare: {
                ...info.splitcompare,
                heading: e.target.value,
              },
            });
          }}
          value={info.splitcompare.heading}
          placeholder="Splitcompare Heading"
          rows={2}
        />
        <div className="mt-2 md:mt-0 flex flex-col w-full rounded-md border-[3px] border-yellow-400 border-dashed p-2 mb-4 ">
          <div className="flex flex-col md:flex-row w-full justify-between ">
            <p className="text-[11px] text-[#777] text-center w-full md:text-left md:w-auto pb-1">
              Content is in Markdown Format -{" "}
              <a
                href="https://www.markdownguide.org/basic-syntax/"
                target="_blank"
                className="text-blue-400 underline hover:text-blue-600"
              >
                Syntax Guide
              </a>
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white rounded-md"
              onClick={() => setEditSubheading(!editSubheading)}
            >
              {(!editSubheading && <>Edit Content</>) || <>Preview Contnet</>}
            </button>
          </div>
          {(editSubheading && (
            <div className="bg-white/50 rounded-lg w-full flex justify-center">
              <MarkdownEditor
                initialContent={info.splitcompare.subheading}
                onSave={updateContent}
              />
            </div>
          )) || (
            <div
              dangerouslySetInnerHTML={{ __html: formattedSubheading }}
              className={`${markdownStyles["markdown"]} z-10 px-4 lg:px-12 xl:px-20`}
            />
          )}
        </div>

        <div className="flex w-full z-10 mt-16">
          <div className="flex w-1/2 items-start justify-center">
            <div>
              <EditImage
                src={info.splitcompare.beforeImg}
                alt={siteProduct}
                width={150}
                height={150}
                className="mr-6 "
                post={info}
                setPost={setCurrentPost}
                field="splitcompare.beforeImg"
              />
            </div>
            <div className="flex flex-col justify-start text-left">
              <h5 className="text-[20px] font-bold ">Before</h5>
              <input
                type="text"
                value={info.splitcompare.beforeText}
                className="text-[17px] text-[#d11111] mt-4 mb-4  px-2 border-2 border-yellow-500 border-dashed w-full text-left"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    splitcompare: {
                      ...info.splitcompare,
                      beforeText: e.target.value,
                    },
                  });
                }}
                placeholder={`Enter before text`}
              />
              {/* <p className="text-[17px] text-[#d11111]">
                {info.splitcompare.beforeText}
              </p> */}
            </div>
          </div>
          <div className="flex w-1/2 items-start justify-center">
            <div>
              <EditImage
                src={info.splitcompare.afterImg}
                alt={`Before ${siteProduct}`}
                width={150}
                height={150}
                className="mr-6"
                post={info}
                setPost={setCurrentPost}
                field="splitcompare.afterImg"
              />
            </div>
            <div className="flex flex-col justify-start text-left">
              <h5 className="text-[20px] font-bold ">After</h5>
              <input
                type="text"
                value={info.splitcompare.afterText}
                className="text-[17px] text-[#007fbc] mt-4 mb-4  px-2 border-2 border-yellow-500 border-dashed w-full text-left"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    splitcompare: {
                      ...info.splitcompare,
                      afterText: e.target.value,
                    },
                  });
                }}
                placeholder={`Enter after text`}
              />
              {/* <p className="text-[17px] text-[#007fbc]">
                {info.splitcompare.afterText}
              </p> */}
            </div>
          </div>
        </div>
        <div className="flex w-full mt-[-20px] mb-[-20px] z-30 justify-center">
          <EditImage
            src={info.splitcompare.centerImg}
            alt={siteProduct}
            height={350}
            width={370}
            post={info}
            setPost={setCurrentPost}
            field="splitcompare.centerImg"
          />
        </div>
      </div>
      <div className="relative flex flex-col w-full max-w-[1160px] items-center text-center">
        {" "}
        <div className="bg-white z-10 w-[90%] rounded-lg mt-[-350px]  pt-[100px] flex flex-col items-center px-2 lg:px-6">
          <BuyButton info={info} />

          <textarea
            className="mt-4 text-[26px] leading-tight lg:text-[50px]  text-[#0082c0] font-bold text-xl  px-2 border-2 border-yellow-500 border-dashed w-full text-center"
            onChange={(e) => {
              setCurrentPost({
                ...info,
                splitcompare: {
                  ...info.splitcompare,
                  heading2top: e.target.value,
                },
              });
            }}
            value={info.splitcompare.heading2top}
            placeholder="Splitcompare Heading 2 Top"
            rows={1}
          />
          <textarea
            className="mt-2 text-[26px] leading-tight lg:text-[50px]  text-[#005279] font-bold text-xl  px-2 border-2 border-yellow-500 border-dashed w-full text-center"
            onChange={(e) => {
              setCurrentPost({
                ...info,
                splitcompare: {
                  ...info.splitcompare,
                  heading2bot: e.target.value,
                },
              });
            }}
            value={info.splitcompare.heading2bot}
            placeholder="Splitcompare Heading 2 Bottom"
            rows={1}
          />
          <textarea
            className="mt-2 mb-2 text-[20px]   px-2 border-2 border-yellow-500 border-dashed w-full text-center"
            onChange={(e) => {
              setCurrentPost({
                ...info,
                splitcompare: {
                  ...info.splitcompare,
                  subheading2: e.target.value,
                },
              });
            }}
            value={info.splitcompare.subheading2}
            placeholder="Splitcompare Heading 2 Bottom"
            rows={3}
          />
          {/* <p className="text-center tesxt-[17px] lg:text-[20px] py-6">
            {info.splitcompare.subheading2}
          </p> */}
          <div className="flex flex-col items-center lg:flex-row  lg:items-start w-full">
            <div className="flex flex-col w-full lg:w-1/3 items-center justify-start text-center px-4 pb-6">
              <div
                className={`bg-[#0082c0] text-[18px] rounded-full px-6 py-2 text-white font-bold ${raleway.className}`}
              >
                Step 01
              </div>
              <EditImage
                src={info.splitcompare.step1Img}
                width={305}
                height={305}
                alt="Step 1"
                className="mt-2 lg:mt-6 rounded-xl border-[1px] border-[#0082c0] max-w-full"
                post={info}
                setPost={setCurrentPost}
                field="splitcompare.step1Img"
              />
              <textarea
                className="mt-4 text-[20px]  text-[#1376a3] font-bold text-xl  px-2 border-2 border-yellow-500 border-dashed w-full text-center"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    splitcompare: {
                      ...info.splitcompare,
                      step1Title: e.target.value,
                    },
                  });
                }}
                value={info.splitcompare.step1Title}
                placeholder="Step 1 Title"
                rows={1}
              />
              <textarea
                className="mt-4 text-[19px]  px-2 border-2 border-yellow-500 border-dashed w-full text-center"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    splitcompare: {
                      ...info.splitcompare,
                      step1Text: e.target.value,
                    },
                  });
                }}
                value={info.splitcompare.step1Text}
                placeholder="Step 1 Text"
                rows={5}
              />
              {/* <h5
                className={`text-[20px] text-[#1376a3] font-bold pt-4 pb-2 ${raleway.className}`}
              >
                {info.splitcompare.step1Title}
              </h5>
              <p className="text-[19px] px-6">{info.splitcompare.step1Text}</p> */}
            </div>
            <div className="flex flex-col w-full lg:w-1/3 items-center justify-start text-center px-4 pb-6">
              <div
                className={`bg-[#0082c0] text-[18px] rounded-full px-6 py-2 text-white font-bold ${raleway.className}`}
              >
                Step 02
              </div>
              <EditImage
                src={info.splitcompare.step2Img}
                width={305}
                height={305}
                alt="Step 1"
                className="mt-2 lg:mt-6 rounded-xl border-[1px] border-[#0082c0] max-w-full"
                post={info}
                setPost={setCurrentPost}
                field="splitcompare.step2Img"
              />
              <textarea
                className="mt-4 text-[20px]  text-[#1376a3] font-bold text-xl  px-2 border-2 border-yellow-500 border-dashed w-full text-center"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    splitcompare: {
                      ...info.splitcompare,
                      step2Title: e.target.value,
                    },
                  });
                }}
                value={info.splitcompare.step2Title}
                placeholder="Step 2 Title"
                rows={1}
              />
              <textarea
                className="mt-4 text-[19px]  px-2 border-2 border-yellow-500 border-dashed w-full text-center"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    splitcompare: {
                      ...info.splitcompare,
                      step2Text: e.target.value,
                    },
                  });
                }}
                value={info.splitcompare.step2Text}
                placeholder="Step 2 Text"
                rows={5}
              />
              {/* <h5
                className={`text-[20px] text-[#1376a3] font-bold pt-4 pb-2 ${raleway.className}`}
              >
                {info.splitcompare.step2Title}
              </h5>
              <p className="text-[19px] px-6">{info.splitcompare.step2Text}</p> */}
            </div>
            <div className="flex flex-col w-full lg:w-1/3 items-center justify-start text-center px-4 pb-6">
              <div
                className={`bg-[#0082c0] text-[18px] rounded-full px-6 py-2 text-white font-bold ${raleway.className}`}
              >
                Step 03
              </div>
              <EditImage
                src={info.splitcompare.step3Img}
                width={305}
                height={305}
                alt="Step 1"
                className="mt-2 lg:mt-6 rounded-xl border-[1px] border-[#0082c0] max-w-full"
                post={info}
                setPost={setCurrentPost}
                field="splitcompare.step3Img"
              />
              <textarea
                className="mt-4 text-[20px]  text-[#1376a3] font-bold text-xl  px-2 border-2 border-yellow-500 border-dashed w-full text-center"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    splitcompare: {
                      ...info.splitcompare,
                      step3Title: e.target.value,
                    },
                  });
                }}
                value={info.splitcompare.step3Title}
                placeholder="Step 3 Title"
                rows={1}
              />
              <textarea
                className="mt-4 text-[19px]  px-2 border-2 border-yellow-500 border-dashed w-full text-center"
                onChange={(e) => {
                  setCurrentPost({
                    ...info,
                    splitcompare: {
                      ...info.splitcompare,
                      step3Text: e.target.value,
                    },
                  });
                }}
                value={info.splitcompare.step3Text}
                placeholder="Step 3 Text"
                rows={5}
              />
              {/* <h5
                className={`text-[20px] text-[#1376a3] font-bold pt-4 pb-2 ${raleway.className}`}
              >
                {info.splitcompare.step3Title}
              </h5> */}
              {/* <p className="text-[19px] px-6">{info.splitcompare.step3Text}</p> */}
            </div>
          </div>
          <BuyButton info={info} />
        </div>
      </div>
    </div>
  );
};

export default SplitCompareEdit;
