import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Features = () => {
    const data = useStaticQuery(graphql`
    query {
        markdownRemark(frontmatter: { id: { eq: "features" } }) {
          frontmatter {
            title
            sections {
              title
              items
              imgSrc {
                childImageSharp {
                    gatsbyImageData(width: 200)
                }
              }
            }
          }
        }
      }
    `)

    const { title, sections } = data.markdownRemark.frontmatter;

    return (
        <div id="features" class="relative isolate text-center">
            <h2 class="text-4xl font-bold tracking-tight text-dark mb-4 py-10">{title}</h2>
            <div class="flex px-32 py-12 justify-around gap-12">
                {sections.map((section, index) => {
                    const imgSrc = section.imgSrc?.childImageSharp?.gatsbyImageData;
                    return <div
                        class={`w-4/12 p-2 pb-12 bg-transparent flex flex-col justify-center items-center hover:shadow-md transition ease-in-out hover:translate-y-2`}>
                        <div className="w-6/12 flex justify-center align-middle items-center p-2">
                            <GatsbyImage class="w-12 object-fill " image={imgSrc} alt="our Strength" />
                        </div>
                        <h5 class="text-2xl p-4 font-bold tracking-tight text-primary">{section.title}</h5>
                        <ul>
                            {section.items.map((item) => <li><p class="mt-0 text-lg leading-8 text-secondary-600">{item}</p></li>)}
                        </ul>
                        <a href="#" class="inline-flex items-center px-3 py-2 my-4 text-sm font-medium text-center underline focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Read more
                        </a>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Features;