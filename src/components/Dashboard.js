import React, { useEffect, useState } from 'react';
import axios from 'axios'
import "../css/tableview.css"
import Row from './Row';
import Filter from './Filter';
import Modals from './Modals';
import Loader from 'react-loader-spinner';

const Dashboard = () => {
    const [data,setData]=useState([]);
    const [filter,setFilter]=useState("All");
    const [time,setTime]=useState("May 31, 2001 - May 31, 2041");
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState();
    const [loading, setLoading] = useState();

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('https://api.spacexdata.com/v4/launches')
            setData(req.data);
            setLoading(false);
        }
        fetchData();
    }, []);
 
    const TimeFilter = (e) => {
        if(time===e.currentTarget.value){
            return
        }
        
        setTime(e.currentTarget.value);
        const timerange = e.currentTarget.value.split(" - ");
        if(timerange.length!==0){
            async function fetchData(){
                setLoading(true);
                const req = await axios.get('https://api.spacexdata.com/v4/launches')
                
                setData(req.data.filter((data)=> (new Date(data.date_utc)>new Date(timerange[0])) && 
                                                     (new Date(data.date_utc)<new Date(timerange[1])) ));
                setFilter("All");
                setLoading(false);
            }
            fetchData(); 

        }
    }

    const FilterLaunches = (e) => {
        if(e.currentTarget.name===filter){
            return;
        }
        setTime("May 31, 2001 - May 31, 2041");
        setFilter(e.currentTarget.name);
        async function fetchData(){
            setLoading(true);
            const req = await axios.get('https://api.spacexdata.com/v4/launches')
            if(e.target.name==="Upcoming"){
                setData(req.data.filter((data)=> data.upcoming));
            } else if(e.target.name==="Successful"){
                setData(req.data.filter((data)=> data.success));
            } else if(e.target.name==="Failed"){
                setData(req.data.filter((data)=> (data.success===false)));
            } else {
                setData(req.data);
            }
            setLoading(false);
        }
        fetchData();     
    };

    const handleShow = (id) => {
        setModalData(data.filter(data_one=> data_one.id===id));
        setShow(true);
    }
    return (
        <div className="container">
            <Filter filter={filter} FilterLaunches={FilterLaunches} time={time} TimeFilter={TimeFilter}/>

            <table className="table dataList w-100">
                <thead>
                    <tr>
                        <th scope="col" className="w-10">No:</th>
                        <th scope="col" className="w-10 text-left pl-4">Launched (UTC)</th>
                        {/* <th scope="col" className="w-10 text-left pl-4">Location</th> */}
                        <th scope="col" className="w-10 text-left pl-5">Mission</th>
                        {/* <th scope="col" className="w-10">Orbit</th> */}
                        <th scope="col" className="w-10 text-left pl-4">Launch Status</th>
                        <th scope="col" className="w-10">Rocket ID</th>
                    </tr>
                </thead>
                {(loading===true || loading===undefined) && 
                    <tr className="text-center" rowSpan="10">
                        <th colSpan="7"><Loader type="Circles" color="#00BFFF" height={100} width={100} timeout={3000} /> </th>
                    </tr>}
                {(loading===false && data.length===0 ) && <tr rowSpan="10" className="text-center">
                        <th colSpan="7"> No results found for the specified filter</th>
                    </tr>}
                {(data.length!==0 && !loading) && data.map((data_one) => {
                    return (
                        <Row y={(new Date(data_one.date_utc).toLocaleTimeString().split(" "))} x={(new Date(data_one.date_utc).toDateString().split(" ")) } data={data_one} key={data_one.id} handleShow={handleShow}/>
                    );
                })}
            </table>
            <Modals data={modalData} setShow={setShow} show={show} />
            
        </div>
    );
};
 
export default Dashboard;