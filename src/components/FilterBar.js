import { useState } from "react"

const FilterBar = () => {

    // const [accordianOpen,setAccordianOpen] = useState([false,false,false,false,false,false,false,false]);

    const [filterSettings,setFilterSettings] = useState([{name:'IDEAL FOR',open:false},{name:'OCCASION',open:false},{name:'WORK',open:false},
        {name:'FABRIC',open:false},{name:'SEGMENT',open:false},{name:'SUITABLE FOR',open:false},
        {name:'RAW MATERIALS',open:false},{name:'PATTERNS',open:false}])

    const handleArrowDirection = (index) => {
        if(!filterSettings[index].open){
            return (<i className="arrow down" >
                </i>)
        } else{
            return (<i className="arrow up">
            </i>)
        }
    }

    const checkboxes = () => {
        return (<>
                <div style={{marginTop:'1rem'}}>
                    <input type="checkbox" />
                    <label style={{fontFamily:'monospace',fontWeight:400,paddingLeft:'0.3rem'}}>MEN</label>
                </div>
                <div>
                    <input type="checkbox" />
                    <label style={{fontFamily:'monospace',fontWeight:400,paddingLeft:'0.3rem'}}>WOMEN</label>
                </div>
                <div>
                    <input type="checkbox" />
                    <label style={{fontFamily:'monospace',fontWeight:400,paddingLeft:'0.3rem'}}>BABY & KIDS</label>
                </div>
            </>
        )
    }

    const handleAccordian = (index) => {
        setFilterSettings(prev => prev.map((item,i) => {
            var val = item.open
            if(i===index){
               return {...item,open: !val}
            }
            return item;
        }))
    }


  return (
    <div className='sidebar'>
        <input type="checkbox" />
        <label style={{paddingLeft: "10px",fontSize:'1rem',fontFamily:'monospace',fontWeight:700,lineHeight:'20px'}}>CUSTOMIZE</label>        
        {filterSettings.map((item,index) => (<><div key={item.name} onClick={() => handleAccordian(index)}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <h3 style={{fontFamily:'monospace',fontWeight:700,lineHeight:'20px',marginTop:'1rem'}}>
            {item.name}
        </h3>
        <div style={{paddingTop:'0.8rem'}}>
            {handleArrowDirection(index)}</div>
        </div>
        <p style={{fontFamily:'monospace',fontWeight:400,marginTop:'0.3rem'}}>ALL</p>        
        </div>
        {filterSettings[index].open && checkboxes()}
        </>))}        
    </div>
  )
}

export default FilterBar