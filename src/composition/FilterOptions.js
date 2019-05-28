import React from 'react';

class FilterOptions extends React.Component {
    render() {
        const printType = this
          .props
          .printType
          .map(
            (country, i) => <option value={country.name} key={i}>{country.name}</option>
          );
          const bookType= this
            .props
            .bookType
    return (
        <>
        <select>
            <option>
                
            </option>
        </select>
        </>
    )
        }

}

export default FilterOptions