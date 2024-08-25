'use client'
import { Navbar, Footer } from "@/components";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";



export default function Page() {
  return (
    <>
      <Navbar />
      <section className="p-8">
      <div className="mx-auto container">
        <img
          src={`https://www.material-tailwind.com/img/content2.jpg`}
          alt="team work"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
        <div className="flex flex-row gap-x-4 justify-between">
          <Typography
            variant="small"
            className="font-medium !text-blue-500"
          >
            #blog #post
          </Typography>
          <Typography
            variant="small"
            className="font-medium !text-gray-500"
          >
            25/08/2024
          </Typography>
        </div>
          <Typography
            variant="h2"
            color="blue-gray"
            className="font-black text-xl !leading-snug"
          >
            Training Programs
          </Typography>  
        <div className="flex flex-row gap-x-4 my-2 items-center">
          <ArrowUturnLeftIcon color="blue-gray" className="h-6 w-6"/>
          <Typography
            variant="h2"
            color="blue-gray"
            className="font-black text-4xl !leading-snug"
          >
            Advanced Firefighting Techniques Training...
          </Typography>
        </div>
        <Typography className="font-normal !text-gray-500">
          This is the paragraph where you can write more details about your
          product. Keep you user engaged by providing meaningful information.
          Remember that by this time, the user is curious, otherwise he wouldn&apos;t
          scroll to get here. Add a button if you want the user to see more. We
          are here to make life better.
          <br />
          <br />
          And now I look and look around and there•s so many Kanyes I&apos;ve been
          trying to figure out the bed design for the master bedroom at our
          Hidden Hills compound... and thank you for turning my personal jean
          jacket into a couture piece.
          <br />
          <br />
          Thank you Anna for the invite thank you to the whole Vogue team And I
          love you like Kanye loves Kanye Pand Pand Panda I&apos;ve been trying to
          figure out the bed design for the master bedroom at our Hidden Hills
          compound...The Pablo pop up was almost a pop up of influence. All
          respect prayers and love to Phife•s family Thank you for so much
          inspiration daytime I love this new Ferg album! The Life of Pablo is
          now available for purchase I have a dream. Thank you to everybody who
          made The Life of Pablo the number 1 album in the world! I&apos;m so proud
          of the nr #1 song in the country. Panda!
        </Typography>
      </div>
    </section>
      <Footer />
    </>
  );
}
