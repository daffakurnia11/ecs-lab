import Button from "@/components/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-x-3 p-24 bg-gray-500">
      <div className="flex flex-col gap-3 items-center">
        <Button.Primary type="default" size="lg">
          Button
        </Button.Primary>
        <Button.Primary type="default" size="base">
          Button
        </Button.Primary>
        <Button.Primary type="default" size="sm">
          Button
        </Button.Primary>
        <Button.Primary type="default" size="lg" disabled>
          Button
        </Button.Primary>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <Button.Primary
          type="default"
          size="lg"
          prefix={<FaArrowLeft />}
          suffix={<FaArrowRight />}
        >
          Button
        </Button.Primary>
        <Button.Primary
          type="default"
          size="base"
          prefix={<FaArrowLeft />}
          suffix={<FaArrowRight />}
        >
          Button
        </Button.Primary>
        <Button.Primary
          type="default"
          size="sm"
          prefix={<FaArrowLeft />}
          suffix={<FaArrowRight />}
        >
          Button
        </Button.Primary>
        <Button.Primary
          type="default"
          size="lg"
          prefix={<FaArrowLeft />}
          suffix={<FaArrowRight />}
          disabled
        >
          Button
        </Button.Primary>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <Button.Primary type="outline" size="lg">
          Button
        </Button.Primary>
        <Button.Primary type="outline" size="base">
          Button
        </Button.Primary>
        <Button.Primary type="outline" size="sm">
          Button
        </Button.Primary>
        <Button.Primary type="outline" size="lg" disabled>
          Button
        </Button.Primary>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <Button.Primary
          type="outline"
          size="lg"
          prefix={<FaArrowLeft />}
          suffix={<FaArrowRight />}
        >
          Button
        </Button.Primary>
        <Button.Primary
          type="outline"
          size="base"
          prefix={<FaArrowLeft />}
          suffix={<FaArrowRight />}
        >
          Button
        </Button.Primary>
        <Button.Primary
          type="outline"
          size="sm"
          prefix={<FaArrowLeft />}
          suffix={<FaArrowRight />}
        >
          Button
        </Button.Primary>
        <Button.Primary
          type="outline"
          size="lg"
          prefix={<FaArrowLeft />}
          suffix={<FaArrowRight />}
          disabled
        >
          Button
        </Button.Primary>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <Button.Primary type="text" size="lg">
          Button
        </Button.Primary>
        <Button.Primary type="text" size="base">
          Button
        </Button.Primary>
        <Button.Primary type="text" size="sm">
          Button
        </Button.Primary>
        <Button.Primary type="text" size="lg" disabled>
          Button
        </Button.Primary>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <Button.Primary
          type="text"
          size="lg"
          prefix={<FaArrowLeft />}
          suffix={<FaArrowRight />}
        >
          Button
        </Button.Primary>
        <Button.Primary
          type="text"
          size="base"
          prefix={<FaArrowLeft />}
          suffix={<FaArrowRight />}
        >
          Button
        </Button.Primary>
        <Button.Primary
          type="text"
          size="sm"
          prefix={<FaArrowLeft />}
          suffix={<FaArrowRight />}
        >
          Button
        </Button.Primary>
        <Button.Primary
          type="text"
          size="lg"
          prefix={<FaArrowLeft />}
          suffix={<FaArrowRight />}
          disabled
        >
          Button
        </Button.Primary>
      </div>
    </main>
  );
}
