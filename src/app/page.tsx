import { Metadata } from "next";
import Header from "./_component/Header";

export const metadata: Metadata = {
  title: "Home - Embedded & Cyber-Physical System",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function Home() {
  return <Header />;
}
