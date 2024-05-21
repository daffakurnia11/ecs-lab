import Button from "@/components/Button";
import Typography from "@/components/Typography";
import Image from "next/image";
import React from "react";

export default function Interest() {
  return (
    <div className="container mx-auto py-10 px-10">
      <Typography.Heading
        level={2}
        as="h2"
        className="text-secondary-900"
        weight="font-bold"
      >
        OUR INTEREST
      </Typography.Heading>
      <Typography.Paragraph
        className="text-uppercase text-secondary-900 -mt-2"
        weight="font-bold"
      >
        This is our field of study
      </Typography.Paragraph>
      <div className="flex justify-center flex-wrap gap-3 mt-9 mb-10 place-content-center">
        <div className="relative h-[450px] w-[300px] rounded-3xl overflow-hidden">
          <Image
            src={"/img/es-bg.png"}
            alt="Embedded System Background"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-primary-700/70 to-gray-700/50">
            <div className="absolute bottom-0 p-6">
              <Typography.Heading
                level={5}
                as="h3"
                weight="font-bold"
                className="text-white"
              >
                Embedded System
              </Typography.Heading>
              <Typography.Paragraph
                size="base"
                weight="font-normal"
                className="text-white !text-sm"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                bibendum vulputate massa ullamcorper volutpat. Sed id libero
                ipsum. Nulla egestas dignissim convallis..
              </Typography.Paragraph>
              <Button.Primary size="sm" className="mt-3">
                Explore More
              </Button.Primary>
            </div>
          </div>
        </div>
        <div className="relative h-[450px] w-[300px] rounded-3xl overflow-hidden">
          <Image
            src={"/img/iot-bg.png"}
            alt="Internet of Things Background"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-primary-700/70 to-gray-700/50">
            <div className="absolute bottom-0 p-6">
              <Typography.Heading
                level={5}
                as="h3"
                weight="font-bold"
                className="text-white"
              >
                Internet of Things
              </Typography.Heading>
              <Typography.Paragraph
                size="base"
                weight="font-normal"
                className="text-white !text-sm"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                bibendum vulputate massa ullamcorper volutpat. Sed id libero
                ipsum. Nulla egestas dignissim convallis..
              </Typography.Paragraph>
              <Button.Primary size="sm" className="mt-3">
                Explore More
              </Button.Primary>
            </div>
          </div>
        </div>
        <div className="relative h-[450px] w-[300px] rounded-3xl overflow-hidden">
          <Image
            src={"/img/ai-bg.png"}
            alt="Artificial Intelligence Background"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-primary-700/70 to-gray-700/50">
            <div className="absolute bottom-0 p-6">
              <Typography.Heading
                level={5}
                as="h3"
                weight="font-bold"
                className="text-white"
              >
                Artificial Intelligence
              </Typography.Heading>
              <Typography.Paragraph
                size="base"
                weight="font-normal"
                className="text-white !text-sm"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                bibendum vulputate massa ullamcorper volutpat. Sed id libero
                ipsum. Nulla egestas dignissim convallis..
              </Typography.Paragraph>
              <Button.Primary size="sm" className="mt-3">
                Explore More
              </Button.Primary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
