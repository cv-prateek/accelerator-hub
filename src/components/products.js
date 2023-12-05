import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProductCard = ({ title, text, imgSrc, reverse = false, tags }) => {
    const featuredImg = imgSrc?.childImageSharp?.gatsbyImageData;
    return <div className={`p-4 flex gap-8 ${reverse ? "flex-row-reverse" : "flex-row"} mx-8`}>
        <div className="w-6/12 flex justify-center align-middle items-center">
            <GatsbyImage class="w-96" image={featuredImg} />
        </div>
        <div className="w-6/12 flex flex-col items-start">
            {tags ? <p class="text-base mb-3">{tags}</p>: null}
            <h3 className="text-4xl font-bold mb-8">{title}</h3>
            <p className="text-xl text-left mb-12">{text}</p>
            <div class="flex flex-row gap-2">
            <button className="bg-teal-50 text-blue-700 px-4 py-2 rounded max-w-fit hover:bg-blue-700 hover:text-white transition-colors">
                Learn more
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded max-w-fit hover:bg-blue-700 transition-colors">
                Try it out
            </button>
            </div>
        </div>
    </div>
}

const Products = () => {
    const data = useStaticQuery(graphql`
     query {
        markdownRemark( frontmatter: { id: { eq: "products"} }) {
            frontmatter {
                title
                subtitle
                banner
                products {
                    product
                    summary
                    imgSrc {
                        childImageSharp {
                            gatsbyImageData(width: 800)
                        }
                    }
                    tags
                }
            }
        }
     }
    `)

    const { title, subtitle, banner, products } = data.markdownRemark.frontmatter;

    return (
        <div class="min-h-screen flex flex-col justify-center text-center p-16 space-x-24">
            <div class="self-center max-w-7xl space-y-4 rounded-3xl bg-white py-16 px-8 m-auto bg-slate-50">
                <div class="py-16">
                    <p class="text-lg leading-8 text-gray-600">{banner}</p>
                    <h2 class="text-4xl font-bold tracking-tight text-gray-900">{title}</h2>
                    <p class="text-lg leading-8 text-gray-600">{subtitle}</p>
                </div>
                <div class="py-16 flex flex-col justify-center items-center gap-52">
                    {products.map((feature, index) => (
                        <ProductCard 
                        key={index} 
                        reverse={index % 2} 
                        title={feature.product} 
                        text={feature.summary} 
                        imgSrc={feature?.imgSrc || ""}
                        tags={feature?.tags} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;