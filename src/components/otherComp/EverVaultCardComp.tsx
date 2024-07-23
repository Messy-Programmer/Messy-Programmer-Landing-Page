import React from "react";
import { EverVaultCard, Icon } from "../ui/everault-card";
import ServiceHeroImageComponent from "./ServiceHeroImage";
import { motion } from "framer-motion";
import scrollTo from "gatsby-plugin-smoothscroll";
import { BackgroundBeams } from "../ui/background-beam";
export function EverVaultCardComp() {
  return (
    <div className="relative flex flex-col px-2 mt-10 items-center pt-16 bg-[#051405] lg:pb-16">
      <motion.div
        className="text-slate-100 text-center"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-5xl leading-[3.5rem] gradient-txt font-medium xl:text-7xl xl:py-5">
          Our Services Categories
        </h1>
        <p className="font-thin mt-4 xl:text-lg xl:font-light">
          Empowering excellence through exceptional services.
        </p>
      </motion.div>
      {/* container div  */}
      <motion.div
        className="flex flex-col items-center gap-5 lg:flex-row lg:pt-16"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{ delay: 0.2, type: "spring", bounce: 0.1 }}
        viewport={{ once: true }}
      >
        <div
          id="item-1"
          className="flex flex-col items-center gap-5 xl:w-[40rem] lg:gap-60"
        >
          {/* down div contains all the context  */}
          <ServiceHeroImageComponent />
          {/* card no1  */}
          <div className="border border-[#1c381c] w-[14.688rem] sm:w-full px-7 pb-10 pt-5 bg-gradient-to-b from-[#294629] to-[#050a05] relative sm:pb-5 ">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-[#7be87b]" />
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <EverVaultCard svg={cardOne} bg="bg-one" className="sm:w-[39%]" />
              <div className="text-slate-100">
                <p className="text-xs font-normal mt-6">
                  Web App, Business Workflow Design & Implementation, Dedicated
                  Tech Team for Your Business
                </p>
                <h1 className="text-[1.7rem] font-medium mt-4 gradient-txt">
                  Website Development
                </h1>
                <p className=" text-lg leading-4 mt-4 sm:mt-1">
                  Leave the tech part on us!
                </p>
                <div className="flex justify-center mt-4 sm:justify-start">
                  <button
                    onClick={() => {
                      scrollTo("#footer", "center");
                    }}
                    className=" rounded-xl bg-gradient-to-tr from-green-700 to-lime-500 py-2 px-4"
                  >
                    contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="item-2"
          className="flex flex-col gap-5 sm:flex-row sm:gap-[9.5rem] lg:flex-col lg:order-first lg:gap-5 "
        >
          {/* card no2 */}
          <div className="border border-[#1c381c] w-[14.688rem] px-7 pb-10 pt-5 bg-gradient-to-b from-[#294629] to-[#050a05] relative lg:pb-20">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-[#7be87b]" />
            <div className="flex flex-col gap-6">
              <EverVaultCard svg={cardTwo} bg="bg-two" />
              <div className="text-slate-100">
                <h1 className=" text-[1.7rem] font-medium mt-4 gradient-txt">
                  Business Development
                </h1>
                <p className=" text-sm mt-4 font-[200] tracking-wide">
                  Boost efficiency and productivity with custom internal
                  business applications tailored to your unique workflows and
                  requirements.
                </p>
              </div>
            </div>
          </div>
          {/* card no3  */}
          <div className="border border-[#1c381c] w-[14.688rem] px-7 pb-10 pt-5 bg-gradient-to-b from-[#294629] to-[#050a05] relative">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-[#7be87b]" />
            <div className="flex flex-col gap-6">
              <EverVaultCard svg={cardThree} bg="bg-three" />
              <div className="text-slate-100">
                <h1 className="text-[1.7rem] font-medium mt-4 gradient-txt">
                  Automation Tool
                </h1>
                <p className=" text-sm mt-4 font-[200] tracking-wide">
                  Automate repetitive tasks and streamline operations with our
                  bespoke business automation tools. Say goodbye to manual
                  processes and hello to efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="item-3"
          className="flex flex-col gap-5 sm:flex-row sm:gap-[9.5rem] lg:flex-col lg:gap-5"
        >
          {/* card no4 */}
          <div className="border border-[#1c381c] w-[14.688rem] px-7 pb-10 pt-5 bg-gradient-to-b from-[#294629] to-[#050a05] relative">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-[#7be87b]" />
            <div className="flex flex-col gap-6">
              <EverVaultCard svg={cardFour} bg="bg-four" />
              <div className="text-slate-100">
                <h1 className="text-[1.7rem] font-medium mt-4 gradient-txt">
                  Workflow Design
                </h1>
                <p className=" text-sm mt-4 font-[200] tracking-wide">
                  Reach your customers on the go with our app development
                  services. Whether iOS or Android, we build user-friendly,
                  feature-rich applications that enhance your brand presence.
                </p>
              </div>
            </div>
          </div>
          {/* card no 5 */}
          <div className="border border-[#1c381c] w-[14.688rem] px-7 pb-10 pt-5 bg-gradient-to-b from-[#294629] to-[#050a05] relative">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-[#7be87b]" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-[#7be87b]" />
            <div className="flex flex-col gap-6">
              <EverVaultCard svg={cardFive} bg="bg-five" />
              <div className="text-slate-100">
                <h1 className="text-[1.7rem] font-medium mt-4 gradient-txt">
                  Tech Consultancy
                </h1>
                <p className=" text-sm mt-4 font-[200] tracking-wide">
                  Leverage our expertise and industry insights to make informed
                  technology decisions. Whether it's choosing the right tech
                  stack, we're here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <BackgroundBeams />
    </div>
  );
}
const cardOne = (
  <svg
    width="48"
    height="45"
    viewBox="0 0 48 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.3362 38.4492C32.0874 38.2978 31.8707 38.0949 31.6985 37.8491C31.6189 37.7357 31.5517 37.6158 31.496 37.4919H3.23276V9.63404H41.5961V27.8242C42.4151 27.8982 43.1023 28.4361 43.3908 29.1727C43.6463 29.0327 43.931 28.9461 44.2302 28.9197C44.4327 28.9021 44.6337 28.9147 44.8287 28.9532V2.69404C44.8287 1.20854 43.6204 0 42.135 0H2.69393C1.20854 0 0 1.20854 0 2.69404V38.0308C0 39.5163 1.20854 40.7247 2.69393 40.7247H32.0906C31.8612 40.2602 31.8068 39.7358 31.9418 39.2312C32.0197 38.941 32.1543 38.6763 32.3362 38.4492ZM38.6378 4.52383C38.6378 3.97448 39.0831 3.52904 39.6325 3.52904H40.6271C41.1766 3.52904 41.6218 3.97437 41.6218 4.52383V5.65121C41.6218 6.20056 41.1765 6.64589 40.6271 6.64589H39.6325C39.083 6.64589 38.6378 6.20056 38.6378 5.65121V4.52383ZM34.0124 4.52383C34.0124 3.97448 34.4578 3.52904 35.0071 3.52904H36.0019C36.5514 3.52904 36.9966 3.97437 36.9966 4.52383V5.65121C36.9966 6.20056 36.5513 6.64589 36.0019 6.64589H35.0071C34.4578 6.64589 34.0124 6.20056 34.0124 5.65121V4.52383ZM29.387 4.52383C29.387 3.97448 29.8324 3.52904 30.3817 3.52904H31.3764C31.9258 3.52904 32.3711 3.97437 32.3711 4.52383V5.65121C32.3711 6.20056 31.9258 6.64589 31.3764 6.64589H30.3817C29.8324 6.64589 29.387 6.20056 29.387 5.65121V4.52383Z"
      fill="white"
    />
    <path
      d="M47.9936 36.5521L47.6947 34.857C47.6544 34.6287 47.4369 34.4763 47.2084 34.5165L45.7009 34.7821C45.52 34.3575 45.2888 33.9597 45.0145 33.5956L45.9991 32.422C46.0707 32.3369 46.1056 32.2266 46.096 32.1156C46.0861 32.0046 46.0326 31.9022 45.9474 31.8306L44.629 30.7241C44.5437 30.6525 44.4332 30.6178 44.3223 30.6275C44.2113 30.6372 44.1089 30.6906 44.0373 30.7759L43.0536 31.9486C42.6498 31.7429 42.2178 31.5842 41.7653 31.4795V29.9488C41.7653 29.717 41.5773 29.5288 41.3455 29.5288H39.624C39.3923 29.5288 39.2042 29.717 39.2042 29.9488V31.4795C38.7514 31.5841 38.3199 31.7429 37.9159 31.9486L36.9319 30.776C36.7829 30.5984 36.5181 30.5753 36.3404 30.7242L35.0219 31.8306C34.9366 31.9022 34.8833 32.0046 34.8734 32.1156C34.8638 32.2266 34.8986 32.337 34.9701 32.4223L35.9549 33.5958C35.681 33.9597 35.4494 34.3577 35.2685 34.7822L33.761 34.5165C33.5331 34.4764 33.3151 34.6287 33.2746 34.857L32.9759 36.5521C32.9565 36.6618 32.9816 36.7745 33.0452 36.8658C33.1094 36.9571 33.2064 37.0192 33.3161 37.0385L34.8247 37.3044C34.8493 37.7718 34.9307 38.224 35.0617 38.6545L33.7358 39.4198C33.6393 39.4752 33.569 39.5671 33.5401 39.6746C33.5113 39.7822 33.5265 39.8967 33.582 39.9932L34.4426 41.4838C34.498 41.5803 34.5899 41.6506 34.6974 41.6794C34.7332 41.689 34.7696 41.6937 34.8061 41.6937C34.8791 41.6937 34.9515 41.6747 35.016 41.6374L36.3429 40.8712C36.655 41.2056 37.0073 41.5019 37.3922 41.7524L36.8683 43.1919C36.8303 43.2966 36.8352 43.412 36.8823 43.5129C36.9294 43.6139 37.0146 43.6919 37.1192 43.7299L38.7363 44.3184C38.7827 44.3354 38.8314 44.344 38.88 44.344C38.9406 44.344 39.0015 44.3309 39.0577 44.3046C39.1586 44.2576 39.2364 44.1724 39.2745 44.0677L39.7983 42.6282C40.023 42.6554 40.2516 42.6695 40.4835 42.6695C40.7154 42.6695 40.944 42.6552 41.1686 42.6282L41.6926 44.0677C41.7305 44.1724 41.8087 44.2576 41.9094 44.3046C41.9654 44.3308 42.0261 44.344 42.0871 44.344C42.1355 44.344 42.1842 44.3356 42.2306 44.3184L43.848 43.7299C43.9524 43.6919 44.0377 43.6136 44.0847 43.5129C44.1317 43.412 44.1368 43.2966 44.0987 43.1919L43.5747 41.7526C43.9594 41.5021 44.3117 41.2056 44.6241 40.8715L45.951 41.6377C46.0154 41.6747 46.0878 41.6939 46.1609 41.6939C46.1972 41.6939 46.234 41.689 46.2696 41.6796C46.3771 41.6508 46.4688 41.5803 46.5244 41.484L47.385 39.9932C47.4405 39.8969 47.4557 39.7822 47.4269 39.6746C47.398 39.5674 47.3277 39.4755 47.2312 39.4198L45.9055 38.6548C46.0365 38.2241 46.1177 37.7719 46.1422 37.3046L47.6508 37.0386C47.7606 37.0193 47.858 36.9572 47.9217 36.8659C47.9879 36.7745 48.013 36.6618 47.9936 36.5521ZM40.4849 39.2458C39.2098 39.2458 38.1759 38.212 38.1759 36.9368C38.1759 35.6616 39.2099 34.6278 40.4849 34.6278C41.76 34.6278 42.7939 35.6616 42.7939 36.9368C42.7939 38.212 41.76 39.2458 40.4849 39.2458Z"
      fill="white"
    />
    <path
      d="M18.8254 25.0763C18.8254 24.5331 18.5071 24.0342 18.0143 23.8054L13.5045 21.7099L18.0145 19.6143C18.5071 19.3852 18.8254 18.8864 18.8254 18.3434V18.307C18.8254 17.8257 18.5832 17.384 18.1779 17.1257C17.9536 16.9825 17.6925 16.9067 17.4228 16.9067C17.2196 16.9067 17.0155 16.9514 16.833 17.0362L9.6229 20.3891C9.13036 20.6182 8.81226 21.117 8.81226 21.6599V21.7601C8.81226 22.3023 9.13025 22.8007 9.62302 23.0309L16.8338 26.3842C17.0202 26.4705 17.2188 26.5143 17.4238 26.5143C17.6911 26.5143 17.9515 26.4384 18.1779 26.2943C18.5835 26.0351 18.8256 25.5937 18.8256 25.113L18.8254 25.0763Z"
      fill="white"
    />
    <path
      d="M25.9394 13.4902C25.6764 13.1302 25.2534 12.9153 24.8077 12.9153H24.7718C24.1598 12.9153 23.6233 13.3068 23.4368 13.8887L18.6863 28.6079C18.5511 29.0329 18.6272 29.501 18.8899 29.8609C19.1529 30.2208 19.576 30.4358 20.0216 30.4358H20.0576C20.6694 30.4358 21.2056 30.0442 21.3918 29.4623L26.1417 14.7443C26.2782 14.3196 26.2025 13.8509 25.9394 13.4902Z"
      fill="white"
    />
    <path
      d="M35.206 20.3889L27.9958 17.036C27.8138 16.9514 27.6101 16.9067 27.4069 16.9067C27.1373 16.9067 26.876 16.9823 26.6519 17.1253C26.2459 17.384 26.0037 17.8256 26.0037 18.3069V18.3433C26.0037 18.8858 26.3218 19.3847 26.8149 19.6147L31.3247 21.7099L26.8148 23.8052C26.322 24.0341 26.0037 24.533 26.0037 25.0762V25.1129C26.0037 25.5935 26.2459 26.0349 26.6517 26.2943C26.8773 26.4381 27.1379 26.5141 27.4055 26.5141C27.6103 26.5141 27.8086 26.4704 27.9963 26.3837L35.2069 23.0305C35.6992 22.8008 36.0171 22.3023 36.0171 21.7601V21.6599C36.0167 21.1169 35.6986 20.6181 35.206 20.3889Z"
      fill="white"
    />
  </svg>
);
const cardTwo = (
  <svg
    width="48"
    height="45"
    viewBox="0 0 48 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.3362 38.4492C32.0874 38.2978 31.8707 38.0949 31.6985 37.8491C31.6189 37.7357 31.5517 37.6158 31.496 37.4919H3.23276V9.63404H41.5961V27.8242C42.4151 27.8982 43.1023 28.4361 43.3908 29.1727C43.6463 29.0327 43.931 28.9461 44.2302 28.9197C44.4327 28.9021 44.6337 28.9147 44.8287 28.9532V2.69404C44.8287 1.20854 43.6204 0 42.135 0H2.69393C1.20854 0 0 1.20854 0 2.69404V38.0308C0 39.5163 1.20854 40.7247 2.69393 40.7247H32.0906C31.8612 40.2602 31.8068 39.7358 31.9418 39.2312C32.0197 38.941 32.1543 38.6763 32.3362 38.4492ZM38.6378 4.52383C38.6378 3.97448 39.0831 3.52904 39.6325 3.52904H40.6271C41.1766 3.52904 41.6218 3.97437 41.6218 4.52383V5.65121C41.6218 6.20056 41.1765 6.64589 40.6271 6.64589H39.6325C39.083 6.64589 38.6378 6.20056 38.6378 5.65121V4.52383ZM34.0124 4.52383C34.0124 3.97448 34.4578 3.52904 35.0071 3.52904H36.0019C36.5514 3.52904 36.9966 3.97437 36.9966 4.52383V5.65121C36.9966 6.20056 36.5513 6.64589 36.0019 6.64589H35.0071C34.4578 6.64589 34.0124 6.20056 34.0124 5.65121V4.52383ZM29.387 4.52383C29.387 3.97448 29.8324 3.52904 30.3817 3.52904H31.3764C31.9258 3.52904 32.3711 3.97437 32.3711 4.52383V5.65121C32.3711 6.20056 31.9258 6.64589 31.3764 6.64589H30.3817C29.8324 6.64589 29.387 6.20056 29.387 5.65121V4.52383Z"
      fill="white"
    />
    <path
      d="M47.9936 36.5521L47.6947 34.857C47.6544 34.6287 47.4369 34.4763 47.2084 34.5165L45.7009 34.7821C45.52 34.3575 45.2888 33.9597 45.0145 33.5956L45.9991 32.422C46.0707 32.3369 46.1056 32.2266 46.096 32.1156C46.0861 32.0046 46.0326 31.9022 45.9474 31.8306L44.629 30.7241C44.5437 30.6525 44.4332 30.6178 44.3223 30.6275C44.2113 30.6372 44.1089 30.6906 44.0373 30.7759L43.0536 31.9486C42.6498 31.7429 42.2178 31.5842 41.7653 31.4795V29.9488C41.7653 29.717 41.5773 29.5288 41.3455 29.5288H39.624C39.3923 29.5288 39.2042 29.717 39.2042 29.9488V31.4795C38.7514 31.5841 38.3199 31.7429 37.9159 31.9486L36.9319 30.776C36.7829 30.5984 36.5181 30.5753 36.3404 30.7242L35.0219 31.8306C34.9366 31.9022 34.8833 32.0046 34.8734 32.1156C34.8638 32.2266 34.8986 32.337 34.9701 32.4223L35.9549 33.5958C35.681 33.9597 35.4494 34.3577 35.2685 34.7822L33.761 34.5165C33.5331 34.4764 33.3151 34.6287 33.2746 34.857L32.9759 36.5521C32.9565 36.6618 32.9816 36.7745 33.0452 36.8658C33.1094 36.9571 33.2064 37.0192 33.3161 37.0385L34.8247 37.3044C34.8493 37.7718 34.9307 38.224 35.0617 38.6545L33.7358 39.4198C33.6393 39.4752 33.569 39.5671 33.5401 39.6746C33.5113 39.7822 33.5265 39.8967 33.582 39.9932L34.4426 41.4838C34.498 41.5803 34.5899 41.6506 34.6974 41.6794C34.7332 41.689 34.7696 41.6937 34.8061 41.6937C34.8791 41.6937 34.9515 41.6747 35.016 41.6374L36.3429 40.8712C36.655 41.2056 37.0073 41.5019 37.3922 41.7524L36.8683 43.1919C36.8303 43.2966 36.8352 43.412 36.8823 43.5129C36.9294 43.6139 37.0146 43.6919 37.1192 43.7299L38.7363 44.3184C38.7827 44.3354 38.8314 44.344 38.88 44.344C38.9406 44.344 39.0015 44.3309 39.0577 44.3046C39.1586 44.2576 39.2364 44.1724 39.2745 44.0677L39.7983 42.6282C40.023 42.6554 40.2516 42.6695 40.4835 42.6695C40.7154 42.6695 40.944 42.6552 41.1686 42.6282L41.6926 44.0677C41.7305 44.1724 41.8087 44.2576 41.9094 44.3046C41.9654 44.3308 42.0261 44.344 42.0871 44.344C42.1355 44.344 42.1842 44.3356 42.2306 44.3184L43.848 43.7299C43.9524 43.6919 44.0377 43.6136 44.0847 43.5129C44.1317 43.412 44.1368 43.2966 44.0987 43.1919L43.5747 41.7526C43.9594 41.5021 44.3117 41.2056 44.6241 40.8715L45.951 41.6377C46.0154 41.6747 46.0878 41.6939 46.1609 41.6939C46.1972 41.6939 46.234 41.689 46.2696 41.6796C46.3771 41.6508 46.4688 41.5803 46.5244 41.484L47.385 39.9932C47.4405 39.8969 47.4557 39.7822 47.4269 39.6746C47.398 39.5674 47.3277 39.4755 47.2312 39.4198L45.9055 38.6548C46.0365 38.2241 46.1177 37.7719 46.1422 37.3046L47.6508 37.0386C47.7606 37.0193 47.858 36.9572 47.9217 36.8659C47.9879 36.7745 48.013 36.6618 47.9936 36.5521ZM40.4849 39.2458C39.2098 39.2458 38.1759 38.212 38.1759 36.9368C38.1759 35.6616 39.2099 34.6278 40.4849 34.6278C41.76 34.6278 42.7939 35.6616 42.7939 36.9368C42.7939 38.212 41.76 39.2458 40.4849 39.2458Z"
      fill="white"
    />
    <path
      d="M18.8254 25.0763C18.8254 24.5331 18.5071 24.0342 18.0143 23.8054L13.5045 21.7099L18.0145 19.6143C18.5071 19.3852 18.8254 18.8864 18.8254 18.3434V18.307C18.8254 17.8257 18.5832 17.384 18.1779 17.1257C17.9536 16.9825 17.6925 16.9067 17.4228 16.9067C17.2196 16.9067 17.0155 16.9514 16.833 17.0362L9.6229 20.3891C9.13036 20.6182 8.81226 21.117 8.81226 21.6599V21.7601C8.81226 22.3023 9.13025 22.8007 9.62302 23.0309L16.8338 26.3842C17.0202 26.4705 17.2188 26.5143 17.4238 26.5143C17.6911 26.5143 17.9515 26.4384 18.1779 26.2943C18.5835 26.0351 18.8256 25.5937 18.8256 25.113L18.8254 25.0763Z"
      fill="white"
    />
    <path
      d="M25.9394 13.4902C25.6764 13.1302 25.2534 12.9153 24.8077 12.9153H24.7718C24.1598 12.9153 23.6233 13.3068 23.4368 13.8887L18.6863 28.6079C18.5511 29.0329 18.6272 29.501 18.8899 29.8609C19.1529 30.2208 19.576 30.4358 20.0216 30.4358H20.0576C20.6694 30.4358 21.2056 30.0442 21.3918 29.4623L26.1417 14.7443C26.2782 14.3196 26.2025 13.8509 25.9394 13.4902Z"
      fill="white"
    />
    <path
      d="M35.206 20.3889L27.9958 17.036C27.8138 16.9514 27.6101 16.9067 27.4069 16.9067C27.1373 16.9067 26.876 16.9823 26.6519 17.1253C26.2459 17.384 26.0037 17.8256 26.0037 18.3069V18.3433C26.0037 18.8858 26.3218 19.3847 26.8149 19.6147L31.3247 21.7099L26.8148 23.8052C26.322 24.0341 26.0037 24.533 26.0037 25.0762V25.1129C26.0037 25.5935 26.2459 26.0349 26.6517 26.2943C26.8773 26.4381 27.1379 26.5141 27.4055 26.5141C27.6103 26.5141 27.8086 26.4704 27.9963 26.3837L35.2069 23.0305C35.6992 22.8008 36.0171 22.3023 36.0171 21.7601V21.6599C36.0167 21.1169 35.6986 20.6181 35.206 20.3889Z"
      fill="white"
    />
  </svg>
);
const cardThree = (
  <svg
    width="39"
    height="31"
    viewBox="0 0 39 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.5529 18.5063C22.9067 18.4425 23.2655 18.4105 23.625 18.4106C24.381 18.4106 25.1044 18.5505 25.7708 18.8057L28.422 15.0356L28.5232 15.093C27.5404 13.9947 26.9979 12.572 27 11.0981C27 7.78446 29.6863 5.09814 33 5.09814C36.3137 5.09814 39 7.78446 39 11.0981C39 14.4118 36.3137 17.0981 33 17.0981C32.3115 17.0981 31.65 16.9821 31.0341 16.7687L28.3509 20.7133C29.1784 21.7679 29.6271 23.0702 29.625 24.4106C29.625 27.7243 26.9387 30.4106 23.625 30.4106C20.3113 30.4106 17.625 27.7243 17.625 24.4106C17.625 22.5793 18.4455 20.9396 19.7389 19.839L15.8456 12.099C15.444 12.1818 15.035 12.2234 14.625 12.2231C14.1087 12.2235 13.5944 12.1574 13.095 12.0263L10.3358 16.8881C11.4769 17.9803 12.1875 19.5188 12.1875 21.2231C12.1875 24.5368 9.50119 27.2231 6.1875 27.2231C2.87381 27.2231 0.1875 24.5368 0.1875 21.2231C0.1875 17.9095 2.87381 15.2231 6.1875 15.2231C6.68531 15.2231 7.16887 15.2837 7.63125 15.3979L10.4079 10.491C9.30713 9.40371 8.625 7.89321 8.625 6.22314C8.625 2.90946 11.3113 0.223145 14.625 0.223145C17.9387 0.223145 20.625 2.90946 20.625 6.22314C20.625 8.01621 19.8384 9.62552 18.5917 10.725L22.5529 18.5063ZM33 14.0981C34.6569 14.0981 36 12.7551 36 11.0981C36 9.44121 34.6569 8.09814 33 8.09814C31.3431 8.09814 30 9.44121 30 11.0981C30 12.7551 31.3431 14.0981 33 14.0981ZM6.1875 24.2231C7.84444 24.2231 9.1875 22.8801 9.1875 21.2231C9.1875 19.5662 7.84444 18.2231 6.1875 18.2231C4.53056 18.2231 3.1875 19.5662 3.1875 21.2231C3.1875 22.8801 4.53056 24.2231 6.1875 24.2231ZM14.625 9.22314C16.2819 9.22314 17.625 7.88008 17.625 6.22314C17.625 4.56621 16.2819 3.22314 14.625 3.22314C12.9681 3.22314 11.625 4.56621 11.625 6.22314C11.625 7.88008 12.9681 9.22314 14.625 9.22314ZM23.625 27.4106C25.2819 27.4106 26.625 26.0676 26.625 24.4106C26.625 22.7537 25.2819 21.4106 23.625 21.4106C21.9681 21.4106 20.625 22.7537 20.625 24.4106C20.625 26.0676 21.9681 27.4106 23.625 27.4106Z"
      fill="white"
    />
  </svg>
);
const cardFour = (
  <svg
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.500061 6.22339C0.495074 5.11911 0.794936 4.03488 1.36662 3.0901C1.93831 2.14531 2.75965 1.37662 3.74018 0.868684C4.72071 0.360746 5.82241 0.133263 6.92393 0.211287C8.02546 0.289311 9.08409 0.669814 9.98323 1.3109C10.8824 1.95198 11.5872 2.82876 12.02 3.8447C12.4528 4.86064 12.5968 5.97631 12.4362 7.06886C12.2756 8.1614 11.8166 9.18844 11.1098 10.0369C10.4029 10.8853 9.47565 11.5222 8.43006 11.8774C8.46449 11.9902 8.48793 12.1061 8.50006 12.2234V22.2234C8.50006 22.7538 8.28935 23.2625 7.91427 23.6376C7.5392 24.0127 7.03049 24.2234 6.50006 24.2234C5.96963 24.2234 5.46092 24.0127 5.08585 23.6376C4.71077 23.2625 4.50006 22.7538 4.50006 22.2234V12.2234C4.51219 12.1061 4.53563 11.9902 4.57006 11.8774C3.38584 11.4786 2.35637 10.7187 1.62634 9.70453C0.896311 8.69038 0.502431 7.47296 0.500061 6.22339ZM36.4301 28.5694C36.4645 28.4566 36.4879 28.3407 36.5001 28.2234V20.2234C36.5001 19.693 36.2893 19.1842 35.9143 18.8092C35.5392 18.4341 35.0305 18.2234 34.5001 18.2234C33.9696 18.2234 33.4609 18.4341 33.0858 18.8092C32.7108 19.1842 32.5001 19.693 32.5001 20.2234V28.2234C32.5122 28.3407 32.5356 28.4566 32.5701 28.5694C31.2239 29.0267 30.0838 29.9472 29.3531 31.1668C28.6224 32.3864 28.3486 33.8259 28.5803 35.2286C28.8121 36.6313 29.5344 37.9062 30.6186 38.8259C31.7028 39.7456 33.0783 40.2505 34.5001 40.2505C35.9218 40.2505 37.2974 39.7456 38.3815 38.8259C39.4657 37.9062 40.188 36.6313 40.4198 35.2286C40.6516 33.8259 40.3777 32.3864 39.647 31.1668C38.9163 29.9472 37.7762 29.0267 36.4301 28.5694ZM38.5001 0.223388H30.5001C29.9696 0.223388 29.4609 0.434102 29.0858 0.809175C28.7108 1.18425 28.5001 1.69296 28.5001 2.22339V4.22339H20.5001C19.9696 4.22339 19.4609 4.4341 19.0858 4.80918C18.7108 5.18425 18.5001 5.69296 18.5001 6.22339C18.5001 6.75382 18.7108 7.26253 19.0858 7.6376C19.4609 8.01267 19.9696 8.22339 20.5001 8.22339H28.5001V10.2234C28.5001 10.7538 28.7108 11.2625 29.0858 11.6376C29.4609 12.0127 29.9696 12.2234 30.5001 12.2234H38.5001C39.0305 12.2234 39.5392 12.0127 39.9143 11.6376C40.2893 11.2625 40.5001 10.7538 40.5001 10.2234V2.22339C40.5001 1.69296 40.2893 1.18425 39.9143 0.809175C39.5392 0.434102 39.0305 0.223388 38.5001 0.223388ZM20.5001 32.2234H12.5001V30.2234C12.5001 29.693 12.2893 29.1842 11.9143 28.8092C11.5392 28.4341 11.0305 28.2234 10.5001 28.2234H2.50006C1.96963 28.2234 1.46092 28.4341 1.08585 28.8092C0.710775 29.1842 0.500061 29.693 0.500061 30.2234V38.2234C0.500061 38.7538 0.710775 39.2625 1.08585 39.6376C1.46092 40.0127 1.96963 40.2234 2.50006 40.2234H10.5001C11.0305 40.2234 11.5392 40.0127 11.9143 39.6376C12.2893 39.2625 12.5001 38.7538 12.5001 38.2234V36.2234H20.5001C21.0305 36.2234 21.5392 36.0127 21.9143 35.6376C22.2893 35.2625 22.5001 34.7538 22.5001 34.2234C22.5001 33.693 22.2893 33.1842 21.9143 32.8092C21.5392 32.4341 21.0305 32.2234 20.5001 32.2234Z"
      fill="white"
    />
  </svg>
);
const cardFive = (
  <svg
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.5 0.223145C9.472 0.223145 0.5 9.19514 0.5 20.2231V28.5091C0.5 30.5571 2.294 32.2231 4.5 32.2231H6.5C7.03043 32.2231 7.53914 32.0124 7.91421 31.6374C8.28929 31.2623 8.5 30.7536 8.5 30.2231V19.9371C8.5 19.4067 8.28929 18.898 7.91421 18.5229C7.53914 18.1479 7.03043 17.9371 6.5 17.9371H4.684C5.796 10.1971 12.456 4.22314 20.5 4.22314C28.544 4.22314 35.204 10.1971 36.316 17.9371H34.5C33.9696 17.9371 33.4609 18.1479 33.0858 18.5229C32.7107 18.898 32.5 19.4067 32.5 19.9371V32.2231C32.5 34.4291 30.706 36.2231 28.5 36.2231H24.5V34.2231H16.5V40.2231H28.5C32.912 40.2231 36.5 36.6351 36.5 32.2231C38.706 32.2231 40.5 30.5571 40.5 28.5091V20.2231C40.5 9.19514 31.528 0.223145 20.5 0.223145Z"
      fill="white"
    />
  </svg>
);
