import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Features = () => {
    const data = useStaticQuery(graphql`
    query {
        markdownRemark(frontmatter: { id: { eq: "features" } }) {
          frontmatter {
            title
            sections {
              title
              items
            }
          }
        }
      }
    `)

    const { title, sections } = data.markdownRemark.frontmatter;

    return (
        <div class="p-16">
            <div class="relative isolate pt-8 text-center">
                <h2 class="text-4xl tracking-tight text-gray-900">{title}</h2>
                <div class="flex justify-center items-center space-x-24 my-12">
                    {sections.map((section) => {
                        return <div class="w-3/12 p-2 bg-transparent text-center">
                            <h5 class="text-2xl p-4 font-bold tracking-tight text-gray-900">{section.title}</h5>
                            <ul>
                                {section.items.map((item) => <li><p class="mt-0 text-lg leading-8 text-gray-600">{item}</p></li>)}
                            </ul>
                            <a href="#" class="inline-flex items-center px-3 py-2 my-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Read more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Features;