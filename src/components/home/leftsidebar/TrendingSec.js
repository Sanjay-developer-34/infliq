import React from "react";
import TrendingImg from "../../../images/trending_img.png";

function TrendingSec() {
    return (
        <section className="trending">
            <div className="">
                <div className="TrendingSec">
                    <div className="trend_heading">
                        <p>Trending Topics</p>
                    </div>
                    <div className="trending_content">
                        <div className="trend_content">
                            <ul className="ul_items">
                                <li>Sports</li>
                                <li className="list_items">The morning</li>
                            </ul>
                            <p>Saints at Chargers</p>
                        </div>
                        <div className="Trend_img">
                            <img src={TrendingImg} alt=""></img>
                        </div>
                    </div>
                    <div className="trend_content">
                        <ul className="ul_items">
                            <li>Technology</li>
                            <li className="list_items">Trending</li>
                        </ul>
                        <p>#iPhone15</p>
                        <h4 className="ul_items">2,080 posts</h4>
                    </div>
                    <div className="trend_content">
                        <ul className="ul_items">
                            <li>Trending</li>
                        </ul>
                        <p>Eagle Flying</p>
                        <h4 className="ul_items">28.4K posts</h4>
                    </div>
                    <div className="trend_content">
                        <ul className="ul_items">
                            <li>Marketing</li>
                            <li className="list_items">Trending</li>
                        </ul>
                        <p>Asia Cup 2023</p>
                        <h4 className="ul_items">12.5K posts</h4>
                    </div>
                    <div className="trend_content">
                        <ul className="ul_items">
                            <li>Sports</li>
                            <li className="list_items">Trending</li>
                        </ul>
                        <p>#KLRahul</p>
                        <h4 className="ul_items">Trending with</h4>
                    </div>
                    <div className="Trend_footer">
                        <button className="foot_btn ">See all </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrendingSec;
