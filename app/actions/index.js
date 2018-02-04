export const DATA_AVAILABLE = 'DATA_AVAILABLE';

//Import the sample data
import Data from '../instructions.json';
 
export function getData(){
    return (dispatch) => {
        fetch('https://randomuser.me/api/?results=10')
        .then((response) => response.json())
        .then((json) => {
            console.log(json['results'])
            dispatch({
                type: DATA_AVAILABLE, 
                data: json['results'], 
                refreshing: false 
            });
        });
 
    };
}