import React, { Component } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

export default class News extends Component {

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`
    }

    // async upDated()
    // {
    //     this.props.setProgress(0);
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=93fbe2350c224beb91aa6170ba68fad5&page=1`;
    //     let data = await fetch(url);
    //     this.props.setProgress(40);
    //     let parsedData = await data.json();
    //     this.props.setProgress(70);
    //     console.log(parsedData);
    //     this.setState({ articles: parsedData.articles });
    //     this.props.setProgress(100);
    // }

    async componentDidMount() {
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=93fbe2350c224beb91aa6170ba68fad5&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
        // this.upDated();
    }



    handlePrevClick = async () => {

        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=93fbe2350c224beb91aa6170ba68fad5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        });
        this.props.setProgress(100);

        // this.setState({
        //     page: this.state.page -1
        // })
        // this.upDated();

    }

    handleNextClick = async () => {

        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            this.props.setProgress(0);
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=93fbe2350c224beb91aa6170ba68fad5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            this.props.setProgress(40);
            let parsedData = await data.json();
            this.props.setProgress(70);
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            });
            this.props.setProgress(100);
        }

    }

    fetchMoreData =  async () => {
        this.setState({ page: this.state.page + 1 });
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=93fbe2350c224beb91aa6170ba68fad5&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);

    };


    render() {
        return (
            <>
                
                    <h2 className="text-center"> Top Headline from {this.capitalizeFirstLetter(this.props.category)} </h2>
                    {this.state.articles.map((element) => { console.log(element) })}
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className="row mx-2 my-2">
                                {this.state.articles.map((element) => {
                                    return <div className="col md 4 my-2">
                                        <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                                    </div>

                                })}
                            </div>
                        </div>
                    </InfiniteScroll>


                    {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" class="btn btn-dark sm " onClick={this.handlePrevClick}  >Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark mn " onClick={this.handleNextClick} >Next</button>
                    </div> */}
               



            </>
        )
    }
}
