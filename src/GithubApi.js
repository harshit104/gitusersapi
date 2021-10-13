import React, { useEffect, useState } from 'react'
import Loading from './Loading'

const GithubApi = () => {


    const [curData, setCurData] = useState([])
    const [loading, setLoading] = useState("true")
    const getData = async () => {
        try {
            const url = "https://api.github.com/users";
            let fetchData = await fetch(url);
            let resData = await fetchData.json();
            setLoading(false)
            setCurData(resData);
            // console.log(resData);
        } catch (e) {
            console.log(e);
            setLoading(false)
            
        }

        
    }
    useEffect(() => {
        getData()
    }, [])

    if(loading){
      return <Loading />
    }



    return (
        <React.Fragment>
        <div className="container">
            <h1 className="m-3 p-4" style={{textAlign: 'center'}}>Github User API fetch</h1>
            <div className="d-flex flex-wrap justify-content-center flex-row bd-highlight mb-3">
                {
                    curData.map((curElem) => {
                        let { id, avatar_url, login, html_url } = curElem;
                        return (
                            <div key={id} className="card p-4 m-4 bd-highlight col-md-3 col-sm-12"  >
                                <img src={avatar_url} alt="NoImage " />
                                <div className="card-body">
                                    <h5 className="card-title">{login}</h5>
                                    <a target="_blank" rel="noreferrer" href={html_url} className="btn btn-primary">Know More</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </React.Fragment>
    )
}

export default GithubApi
