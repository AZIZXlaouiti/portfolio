export const getCurrentPins = ()=>{
    return async dispatch =>{
        const resp = await fetch('https://github-scraper-api.herokuapp.com/api/github/?username=AZIZXlaouiti')
        const data = await resp.json()
        dispatch({type:"DISPLAY",payload:data})
    }
}