"use client";

import React, {ReactNode, useEffect, useState} from "react";
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
  onQuizComplete: (value: UserAnswerType[]) => void;
}

type UpsellGiftsModalProps = {
  info: UpsellPageType;
  sessionData: SessionDataType;
  declineOffer: () => void;
}

type QuizItemType = {
  question: string;
  answers: string[];
}

type UserAnswerType = {
  question :string;
  answer: string;
}

const UpsellQuizModal = ({onQuizComplete}: UpsellQuizModalProps) => {
  const questions: QuizItemType[] = [
    {
      question: 'How easy to use was the Glabrous Checkout Process?',
      answers: ['Hard', 'Average', 'Ease']
    },{
      question: 'Where did you first hear about Glabrous?',
      answers: ['Friend/Family', 'Internet', 'Other']
    },{
      question: 'Would you be willing to refer Glabrous to your family and friends?',
      answers: ['Very Likely', 'Somewhat Likely', 'Not Likely']
    }
  ]
  const [step, setStep] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState<QuizItemType>(questions[0]);
  const [answers, setAnswers] = useState<UserAnswerType[]>([])

  const handleClick = ({question, answer, isLastQuestion}: {question: string, answer: string, isLastQuestion: boolean}): void => {
    setCurrentQuestion(questions[step])
    setStep(prev => prev + 1)
    setAnswers(prev => {
      const newAnswers = [...prev, {question, answer }]
      if (isLastQuestion) {
        onQuizComplete(newAnswers)
      }
      return newAnswers
    })
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
              currentQuestion?.answers.map((answer, idx) => (
                <li key={answer} className="">
                  <button
                    className="w-full p-[12px_0] bg-[#4ac27e] shadow-[0px_1px_5px_rgba(58,84,214,0.4)] uppercase hover:bg-[#39AC6A] active:bg-[#39AC6A]"
                    onClick={() => handleClick({question: currentQuestion?.question, answer, isLastQuestion: (step === questions.length)})}>{answer}</button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
};


const UpsellQuizCompletedModal = () => {
  const [isSubmitting, setIsSubmitting] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsSubmitting(false),3700);
    return () => {
      clearTimeout(timer1);
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
              <p className="max-w-[450px] mx-auto text-[26px]">Congrats! We have 6 available gifts for you today!</p>
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
  const gifts = [
    {
      availability: true,
      image: 'https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/085df793-e20c-4ce8-211a-597d97facb00/public',
      name: 'Ear Wax Cleaner',
      text: 'Clean and massage your ears with the #1 best selling ear cleaner. Feels amazing and revitalizes hearing!',
      ratingNumber: 9.5,
      numberOfReviews: 312,
      price: 29.99,
      shippingPrice: 9.95
    },
    {
      availability: false,
      image: 'https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/b28aafe4-042f-4616-85f7-5c658f5f9400/public',
      name: 'Chewable Oral Probiotic',
      text: 'This amazing oral probiotic will keep your breath fresh and smelling amazing all day',
      ratingNumber: 9.5,
      numberOfReviews: 94,
      price: 49.95,
      shippingPrice: 9.95
    },
    {
      availability: false,
      image: 'https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/b28aafe4-042f-4616-85f7-5c658f5f9400/public',
      name: 'Dishwasher Cleaner',
      text: 'Easily clean the dishwasher and never let gross buildup affect your dishes or your health!',
      ratingNumber: 8,
      numberOfReviews: 1251,
      price: 24.94,
      shippingPrice: 9.95
    },
    {
      availability: true,
      image: 'https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/b28aafe4-042f-4616-85f7-5c658f5f9400/public',
      name: 'Personal Safety Alarm',
      text: 'Just pull the alarm to stop any wrongdoers right in there tracks with this ultra high frequency alarm!',
      ratingNumber: 8,
      numberOfReviews: 871,
      price: 25.95,
      shippingPrice: 9.95
    },
    {
      availability: true,
      image: 'https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/b28aafe4-042f-4616-85f7-5c658f5f9400/public',
      name: 'Wearable Hand Sanitizer',
      text: 'Never worry about germs again with this on-the-go hand sanitizer!',
      ratingNumber: 7,
      numberOfReviews: 312,
      price: 19.99,
      shippingPrice: 9.95
    },
    {
      availability: false,
      image: 'https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/b28aafe4-042f-4616-85f7-5c658f5f9400/public',
      name: 'Refrigerator Deodorizer',
      text: 'Something rotten stinking up your kitchen? Keep your fridge clean and smelling great with this product!',
      ratingNumber: 10,
      numberOfReviews: 472,
      price: 49.99,
      shippingPrice: 9.95
    }
  ];

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

            {gifts.map((gift) => (
              <div className={`flex border-[1px] border-[#444] ${!gift.availability && 'grayscale'}`} key={gift.name}>
                <div className="flex-[0_0_40%]">
                  <Image
                    src={gift.image}
                    width={400}
                    height={400}
                    alt={gift.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-[0_0_60%] flex flex-col gap-[5px] p-[5px_10px_5px]">
                  <h3 className="text-[14px] sm:text-[18px] font-bold">{gift.name}</h3>
                  <p className="flex-1 text-[12px] leading-[1.2] sm:text-[14px]">{gift.text}</p>
                  <div className="flex items-center gap-[6px] text-[12px] leading-[1.2] sm:text-[14px]">
                    <p className="text-[rgba(239,85,95,1)]">{getRating(gift.ratingNumber)}</p>
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
                        priceUSD={gift.price}
                        countryCode={
                          sessionData?.customerInfo?.country || "US"
                        }
                        digits={2}
                      />
                    </p>
                  </div>
                  <p className="w-full max-w-[85%] sm:max-w-[180px] p-[3px_5px] border-[1px] border-[#CDCDCD] text-center text-[12px] leading-[1.2] sm:text-[14px]">
                    Expedited Shipping:{" "}
                    <PriceDisplay
                      priceUSD={gift.shippingPrice}
                      countryCode={
                        sessionData?.customerInfo?.country || "US"
                      }
                      digits={2}
                    />
                  </p>
                  <button className="w-full p-[10px_2px] bg-[#08d441] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1] text-[#fff] uppercase font-bold cursor-pointer hover:bg-[#39AC6A] active:bg-[#39AC6A]">{gift.availability ? 'Choose gift' : 'Sold out'}</button>
                </div>
              </div>
            ))}

          </div>

          <button className="flex mx-auto mt-[15vw] sm:mt-[25px] text-[3vw] sm:text-[12px] text-[#999] tracking-[0.5px]" onClick={declineOffer}>
            {info.skipOfferText2}
          </button>
        </div>
      </div>
    </div>
  )
}

const UpsellTemplate12 = ({ info, nextStep, sessionData }: Props) => {
  const [isQuizModalVisible ,setIsQuizModalVisible] = useState(false);
  const [isQuizCompletedModalVisible ,setIsQuizCompletedModalVisible] = useState(false);
  const [isGiftsModalVisible ,setIsGiftsModalVisible] = useState(false);

  const acceptOffer = async () => {
    // ACCEPT OFFER
    setIsQuizModalVisible(true);
  };

  const declineOffer = async () => {
    // DECLINE OFFER
  };

  const onQuizComplete = (answers: UserAnswerType[]) => {
    setIsQuizModalVisible(false);
    setIsQuizCompletedModalVisible(true);

    console.log('answers',answers)

    setTimeout(() => {
      setIsQuizCompletedModalVisible(false);
      setIsGiftsModalVisible(true)
    }, 7000)
  }

  return (
      <div className={`min-h-screen py-[10px] md:py-[40px] bg-[#fff9f8] text-[#212529] ${lato.className}`}>
        {isQuizModalVisible && <UpsellQuizModal onQuizComplete={onQuizComplete} />}
        {isQuizCompletedModalVisible && <UpsellQuizCompletedModal />}
        {isGiftsModalVisible && <UpsellGiftsModal info={info} sessionData={sessionData} declineOffer={declineOffer} />}
        <div className="w-[95%] max-w-[1000px] m-[0_auto] px-[5vw] md:px-[20px] py-[30px] bg-[#fff] border-[1px] border-[#DDDDDD]">
          <div className="text-center text-[#363636] text-[8vw] sm:text-[34px] leading-[1] italic">
            <h1 className="mb-[15px] text-[#4AC27E]">{info.title1}</h1>
            <h2>{info.title2}</h2>
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
              <p>{info.text1}</p>
              <p>{info.text2}{" "} <span className="text-[#3763a0]">{info.text3}</span> {" "}{info.text4}</p>
              <p>{info.text5}{" "} <span className="text-[#3763a0]">{info.text6}</span> {" "}{info.text7}</p>
            </div>
          </div>

          <button className="w-full max-w-[500px] h-[70px] flex items-center justify-center mx-auto bg-[#4ac27e] text-[7vw] sm:text-[20px] text-[#fff] tracking-[0.5px] shadow-[0px_1px_5px_rgba(58,84,214,0.4)] uppercase hover:bg-[#17b35b]" onClick={acceptOffer}>
            {info.ctaText1}
          </button>

          <button className="flex mx-auto mt-[15vw] sm:mt-[25px] text-[3vw] sm:text-[12px] text-[#999] tracking-[0.5px]" onClick={declineOffer}>
            {info.skipOfferText1}
          </button>
        </div>
        <footer className="flex flex-col justify-center items-center gap-[15px] p-[40px_0] text-center text-[3vw] sm:text-[12px] leading-[15px] text-[#000]">
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
          <Image
            src="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/e6c4e39d-5796-4506-8db9-141156085500/public"
            width={135}
            height={28}
            alt="DMCA Protected icon"
          />
        </footer>
      </div>
  );
};

export default UpsellTemplate12;