import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "../../app/img/resume/img1.jpg";
import img2 from "../../app/img/resume/img2.jpg";
import img3 from "../../app/img/resume/img3.jpg";
import img4 from "../../app/img/resume/img4.jpg";
import img5 from "../../app/img/resume/img5.jpg";
import img6 from "../../app/img/resume/img6.jpg";
import img7 from "../../app/img/resume/img7.jpg";
import Image from "next/image";

export function CarouselSize() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full h-full"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={image}
                    alt={`Carousel image ${index + 1}`}
                    className="h-[300px] object-cover md:object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
