import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date ,source } = this.props;

        return (
            <>

                <div className="card" style={{ width: '18rem' }}>
                    <div style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          position: 'absolute',
                          right: 0
                    }}>
                    <span className="badge rounded-pill bg-danger" >{source}</span>
                    </div>
                    <img src={imageUrl ? imageUrl : "https://static.news.bitcoin.com/wp-content/uploads/2022/06/microstrategy.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small class="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_black" className="btn btn-dark btn-mn">Read More</a>
                    </div>
                </div>


            </>
        )
    }
}

export default NewsItem