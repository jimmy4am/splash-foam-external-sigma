"use client";

import React, { ReactNode, useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Lato } from "next/font/google";

import { UpsellPageType } from "@/interfaces/upsellPage";
import { SessionDataType } from "@/interfaces/sessionData";
import { PriceDisplay } from "@/app/_components/upsell/upsell-price-display";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"]
});

type Props = {
  info: UpsellPageType;
  nextStep: (upsell?: any) => void;
  sessionData: SessionDataType;
};

type UpsellQuizModalProps = {
  info: UpsellPageType;
  onQuizComplete: () => void;
}

type UpsellQuizCompletedModalProps = {
  info: UpsellPageType;
}

type UpsellGiftsModalProps = {
  info: UpsellPageType;
  sessionData: SessionDataType;
  declineOffer: () => void;
}

type UpsellDeclineGiftsModalProps = {
  declineOffer: () => void;
}

type QuizItemType = {
  question: string;
  answers: string[];
}

const templatesWithHeader = ['oricle-gift-quiz', 'posture-gift-quiz', 'jet-gift-quiz'] as const;

type slug = typeof templatesWithHeader[number];

const headerClasses: Record<slug, string> = {
  'oricle-gift-quiz': 'border-b-[#93bcf0]',
  'posture-gift-quiz': 'border-b-[#00B0F0]',
  'jet-gift-quiz': 'border-b-[#00B0F0]',
}

