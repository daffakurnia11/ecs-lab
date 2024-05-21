import React from "react";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import Image from "next/image";

export default function Header() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/img/jumbotron-bg.png')" }}
    >
      <div
        style={{ content: "" }}
        className="absolute w-full h-full top-0 left-0 bg-primary-700/40"
      ></div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center px-5">
        <div className="sm:w-[200px] w-[130px] sm:h-[180px] h-[120px] sm:me-12 me-3 sm:mb-12 mb-6">
          <Image
            src={"/img/logo-white.png"}
            alt="ECS White Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <Typography.Heading
          as="h1"
          level={1}
          weight="font-bold"
          className="text-white sm:!text-7xl text-center sm:!leading-[58px] !leading-[48px]"
        >
          EMBEDDED & <br />
          CYBER-PHYSICAL SYSTEM
          <br />
          <span className="block mt-2 sm:text-5xl text-3xl font-bold">
            LABORATORY
          </span>
        </Typography.Heading>
        <div className="flex sm:flex-row flex-col mt-8 sm:gap-5 gap-3">
          <Button.Primary size="lg">Learn More</Button.Primary>
          <Button.Primary size="lg" type="outline">
            Latest Event
          </Button.Primary>
        </div>
      </div>
    </div>
  );
}
