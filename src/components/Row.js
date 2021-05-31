import React from 'react';
import "../css/tableview.css"

const Row = ({ y, x, data, handleShow}) => {
    // console.log(data)
    return ( 
        <tr role="button" key={data.id} onClick={() => handleShow(data.id)}>
            <th className="align-middle w-10">{data.flight_number}</th>
            <td className="align-middle">{(x[2]+" "+x[1]+" "+x[3]+" "+y[0].substring(0,y[0].lastIndexOf(":")))}</td>
            {/* <td className="align-middle">{data.launch_site["site_name"]}</td> */}
            <td className="align-middle">{data.name}</td>
            {/* <td className="align-middle">{data.rocket["second_stage"]["payloads"][0]["orbit"]}</td>                     */}
            <td className="align-middle">{ data.upcoming? <span className='alert p-2 m-2 alert-warning rounded-pill'>Upcoming</span>: data.success? <span className='alert alert-success p-2 m-2 rounded-pill'>  Success  </span>:<span className='alert alert-danger p-2 m-2 rounded-pill'> Failure </span> }</td>
            <td className="align-middle">{data.rocket}</td>
        </tr>
     );
}
 
export default Row;