import React from "react";
import Typography from "../Typography";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-secondary-900 relative">
      <div className="container mx-auto flex flex-col gap-10 justify-start md:grid md:grid-cols-12 md:items-center py-16 relative z-10 px-5">
        <div className="md:col-span-6">
          <div className="sm:w-[200px] w-[140px] sm:h-[112.68px] h-[78.87px]">
            <Image
              src={"/img/logo.png"}
              alt="ECS Full Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <Typography.Paragraph size="lg" className="text-primary-700 my-8">
            Departemen Teknik Fisika
            <br />
            Fakultas Teknologi Industri dan Rekayasa Sistem
            <br />
            Institut Teknologi Sepuluh Nopember
            <br />
            Surabaya - Jawa Timur
          </Typography.Paragraph>
          <div className="flex gap-5">
            <Image
              src={"/icon/linkedin.svg"}
              alt="Linkedin Logo"
              width={24}
              height={24}
            />
            <Image
              src={"/icon/instagram.svg"}
              alt="Instagram Logo"
              width={24}
              height={24}
            />
            <Image
              src={"/icon/google.svg"}
              alt="Google Logo"
              width={24}
              height={24}
            />
            <Image
              src={"/icon/whatsapp.svg"}
              alt="Whatsapp Logo"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="flex flex-col gap-5">
            <Typography.Paragraph className="text-xl text-white">
              Home
            </Typography.Paragraph>
            <Typography.Paragraph className="text-xl text-white">
              About Us
            </Typography.Paragraph>
            <Typography.Paragraph className="text-xl text-white">
              Interest
            </Typography.Paragraph>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="flex flex-col gap-5">
            <Typography.Paragraph className="text-xl text-white">
              Internet of Things
            </Typography.Paragraph>
            <Typography.Paragraph className="text-xl text-white">
              Artificical Inteligence
            </Typography.Paragraph>
            <Typography.Paragraph className="text-xl text-white">
              Embedded System
            </Typography.Paragraph>
          </div>
        </div>
      </div>
      <div className="absolute top-0">
        <Image
          src="/waves/footer.svg"
          alt="waves"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
