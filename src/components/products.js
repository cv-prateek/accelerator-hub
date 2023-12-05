import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

const ProductCard = ({ title, text, imgSrc, reverse = false, tags = "", link }) => {
    const featuredImg = imgSrc?.childImageSharp?.gatsbyImageData;
    return <div className={`p-4 flex gap-8 rounded-3xl ${reverse ? "flex-row-reverse" : "flex-row"} mx-8`}>
        <div className="w-6/12 flex justify-center align-middle items-center">
            <div style={{
                "height": "18rem",
                "width": "20rem",
                "background": "lightgoldenrodyellow",
                "position": "absolute",
                "clip-path": "polygon(29% 39%, 68% 12%, 99% 27%, 91% 84%, 57% 89%, 15% 89%, 0 69%, 5% 33%)"
            }}></div>
            <GatsbyImage class="w-96 mix-blend-darken" image={featuredImg} />
        </div>
        <div className="w-6/12 flex flex-col items-start">
            {tags ? <p class="text-xs mb-2 bg-slate-400 px-1.5 py-0.5 tracking-tight rounded text-white">{tags}</p> : null}
            <h3 className="text-4xl leading-tight font-bold mb-8 text-primary">{title}</h3>
            <p className="text-xl text-left mb-12">{text}</p>
            <div class="flex flex-row gap-2">
                <button className="bg-secondary text-white px-4 py-2 rounded max-w-fit hover:bg-dark hover:text-white transition-colors">
                    Learn more
                </button>
                {link && <button className="text-dark px-4 py-2 rounded max-w-fit hover:bg-dark hover:text-white transition-colors" target="_blank" onClick={() => window.open(link)}>
                    Try it out
                </button>}
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
                    link
                    learnMore
                }
            }
        }
     }
    `)

    const { title, subtitle, banner, products } = data.markdownRemark.frontmatter;

    return (
        <div id="products" class="min-h-screen relative isolate flex flex-col justify-center text-center p-16 space-x-24">
            <div class="self-center max-w-7xl space-y-4 rounded-3xl bg-purple-50 py-16 px-8 m-auto bg-background">
                <div class="py-16">
                    <p class="text-lg leading-8 text-gray-600 mb-1">{banner}</p>
                    <h2 class="text-4xl font-bold tracking-tight text-dark mb-4">{title}</h2>
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
                            tags={feature?.tags}
                            link={feature?.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;