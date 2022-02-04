import './AppSearch.css'
function AppSearch(prop){
    const {value, onValueChange} = prop;
    return (
        <div className="app-search">
        <input
          className="app-search-input"
          type="text"
          placeholder="Just Search"
          value={value}
          onChange={(event) => { onValueChange(event.target.value) }}
        />
      </div>
    )
}
export default AppSearch;