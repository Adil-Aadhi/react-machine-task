import {useParams} from'react-router-dom'



function Content(){
    const {title,body}=useParams()
    return(
        <div style={{backgroundImage:"linear-gradient(to bottom,white,#ebeed7ff)",height:"100vh"}}>
            <div className="container mt-4 mb-5">
                 <h1 className="display-5">Blogs:-</h1>
            </div>
            <div className="container">
                <div className='p-5'>
                    <h1>{title}</h1>
                </div>
                <div className='text-start pb-5'>
                    <p>content:-</p>
                    <p>{body}</p>
                </div>
            </div>
           
        </div>
    )
}

export default Content