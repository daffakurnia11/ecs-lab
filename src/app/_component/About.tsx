import Button from "@/components/Button";
import Typography from "@/components/Typography";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="relative">
      <Image
        src={"/waves/about-top.svg"}
        alt="About Top Waves"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="absolute top-0 left-0 right-0 -translate-y-1/2"
      />
      <Image
        src={"/waves/about-bottom.svg"}
        alt="About Bottom Waves"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="absolute bottom-0 left-0 right-0"
      />
      <div className="bg-secondary-900 ">
        <div className="container mx-auto pt-20 pb-40">
          <Typography.Paragraph
            className="!text-xl text-primary-700 text-center mb-2.5"
            weight="font-bold"
          >
            Let&apos;s Get To Know
          </Typography.Paragraph>
          <Typography.Heading
            level={2}
            as="h2"
            className="text-primary-700 text-center"
            weight="font-bold"
          >
            ABOUT US
          </Typography.Heading>
          <div className="grid sm:grid-cols-2 gap-6 justify-center items-center sm:px-16 px-8">
            <div className="flex flex-row items-center justify-center">
              <div className="w-full sm:max-w-[350px] max-w-[200px]">
                <Image
                  src={"/img/logo-icon.png"}
                  alt="ECS White Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div>
              <Typography.Paragraph size="lg" className="text-white mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                bibendum vulputate massa ullamcorper volutpat. Sed id libero
                ipsum. Nulla egestas dignissim convallis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aenean bibendum vulputate
                massa ullamcorper volutpat. Sed id libero ipsum. Nulla egestas
                dignissim convallis..
              </Typography.Paragraph>
              <Button.Primary size="lg">Meet Our Team</Button.Primary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
