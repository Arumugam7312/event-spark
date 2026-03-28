import heroWedding from "@/assets/hero-wedding.jpg";
import serviceWedding from "@/assets/service-wedding.jpg";
import serviceBirthday from "@/assets/service-birthday.jpg";
import serviceCatering from "@/assets/service-catering.jpg";
import serviceCustom from "@/assets/service-custom.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export const images: Record<string, string> = {
  "hero-wedding": heroWedding,
  "service-wedding": serviceWedding,
  "service-birthday": serviceBirthday,
  "service-catering": serviceCatering,
  "service-custom": serviceCustom,
  "gallery-1": gallery1,
  "gallery-2": gallery2,
  "gallery-3": gallery3,
  "gallery-4": gallery4,
  "gallery-5": gallery5,
  "gallery-6": gallery6,
};

export function getImage(key: string): string {
  return images[key] || images["hero-wedding"];
}
