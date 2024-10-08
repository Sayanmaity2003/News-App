export default function NewsItem({title, description, src, url}){
    return(
        <div className="card bg-dark text-light mb-3 d-inline-block my-4 mx-5 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={src?src:"https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"} style={{height:"200px", width:"320px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title?title.slice(0,50):"Global Tech Giants Unveil Breakthrough Innovations at Annual Conference"}</h5>
          <p className="card-text">{description?description.slice(0,90):"Stay updated with the latest breaking news, in-depth analysis, and exclusive reports from around the globe. Our news app delivers real-time updates across diverse categories including politics, technology, business, sports, entertainment, and more. With a personalized feed, you can follow the topics that matter most to you. Whether you're interested in local developments or international headlines, our app brings the world to your fingertips. Get notifications on critical stories, dive into rich multimedia content, and stay informed 24/7 with trusted, accurate journalism tailored just for you."}</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    );
}