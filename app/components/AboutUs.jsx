import Image from "next/image";
import React from "react";
import image1 from '../../public/assets/image-1.jpg'
import image2 from '../../public/assets/image-2.jpg'
import image3 from '../../public/assets/image-3.jpg'
import Container from "./Container";
import { appName, date } from "../config/Constant";
const AboutUs = () => {
    return (
        <Container >
            <div className="flex flex-wrap items-center justify-between -mx-4">
                <div className="w-full px-4 lg:w-6/12">
                    <div className="flex items-center -mx-3 sm:-mx-4">
                        <div className="w-full px-3 sm:px-4 xl:w-1/2">
                            <div className="py-3 sm:py-4">
                                <Image
                                    width={"500"}
                                    height={"500"}
                                    src={image1}
                                    alt=""
                                    className="w-full rounded-2xl"
                                    loading="lazy"
                                    placeholder="blur"
                                />
                            </div>
                            <div className="py-3 sm:py-4">
                                <Image
                                    width={"500"}
                                    height={"500"}
                                    src={image2}
                                    alt=""
                                    className="w-full rounded-2xl"
                                    loading="lazy"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:px-4 xl:w-1/2">
                            <div className="relative z-10 my-4">
                                <Image
                                    width={"500"}
                                    height={"500"}
                                    src={image3}
                                    alt=""
                                    className="w-full rounded-2xl"
                                    loading="lazy"
                                    placeholder="blur"
                                />
                                <span className="hidden sm:block absolute -right-7 -bottom-7 z-[-1]">
                                    <svg
                                        width={134}
                                        height={106}
                                        viewBox="0 0 134 106"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="1.66667"
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 31 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3334"
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 60.3334 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 117.667 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 103 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy={104}
                                            r="1.66667"
                                            transform="rotate(-90 132 104)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="89.3333"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 89.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="89.3333"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 89.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy="89.3333"
                                            r="1.66667"
                                            transform="rotate(-90 31 89.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="89.3333"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 89.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 89.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 89.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 89.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 89.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 103 89.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 132 89.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="74.6673"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 74.6673)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="31.0003"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 31.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="31.0003"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 31.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 31 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy="31.0003"
                                            r="1.66667"
                                            transform="rotate(-90 31 31.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="31.0003"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 31.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 30.9998)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 30.9998)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 30.9998)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 30.9998)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 103 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 103 30.9998)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 132 74.6668)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 132 30.9998)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 31 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 31 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 103 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 103 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 132 60.0003)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 132 16.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="45.3333"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 45.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="45.3333"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 45.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy="45.3333"
                                            r="1.66667"
                                            transform="rotate(-90 31 45.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={31}
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 31 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="45.3333"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 45.3333)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 45.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 45.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 45.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 45.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 103 45.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={103}
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 103 1.66683)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 132 45.3338)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx={132}
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 132 1.66683)"
                                            fill="#3056D3"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center sm:text-left w-full px-4 lg:w-1/2 xl:w-5/12">
                    <div className="mt-10 lg:mt-0">
                        <span className="block mb-4 text-lg font-semibold text-indigo-600">
                            About the event.
                        </span>
                        <h2 className="mb-5 text-3xl font-bold text-black sm:text-[40px]/[48px]">
                            Who Are We
                        </h2>
                        <p className="mb-5 text-base text-body-color">
                            {appName} is a premier blockchain conference network that brings together influential figures and industry experts to reshape the future of finance.
                        </p>
                        <p className="mb-8 text-base text-body-color">
                            The upcoming edition of {appName} is scheduled to take place in Dubai on {date},
                            featuring the participation of the world&apos;s leading crypto companies and blockchain entrepreneurs.
                        </p>
                        <p className="mb-8 text-base text-body-color">
                            As Dubai emerges as a global crypto hub, {appName} serves as the gathering point for the worldwide community interested in blockchain and cryptocurrency,
                            offering engaging discussions on cutting-edge financial technologies.
                        </p>
                        <p className="mb-8 text-base text-body-color">
                            Attendees can expect extensive networking opportunities and participation from over 30 countries, making it a truly global event.
                        </p>
                        <a
                            href="javascript:void(0)"
                            className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-indigo-600 hover:bg-opacity-90"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;
