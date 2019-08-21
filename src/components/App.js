import React, {Component} from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import axios from 'axios'

class App extends Component{
    
    state={
        images:[]
    }

    //function yang akan mengambil keyword dari search bar yang akan digunakan untuk request gambar
    onSearchSubmit = (keyword)=>{
        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers:{
                    Authorization: `Client-ID c974dfd811854e2f92c7cf21f3157fcbec1d19e613fb423b76082cca4b1fb841`
                },
                params:{
                    query: keyword
                }
            }
        ).then((res)=>{
            this.setState({images:res.data.results})   
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    render(){
        return <div className="container">
            <SearchBar as={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
        </div>
    }
}

export default App

/*
    JSX adalah syntax yang disediakan oleh Javascript
    untuk memudahkan developer menyusun html di javascript
*/