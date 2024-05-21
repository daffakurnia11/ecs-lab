import Button from "@/components/Button";
import Typography from "@/components/Typography";
import Image from "next/image";
import React from "react";

export default function LatestEvent() {
  return (
    <div className="container mx-auto my-16 px-10">
      <Typography.Heading
        level={2}
        as="h2"
        className="uppercase text-secondary-900 text-end"
        weight="font-bold"
      >
        LATEST EVENT
      </Typography.Heading>
      <Typography.Paragraph
        className="uppercase text-secondary-900 text-end -mt-2"
        weight="font-bold"
      >
        LET&apos;S SEE WHAT ECS LABORATORY HAS BEEN UP TO
      </Typography.Paragraph>
      <div className="grid lg:grid-cols-2 gap-6 justify-center items-center sm:px-16 px-8 mt-8">
        <div className="flex flex-row items-center justify-center">
          <div className="w-full sm:max-w-[300px] max-w-[200px]">
            <Image
              src={"/img/event-epta.png"}
              alt="EPTA Event by ECS"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div>
          <Typography.Heading as="h4" level={4} weight="font-bold">
            EPTA (ECS & PROGRAMMING TRAINING)
          </Typography.Heading>
          <Typography.Paragraph size="lg" className="text-secondary-900 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            bibendum vulputate massa ullamcorper volutpat. Sed id libero ipsum.
            Nulla egestas dignissim convallis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean bibendum vulputate massa
            ullamcorper volutpat. Sed id libero ipsum. Nulla egestas dignissim
            convallis..
          </Typography.Paragraph>
          <Button.Primary size="lg">Explore More</Button.Primary>
        </div>
      </div>
    </div>
  );
}
