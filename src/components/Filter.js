import React, { useEffect } from 'react';

const Filter = ({filter, FilterLaunches, TimeFilter, time}) => {

    useEffect(() => {
        const script = document.createElement('script');
    
        script.src = "../js/datepicker.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
        document.body.removeChild(script);
        }
    }, []);
    return ( 
        <div>
            <h1 className="text-center"><span className="s">S</span><span className="p">P</span><span className="a">A</span><span className="c">C</span><span className="e">E</span><span className="x">X</span></h1>
            <hr />
            <div className="d-flex w-100">
                <div className="dropdown d-inline-flex">
                    <button className="btn dropdown-toggle" type="button" id="timemenu" onClick={TimeFilter}>
                    <i className="fas fa-calendar"></i> <span>{time}</span>    
                    </button>
                </div>
                <div className="dropdown d-inline-flex ml-auto">
                    <button className="btn dropdown-toggle" type="button" id="timemenu" data-toggle="dropdown">
                    <i className="fas fa-filter"></i> {filter} Launches
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button role="textbox" className="dropdown-item" name="All" onClick={FilterLaunches}>All Launches</button>
                        <button role="textbox" className="dropdown-item" name="Upcoming" onClick={FilterLaunches}>Upcoming Launches</button>
                        <button role="textbox" className="dropdown-item" name="Successful" onClick={FilterLaunches}>Successful Launches</button>
                        <button role="textbox" className="dropdown-item" name="Failed" onClick={FilterLaunches}>Failed Launches</button>
                    </div>
                </div>
            </div>
        </div>
        // <script src="../"></script>
     );
}
 
export default Filter;