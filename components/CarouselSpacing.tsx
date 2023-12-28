"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type Category } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type CategoryProps = {
  data: Category[];
};

export function CarouselSpacing(data: CategoryProps) {
  // const {
  //   isLoading,
  //   error,
  //   data: billboard,
  // } = useQuery({
  //   queryKey: ["billboard"],
  //   queryFn: async () => {
  //     const { data } = await axios.get(`/api/billboards/edit/`);
  //     return data;
  //   },
  // });

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="max-sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
          >
            <Card>
              <CardContent className="flex aspect-square items-center justify-center">
                <Image
                  src={
                    "data:image/jpeg;base64,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"
                  }
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "5px",
                  }}
                  objectFit="contain"
                  alt="Image"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
