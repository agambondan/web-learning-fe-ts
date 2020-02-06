import React from "react";
import { Link } from "@reach/router";

export default function ArticleListComponent(props:any):Array<JSX.Element> {
    const {articles} = props
    return articles.map((articles:any , index:number) =>{
        return (
                <section key={index}>
                    <div>Content : {articles.content} <Link to="/content">Read More...</Link></div>
                    <hr/>
                </section>
        )
    })

}
