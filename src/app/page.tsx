import React from 'react';
import { AccessibilityIcon, BrushIcon, CombineIcon, InfoIcon, LockIcon, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";

const stats = [
  { id: 1, name: "Projects completed", value: "1500+" },
  { id: 2, name: "Happy clients", value: "500+" },
  { id: 3, name: "Years of experience", value: "10+" },
];

const pricing = [
  {
    title: "Rook's Reign",
    price: "450",
    description:
      "The Rook's Reign plan lays the groundwork for your digital empire. With a customized website design and essential features, this plan is perfect for startups and small businesses looking to establish their online presence.",
    features: [
      "Customized website design",
      "Up to 5 pages",
      "Basic SEO setup",
      "Contact form integration",
      "Responsive design",
      "1 month of post-launch support",
    ],
  },
  {
    title: "Knight's Valor",
    price: "750",
    description:
      "Embrace the valor of the Knight's Valor plan, where your digital journey gains momentum. With advanced features including blog integration and social media integration, this plan is ideal for businesses seeking to expand their online reach.",
    features: [
      "Customized website design",
      "Up to 10 pages",
      "Advanced SEO setup",
      "Contact form integration",
      "Blog integration",
      "Social media integration",
      "3 months of post-launch support",
    ],
    mostPopular: true,
  },
  {
    title: "Grandmaster's Legacy",
    price: "1200",
    description:
      "Ascend to the pinnacle of digital excellence with the Grandmaster's Legacy plan. Offering comprehensive features such as e-commerce functionality and advanced analytics setup, this plan empowers businesses to dominate the digital arena.",
    features: [
      "Customized website design",
      "Unlimited pages",
      "Comprehensive SEO setup",
      "Contact form integration",
      "E-commerce functionality",
      "Advanced analytics setup",
      "6 months of post-launch support",
    ],
  },
];

export default function Home() {
  return (
    <>
      <section className="py-8 mt-24">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row lg:items-stretch gap-10">
          <div className="lg:w-1/2 lg:pb-10 xl:pb-12 text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto ">
            <div className="relative rounded-full md:px-5 px-3 py-2 md:w-min md:whitespace-nowrap mb-6 text-sm leading-6 dark:text-slate-300 text-gray-600 ring-1 dark:ring-slate-700 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <h1 className="font-semibold leading-tight text-teal-950 dark:text-white text-4xl md:text-5xl lg:text-6xl">
              Showcase Your Work with <div className="relative after:absolute after:inset-x-0 after:h-3 after:bg-sky-100 dark:after:bg-sky-950 after:bottom-2 inline-block px-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-tr from-indigo-800 to-purple-400">Confidence</span></div>!
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Create custom preview links for your freelance projects with ease.
              Ensure your clients see the best version of your work while keeping
              your code secure. Elevate your presentations and win more clients today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="#" className="flex items-center justify-center gap-x-2 px-5 py-2.5 border border-transparent bg-indigo-700 text-white">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={16} height={16} strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="#" className="flex items-center justify-center gap-x-2 px-5 py-2.5 border border-gray-200 text-sky-700 dark:border-gray-800 dark:text-white">
                Learn more
              </Link>
            </div>
            <div className="flex items-center gap-1 mt-10 justify-center lg:justify-start gap-x-3">
              <div className="flex items-center -space-x-2">
                <Image src="/placeholder.svg" width={2250} height={1400} alt="listener avatar" className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950" />
                <Image src="/placeholder.svg" width={2250} height={1400} alt="listener avatar" className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950" />
                <Image src="/placeholder.svg" width={2250} height={1400} alt="listener avatar" className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">+12k</span>
                <span className="text-gray-600 text-sm dark:text-gray-300">WordWide Freelancers</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative lg:h-auto max-w-2xl md:max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 px-10 py-1.5 bg-white text-center border border-gray-100 shadow-lg shadow-gray-200/40 rounded-t-xl">
              <span className="font-bold text-3xl text-sky-950 flex items-center gap-2">4.7+ <Star className='w-auto h-7' /></span>
              <p className="text-gray-600">Ratings</p>
            </div>
            <Image src="/placeholder.svg" width={2250} height={1400} alt="sidebiew image" className="lg:w-full lg:h-full object-cover" />
          </div>
        </div>
      </section>
      <section className="py-8 mt-24">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:items-stretch gap-10">
          <h2 className="text-5xl font-bold text-center">Features</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <AccessibilityIcon className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Responsive Design</h3>
                <p className="mt-2 text-muted-foreground">Ensure your project previews look great on any device.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <LockIcon className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Secure Previews</h3>
                <p className="mt-2 text-muted-foreground">Protect your work with password-protected preview links.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BrushIcon className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Branding Options</h3>
                <p className="mt-2 text-muted-foreground">Customize the preview with your logo and brand colors.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <InfoIcon className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Analytics</h3>
                <p className="mt-2 text-muted-foreground">Track who has viewed your project previews.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CombineIcon className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Collaboration</h3>
                <p className="mt-2 text-muted-foreground">Share preview links with clients and get feedback.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <AccessibilityIcon className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Accessibility</h3>
                <p className="mt-2 text-muted-foreground">Ensure your previews are accessible to all users.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 dark:text-slate-300 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight dark:text-slate-100 text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
          <div className="flex md:flex-1">
            <img src="https://placehold.co/500x500" alt="working on housing" width={1300} height={900} className="w-full md:h-full object-cover rounded-lg" />
          </div>
          <div className="md:w-1/2 lg:w-[54%] space-y-12 text-gray-700 dark:text-gray-300">
            <h1 className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
              We help drive your business forward faster
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias vero distinctio dignissimos consequatur? Excepturi quibusdam, quam ipsum hic, laudantium ducimus suscipit, culpa facere consequuntur repellat delectus.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-6 p-4 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900">
                <span className="rounded-full bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </span>
                <h2 className="font-semibold text-xl text-gray-900 dark:text-white">Our mission</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
              <div className="space-y-6 p-4 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900">
                <span className="rounded-full bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <h2 className="font-semibold text-xl text-gray-900 dark:text-white">Our vision</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[url('/bg-steps.svg')] bg-center bg-cover bg-no-repeat">
        <div className="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="relative mt-12 lg:mt-20">
              <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <svg
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="875"
                  height="48"
                  viewBox="0 0 875 48"
                  fill="none"
                >
                  <path
                    d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                    stroke="#D4D4D8"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-dasharray="1 12"
                  />
                </svg>
              </div>
              <div className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                      1
                    </span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                    Strategy Formation
                  </h3>
                  <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-300">
                    Just as a chess master carefully analyzes the board before
                    making a move, we begin by understanding your business
                    goals, target audience, and competitive landscape. Through
                    collaborative sessions, we formulate a strategic plan that
                    serves as the foundation for all our subsequent actions.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                      2
                    </span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                    Strategic Implementation
                  </h3>
                  <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-300">
                    With the strategy in place, we move forward with precise
                    execution. Our team of digital artisans employs cutting-edge
                    technologies and innovative design principles to bring your
                    vision to life. Each move is meticulously calculated,
                    ensuring that every element aligns with your overarching
                    strategy.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                    <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                      3
                    </span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 dark:text-white md:mt-10">
                    Continuous Optimization
                  </h3>
                  <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-300">
                    In the dynamic digital landscape, adaptation is key to
                    staying ahead of the competition. We continuously monitor
                    performance metrics, gather user feedback, and analyze
                    market trends. Like a chess player adjusting their strategy
                    mid-game, we make iterative improvements to optimize your
                    digital presence and maintain your competitive edge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="flex flex-col  space-y-12">
            <div className="flex gap-10 flex-col items-center">
              <div className="mx-auto max-w-3xl text-center space-y-8">
                <span className="border border-gray-200 dark:border-gray-800 px-3 py-0.5 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                  Pricing
                </span>
                <h1 className="text-3xl md:text-4xl xl:text-5xl text-gray-900 dark:text-white font-bold">
                  Affordable Pricing Plans
                </h1>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto">
                Unlock the power of our strategic digital solutions with our
                flexible and transparent pricing plans. Choose the perfect plan
                to suit your business needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-3">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-5 sm:p-6 md:p-8 xl:p-10 border border-gray-300 dark:border-gray-800/80 md:hauto flex flex-col rounded-3xl relative"
                >
                  {plan.mostPopular && (
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-500 dark:bg-[rgba(225,225,225,0.1)] backdrop-blur-2xl bg-[rgba(0,0,0,0.1)] rounded-full px-4 py-2 absolute -top-5 left-5">
                      Most Popular
                    </span>
                  )}
                  <span className="font-semibold text-2xl text-gray-800 dark:text-gray-200">
                    {plan.title}
                  </span>
                  <div className="mt-2 text-gray-900 dark:text-white text-2xl md:text-3xl font-bold">
                    ${plan.price}
                  </div>
                  <p className="mt-5 sm:mt-6 text-gray-700 dark:text-gray-300">
                    {plan.description}
                  </p>
                  <ul className="flex flex-col space-y-3 mt-5 sm:mt6 text-gray-600 dark:text-gray-400">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-x-3">
                        <span className="text-blue-600 dark:text-blue-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 sm:mt-6">
                    <Link
                      href="/auth/sign-up"
                      className="bg-gray-800 hover:bg-opacity-90 text-white transition-colors ease-leaner h-12 rounded-full px-6 w-full flex items-center gap-x-3 justify-center"
                    >
                      Get started{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
