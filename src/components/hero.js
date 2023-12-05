import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Hero = () => {
    const data = useStaticQuery(graphql`
      query {
        markdownRemark(frontmatter: { id: { eq: "hero" } }) {
          frontmatter {
            id
            banner
            title
            subtitle
          }
        }
      }
    `)

    const heroData = data.markdownRemark.frontmatter;

    return (
        <div class="bg-white">
            <div class="relative isolate px-6 pt-14 lg:px-8">
                <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-44">
                    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            {heroData.banner} <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                    <div class="text-center">
                        <h1 class="text-4xl font-bold tracking-tight text-primary sm:text-6xl">{heroData.title}</h1>
                        <p class="mt-6 text-lg leading-8 text-primary-400">{heroData.subtitle}</p>
                        <div class="mt-10 flex items-center justify-center gap-x-6">
                            {/* <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a> */}
                            <a href="#!" class="animate-pulse text-sm font-semibold leading-6 text-gray-900">scroll to learn more <span aria-hidden="true"></span></a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;