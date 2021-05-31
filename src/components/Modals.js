import React from 'react';
import { Modal } from 'react-bootstrap';

const Modals = ({data, show, setShow}) => {
    if(data!==undefined){
        const imageStyle={
            // float:"left",
            width:"100px",
            height:"100px"
        }
        const y=new Date(data[0].date_utc).toLocaleTimeString().split(" "); 
        const x=new Date(data[0].date_utc).toDateString().split(" ");
        // console.log(data[0].flight_number)
        return ( 
            // <div>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <div className="d-block">
                    <div className="d-flex">
                        <img src={data[0].links["patch"]["small"]} style={imageStyle} alt="" className="img-thumbnail"  />
                        <Modal.Title className="ml-3" style={{fontSize:"1rem"}}>
                            <div className="d-flex">
                                <span style={{fontSize:"1.5rem"}}>&nbsp;{data[0].name}</span>
                                <span className="mt-2 ml-2 font-weight-bold">
                                    { data[0].upcoming? <span className='alert py-1 px-2 m-1 alert-warning rounded-pill'>Upcoming</span>: data[0].success? <span className='alert alert-success py-1 px-2 m-1 rounded-pill'>  Success  </span>:<span className='alert alert-danger py-1 px-2  m-1 rounded-pill'> Failure </span> } &nbsp;          
                                </span>
                            </div>
                            <div className="ml-3 my-3">
                                {data[0].links.article && <a href={data[0].links.article} className="text-dark" rel="noreferrer" target="_blank">
                                    <i className="far fa-newspaper"></i>
                                </a>}&nbsp;&nbsp;
                                {data[0].links.wikipedia && <a href={data[0].links.wikipedia} className="text-dark" rel="noreferrer" target="_blank">
                                    <i className="fab fa-wikipedia-w"></i>
                                </a>}&nbsp;&nbsp;
                                {data[0].links.webcast && <a href={data[0].links.webcast} className="text-dark" rel="noreferrer" target="_blank">
                                    <i className="fab fa-youtube"></i>
                                </a>}
                            </div>
                        </Modal.Title>  
                    </div>
                    <div className="mt-2 ml-2">
                        {data[0].details}
                    </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                <ul className="list-group">
                    <li className="list-group-item d-flex"><div className="w-50">Flight Number</div>  {data[0].flight_number}</li>
                    <li className="list-group-item d-flex"><div className="w-50">Mission Name</div>  {data[0].name}</li>
                    <li className="list-group-item d-flex"><div className="w-50">Rocket ID</div>  {data[0].rocket}</li>
                    <li className="list-group-item d-flex"><div className="w-50">Manufacturer</div>  SpaceX </li>
                    <li className="list-group-item d-flex"><div className="w-50">Payload</div>  {data[0].payloads}</li>
                    <li className="list-group-item d-flex"><div className="w-50">Launch Date</div>  {(x[2]+" "+x[1]+" "+x[3]+" "+y[0].substring(0,y[0].lastIndexOf(":")))}</li>
                    </ul>
                </Modal.Body>
            </Modal>
            // <div className="modal fade" tabIndex="-1" id={"Modal"+data.id} >
            //     <div className="modal-dialog">
            //         <div className="modal-content">
            //         <div className="modal-header">
            //             <img src={data.links.patch.small} style={{float:"left"}} alt="" />
            //             <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            //             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            //             <span aria-hidden="true">&times;</span>
            //             </button>
            //         </div>
            //         <div className="modal-body">
            //             ...
            //         </div>
            //         <div className="modal-footer">
            //             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            //             <button type="button" className="btn btn-primary">Save changes</button>
            //         </div>
            //         </div>
            //     </div>
            // </div>
            // </div>

        );
    }
    else {
        return(
            <div></div>
        );
    }
}
 
export default Modals;