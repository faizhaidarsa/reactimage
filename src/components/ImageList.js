import React, {Component} from 'react'

class ImageList extends Component{
    
    renderList=()=>{
        let hasil=this.props.images.map((data,key)=>{
            return (
                <img
                key={key}
                src={data.urls.regular}
                style={{width:'100%'}}
                className='my-1'
                alt={this.props.kata+' '+key}
                />
            )
        })
        if(hasil==''){
            return `0 Result for ${this.props.kata}`
        }
        else{
            return hasil 
        }    
        
    }
    
    render() { 
        return (
            <div>
                <h1>Search Result</h1>
                {this.renderList()}
            </div>
        )
    }
}

export default ImageList


