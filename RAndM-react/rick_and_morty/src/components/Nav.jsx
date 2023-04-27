import SearchBar from "./SearchBar"


export default function Nav({onSearch, login, classChangeTrue}){
    function logOut(){
        login()
    }

    return(
        <div >
            <SearchBar onSearch={onSearch} classChangeTrue={classChangeTrue}/>
        </div>
    )

}