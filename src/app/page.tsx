import Header from "@/components/header";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import {
  HoverImageLink,
  SectionHeading,
  SlideIn,
  TextReveal,
  Transition,
} from "@/components/ui";

import { UserObject } from "@/utils/interfaces";
import { ContactUs } from "@/components/contact-us";
import Link from "next/link";
import { Hero } from "@/components/hero";

import { userData } from "../utils/userData";

export default async function Home() {
  // Substituindo a chamada de API pelos dados locais
  const user = userData.user;

  if (!user) return null;

  const {
    about,
    testimonials,
    services,
    projects,
    social_handles,
    email,
  } = user;
  return (
    <main className="relative">
      <Transition className="fixed md:top-8 top-6 md:left-8 left-6 z-30 hover:text-white/80 text-white/40">
        <Link href={"/"}>
          <TextReveal className="font-semibold ">Luan Pizzo</TextReveal>
        </Link>
      </Transition>
      <Header social={social_handles} />
      <Hero about={about} />
      
      <section className="px-2 py-20 relative" id="services">
        <span className="blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10" />
        <SectionHeading className="md:pl-16 overflow-hidden">
          <SlideIn className="text-white/40">Como Eu posso te ajudar hoje?</SlideIn> <br />
          <SlideIn>Meus Serviços</SlideIn>
        </SectionHeading>
        <div className="mx-auto pt-10">
          {services.map((service) => (
            <Transition key={service._id}>
              <HoverImageLink
                heading={service.name}
                href=""
                price={service.charge}
                imgSrc={service.image.url}
                subheading={service.desc}
              />
            </Transition>
          ))}
        </div>
        <Transition className="flex items-center py-10 md:hidden">
          <div className="p-4 rounded-full border border-white/50">
            <span>Tenho interesse</span>
          </div>
        </Transition>
      </section>
      {/* ===PROJECTS SECTION=== */}
      <Projects data={projects} />
      {/* ===TESTIMONIALS SECTION=== */}
      <section className="py-20 relative" id="testimonials">
        <span className="blob size-1/2 absolute -top-20 left-0 blur-[100px] -z-10" />
        <SectionHeading className="md:pl-28">
          <SlideIn className="text-white/40">Oque</SlideIn> <br />
          <SlideIn className="">Os nossos clientes dizem</SlideIn>
        </SectionHeading>
        <Testimonials data={testimonials} speed="normal" pauseOnHover />
        <Testimonials
          data={testimonials}
          pauseOnHover
          speed="normal"
          direction="left"
        />
      </section>

      {/* ===CONTACT US=== */}
      <div
        className="rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden"
        id="contact"
      >
        <ContactUs email={email} about={about} social_handle={social_handles} />
      </div>
    </main>
  );
}
