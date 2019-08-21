import React, {Component} from 'react'
class SearchBar extends Component{

    state={
        keyword:''
    }
    
    onSubmitForm = (e)=>{
        e.preventDefault()   
        //Untuk memanggil function atau variabel dari component app.js perlu ditambahkan this.props
        this.props.as(this.state.keyword)
    }

    onChangeText = (e)=>{
        // Menyimpan text dari user di state.keyword
        this.setState({keyword:e.target.value})
    }

    render() {
        return (
            <div>
                <h3 className="text-center mt-3">Search Image</h3>
                <form className="form-group mt-5" onSubmit={this.onSubmitForm}>
                    <input
                        type="text" 
                        placeholder="Type something" 
                        className="form-control"
                        onChange={this.onChangeText}/>
                </form>
            </div>
        )
    }
}

export default SearchBar

//onSubmit, ketika tag input di dalam form di 'enter'
//preventDefault() untuk menghilangkan refresh pada on submit
//onChange, ketika ada perubahan di tag input text
//this.setState merupakan function untuk merubah dara pada state
//setState akan menerima satu parameter sebuah object{}
//.then() menerima function yang akan dijalankan jika berhasil melakukan request
// .then((res)=>{}) -> res akan berisi respon dari database
//.catch() menerima function yang akan dijalankan jika request gagal
// .catch((err)=>{}) -> err akan berisi pesan error