const UpsellQuizModal = ({ info, onQuizComplete }: UpsellQuizModalProps) => {
  const questions: QuizItemType[] = [
    {
      question: `How easy to use was the ${info.product} Checkout Process?`,
      answers: ['Hard', 'Average', 'Ease']
    },{
      question: `Where did you first hear about ${info.product}?`,
      answers: ['Friend/Family', 'Internet', 'Other']
    },{
      question: `Would you be willing to refer ${info.product} to your family and friends?`,
      answers: ['Very Likely', 'Somewhat Likely', 'Not Likely']
    }
  ]
  const [step, setStep] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState<QuizItemType>(questions[0]);

  const handleClick = ({isLastQuestion}: {isLastQuestion: boolean}): void => {
    setCurrentQuestion(questions[step])
    setStep(prev => prev + 1)
    if (isLastQuestion) {
      onQuizComplete()
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center  py-[3vw] sm:py-[15px] bg-[rgba(14,14,14,0.75)]">
      <div className="max-h-[80%] min-h-[80%] overflow-auto flex w-[95%] max-w-[525px] lg:max-w-[825px] xl:max-w-[1040px] p-[5vw_3vw_3vw] sm:p-[25px_15px_15px] bg-[#f9f9f9] rounded-[4px] shadow-[0_10px_25px_rgba(0,0,0,0.5)] text-[#444]">
        <div className="self-stretch w-full bg-[#fff] border-[1px] border-[#ddd]">

          <div className="flex w-full h-[2.5vw] sm:h-[12px] mb-[20px] sm:mb-[40px] bg-[#B2B2B2]">
            <div style={{width: `${step * 100 / questions.length}%`}} className="h-full bg-[#0083D2] transition-width duration-500 ease-in-out"></div>
          </div>

          <p className="text-center text-[16px] leading-[1] font-bold">Question {step} / {questions.length}</p>

          <div className="w-[70px] h-[3px] m-[30px_auto] bg-[#000]"></div>

          <p className="w-[90%] sm:w-[70%] m-[0_auto] text-center text-[23px] leading-[27px] lg:text-[40px] lg:leading-[50px] font-bold italic">
            {currentQuestion?.question}
          </p>

          <div className="w-[70px] h-[3px] m-[30px_auto] bg-[#000]"></div>

          <ul className="w-[66%] max-w-[240px] lg:w-full lg:max-w-[600px] mx-auto flex flex-col gap-[12px] lg:gap-[15px] text-[24px] lg:text-[28px] leading-[1] text-[#fff] font-semibold">
            {
              currentQuestion?.answers.map((answer) => (
                <li key={answer} className="">
                  <button
                    className="w-full p-[12px_0] bg-[#4ac27e] shadow-[0px_1px_5px_rgba(58,84,214,0.4)] uppercase hover:bg-[#39AC6A] active:bg-[#39AC6A]"
                    onClick={() => handleClick({ isLastQuestion: (step === questions.length) })}>{answer}</button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
};

const UpsellQuizCompletedModal = ({ info }: UpsellQuizCompletedModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsSubmitting(false),3700);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center  py-[3vw] sm:py-[15px] bg-[rgba(0,0,0,0.6)]">
      <div className="max-h-[80%] min-h-[250px] overflow-auto flex flex-col items-center gap-[20px] w-[95%] max-w-[600px] p-[40px_15px] bg-[#2a363f] text-center text-[#fff] leading-[1]">
        {isSubmitting ? (
          <>
            <p className="mb-[50px] text-[26px]">Submitting your survey answers...</p>
            <div className="w-full max-w-[450px] h-[20px] p-[2px] rounded-[10px] bg-[#172026] overflow-hidden">
              <div className="progress-bar h-full bg-[#c5e083] rounded-[10px] shadow-[inset_0px_2px_9px_rgba(255,255,255,0.3),inset_0px_-2px_6px_rgba(0,0,0,0.4)]"></div>
            </div>
          </>
          ) : (
            <>
              <p className="max-w-[450px] mx-auto text-[26px]">Congrats! We have {info.giftsNumber} available gifts for you today!</p>
              <div className="w-[150px]">
                <Image
                  src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/3059931c-ae40-4161-941c-77290dc1f800/public"
                  width={216}
                  height={216}
                  alt="Check"
                />
              </div>
              <p className="text-[20px]">You can now select your FREE GIFT!</p>
            </>
          )}
      </div>
    </div>
  )
}

const UpsellGiftsModal = ({ info, sessionData, declineOffer }: UpsellGiftsModalProps) => {
  const gifts = useMemo(() =>([
    {
      availability: info.gift1?.availability === 'is available',
      image: info.gift1?.image,
      name: info.gift1?.name,
      text: info.gift1?.text,
      ratingNumber: info.gift1?.ratingNumber,
      numberOfReviews: info.gift1?.numberOfReviews,
      price: info.gift1?.price,
      shippingPrice: info.gift1?.shippingPrice
    },
    {
      availability: info.gift2?.availability === 'is available',
      image: info.gift2?.image,
      name: info.gift2?.name,
      text: info.gift2?.text,
      ratingNumber: info.gift2?.ratingNumber,
      numberOfReviews: info.gift2?.numberOfReviews,
      price: info.gift2?.price,
      shippingPrice: info.gift2?.shippingPrice
    },
    {
      availability: info.gift3?.availability === 'is available',
      image: info.gift3?.image,
      name: info.gift3?.name,
      text: info.gift3?.text,
      ratingNumber: info.gift3?.ratingNumber,
      numberOfReviews: info.gift3?.numberOfReviews,
      price: info.gift3?.price,
      shippingPrice: info.gift3?.shippingPrice
    },
    {
      availability: info.gift4?.availability === 'is available',
      image: info.gift4?.image,
      name: info.gift4?.name,
      text: info.gift4?.text,
      ratingNumber: info.gift4?.ratingNumber,
      numberOfReviews: info.gift4?.numberOfReviews,
      price: info.gift4?.price,
      shippingPrice: info.gift4?.shippingPrice
    },
    {
      availability: info.gift5?.availability === 'is available',
      image: info.gift5?.image,
      name: info.gift5?.name,
      text: info.gift5?.text,
      ratingNumber: info.gift5?.ratingNumber,
      numberOfReviews: info.gift5?.numberOfReviews,
      price: info.gift5?.price,
      shippingPrice: info.gift5?.shippingPrice
    },
    {
      availability: info.gift6?.availability === 'is available',
      image: info.gift6?.image,
      name: info.gift6?.name,
      text: info.gift6?.text,
      ratingNumber: info.gift6?.ratingNumber,
      numberOfReviews: info.gift6?.numberOfReviews,
      price: info.gift6?.price,
      shippingPrice: info.gift6?.shippingPrice
    },
  ]), [info])

  const getRating = (value: number): ReactNode => {
    switch (true) {
      case (value > 9): return '★★★★★';
      case (9 > value && value > 7): return '★★★★☆';
      case (7 > value && value > 6): return '★★★☆☆';
      case (6 > value && value > 5.5): return '★★☆☆☆';
      default: return '★★☆☆☆';
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center  py-[3vw] sm:py-[15px] bg-[rgba(14,14,14,0.75)]">
      <div className="max-h-[95%] min-h-[80%] overflow-auto flex w-[95%] max-w-[1130px] p-[5vw_3vw_3vw] sm:p-[25px_15px_15px] bg-[#f9f9f9] rounded-[4px] shadow-[0_10px_25px_rgba(0,0,0,0.5)] text-[#444]">
        <div className="self-stretch w-full h-full p-[3vw] sm:p-[25px_30px_15px] bg-[#fff] border-[1px] border-[#ddd]">
          <h2 className="mb-[25px] text-center text-[5vw] sm:text-[30px] lg:text-[40px] leading-[8vw] sm:leading-[1]">Choose <span className="border-b-[2px] border-[#000]">One FREE Gift</span> To Continue!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[20px]">

            {gifts.length ? gifts.map((gift) => (
              <div className={`flex border-[1px] border-[#444] ${!gift.availability && 'grayscale'}`} key={gift.name}>
                <div className="flex-[0_0_40%]">
                  <Image
                    src={gift.image!}
                    width={400}
                    height={400}
                    alt={gift.name!}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-[0_0_60%] flex flex-col gap-[5px] p-[5px_10px_5px]">
                  <h3 className="text-[14px] sm:text-[18px] font-bold">{gift.name}</h3>
                  <p className="flex-1 text-[12px] leading-[1.2] sm:text-[14px]">{gift.text}</p>
                  <div className="flex items-center gap-[6px] text-[12px] leading-[1.2] sm:text-[14px]">
                    <p className="text-[rgba(239,85,95,1)]">{getRating(gift.ratingNumber!)}</p>
                    <p>({gift.numberOfReviews}{" "} customer reviews)</p>
                  </div>
                  <div className="flex items-center gap-[6px] text-[12px] leading-[1.2] sm:text-[14px] font-bold">
                    <p className="text-[#08d441]">
                      <PriceDisplay
                        priceUSD={0.00}
                        countryCode={
                          sessionData?.customerInfo?.country || "US"
                        }
                        digits={2}
                      />
                    </p>
                    <p className="text-[#f35072] line-through">
                      <PriceDisplay
                        priceUSD={gift.price!}
                        countryCode={
                          sessionData?.customerInfo?.country || "US"
                        }
                        digits={2}
                      />
                    </p>
                  </div>
                  <p
                    className="w-full max-w-[85%] sm:max-w-[180px] p-[3px_5px] border-[1px] border-[#CDCDCD] text-center text-[12px] leading-[1.2] sm:text-[14px]">
                    Expedited Shipping:{" "}
                    <PriceDisplay
                      priceUSD={gift.shippingPrice!}
                      countryCode={
                        sessionData?.customerInfo?.country || "US"
                      }
                      digits={2}
                    />
                  </p>
                  <button
                    className="w-full p-[10px_2px] bg-[#08d441] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1] text-[#fff] uppercase font-bold cursor-pointer hover:bg-[#39AC6A] active:bg-[#39AC6A]">{gift.availability ? 'Choose gift' : 'Sold out'}</button>
                </div>
              </div>)
            ) : null}

          </div>

          <button className="flex mx-auto mt-[15vw] sm:mt-[25px] text-[3vw] sm:text-[12px] text-[#999] tracking-[0.5px]" onClick={declineOffer}>
            No thanks, I don't want free gift.
          </button>
        </div>
      </div>
    </div>
  )
}

const UpsellDeclineGiftsModal = ({ declineOffer }: UpsellDeclineGiftsModalProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      declineOffer()
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div className="w-full max-w-[300px] flex flex-col items-center p-[5px_10px_10px] bg-[#fff] rounded-[5px] text-center text-[17px] font-arial">
        <Image
          src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/8de31b2a-2cd1-45ad-6bd2-80d7c07e3d00/public"
          width={70}
          height={70}
          alt="Loading"
        />
        <p>Processing, one moment please...</p>
      </div>
    </div>
  )
}

const UpsellTemplate12 = ({ info, nextStep, sessionData }: Props) => {
  const [isQuizModalVisible ,setIsQuizModalVisible] = useState(false);
  const [isQuizCompletedModalVisible ,setIsQuizCompletedModalVisible] = useState(false);
  const [isGiftsModalVisible ,setIsGiftsModalVisible] = useState(false);
  const [isDeclineGiftsModalVisible, setIsDeclineGiftsModalVisible] = useState(false);

  const acceptOffer = async () => {
    // ACCEPT OFFER
    setIsQuizModalVisible(true);
  };

  const declineOffer = async () => {
    // DECLINE OFFER
    setIsDeclineGiftsModalVisible(true)
  };

  const onQuizComplete = () => {
    setIsQuizModalVisible(false);
    setIsQuizCompletedModalVisible(true);

    setTimeout(() => {
      setIsQuizCompletedModalVisible(false);
      setIsGiftsModalVisible(true)
    }, 7000)
  }

  return (
      <div className={`flex flex-col min-h-screen bg-[#fff9f8] text-[#212529] ${lato.className}`}>

        {/*MODALS*/}
        {isQuizModalVisible && <UpsellQuizModal info={info} onQuizComplete={onQuizComplete} />}
        {isQuizCompletedModalVisible && <UpsellQuizCompletedModal info={info} />}
        {isGiftsModalVisible && <UpsellGiftsModal info={info} sessionData={sessionData} declineOffer={declineOffer} />}
        {isDeclineGiftsModalVisible && <UpsellDeclineGiftsModal declineOffer={nextStep} />}

        {templatesWithHeader.includes(info.slug as slug) && (
          <header className={`flex justify-center p-[15px_15px_10px] sm:p-[10px_15px_5px] bg-[#fff] border-b-[7px] ${headerClasses[info.slug as slug]}`}>
            <a href="#" className="flex w-[130px] sm:w-auto">
              <Image
                className="object-contain"
                src={info.logo}
                width={200}
                height={70}
                alt={info.product}
              />
            </a>
          </header>
        )}

        <div className="pt-[10px] md:pt-[40px]">
          <div className="w-[95%] max-w-[1000px] m-[0_auto] px-[5vw] md:px-[20px] py-[30px] bg-[#fff] border-[1px] border-[#DDDDDD]">
          <div className="text-center text-[#363636] text-[8vw] sm:text-[34px] leading-[1] italic">
            <h1 className="mb-[15px] text-[#4AC27E]">Special Offer</h1>
            <h2>Congratulations You Have Been Selected!</h2>
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-center py-[2vw] md:p-[40px_0_20px]">
            <div className="flex items-center justify-center md:flex-[0_0_30%]">
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/28bd16d1-c59a-484f-e71d-853d85d86d00/public"
                width={184}
                height={243}
                alt="Notebook"
              />
            </div>
            <div className="md:flex-[0_0_53%] flex flex-col gap-[20px] mb-[20px] text-[4.8vw] sm:text-[1.2rem] leading-[1.3] font-bold">
              <p>As a valued customer of ours you have been chosen to participate in a short survey!</p>
              <p>This 3-question survey will only take <span className="text-[#3763a0]">10 seconds</span> and is extremely important to help us provide the best possible improvements for our customers!</p>
              <p>As a special thank you for taking the time to help us out we are offering a one-time <span className="text-[#3763a0]">exclusive FREE GIFT</span> of your choice!</p>
            </div>
          </div>

          <button className="w-full max-w-[500px] h-[70px] flex items-center justify-center mx-auto bg-[#4ac27e] text-[7vw] sm:text-[20px] text-[#fff] tracking-[0.5px] shadow-[0px_1px_5px_rgba(58,84,214,0.4)] uppercase hover:bg-[#17b35b]" onClick={acceptOffer}>
            Send me my gift!
          </button>

          <button className="flex mx-auto mt-[15vw] sm:mt-[25px] text-[3vw] sm:text-[12px] text-[#999] tracking-[0.5px]" onClick={declineOffer}>
            No thank you, I would not like to get a free gift.
          </button>
        </div>
        </div>

        <footer className="flex flex-col justify-center items-center gap-[15px] w-[95%] max-w-[1000px] mx-[auto] mt-auto px-[5vw] md:px-[20px]  py-[40px] text-center text-[3vw] sm:text-[12px] leading-[15px] text-[#000]">
          <p className="flex">
            Copyright {new Date().getFullYear()} - {info.product}{" "}
            <Image
              src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/4f72e2bd-5704-418f-080c-92afe34ee900/public"
              width={12}
              height={12}
              alt="heart icon"
              className="object-scale-down mx-[10px]"
            />
            All Rights Reserved
          </p>

          {info.footerDisclaimer && <p className="text-[14px]">{info.footerDisclaimer}</p>}

          <p className="flex text-[14px] underline">Accepted Payments</p>

          <ul className="flex flex-wrap justify-center gap-[15px]">
            <li>
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/6db9f844-557c-4dd8-ad66-583a1b60d300/public"
                width={56}
                height={28}
                alt="Visa"
              />
            </li>
            <li>
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/656ca63a-96b6-46e4-26ce-b012350c1e00/public"
                width={56}
                height={28}
                alt="Mastercard"
              />
            </li>
            <li>
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/88047a78-c36e-4f46-a982-ffd581cf6b00/public"
                width={56}
                height={28}
                alt="American Express"
              />
            </li>
            <li>
              <Image
                src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/e6c4e39d-5796-4506-8db9-141156085500/public"
                width={135}
                height={28}
                alt="DMCA Protected icon"
              />
            </li>
          </ul>
        </footer>
      </div>
  );
};

export default UpsellTemplate12;