import { useState, useEffect } from 'react';

const Code = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        async function fetchCountryData() {
          try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountries(data);
          } catch (error) {
            console.error('Error fetching country data:', error);
          }
        }
    
        fetchCountryData();
      }, []);

      
      return (
        <div>
          <select className='w-32 ml-5 countryList h-9 rounded-md'>
            {countries.map(country => (
              <option  key={country.cca2} value={country.idd.root}>
                {`${country.flag} ${country.name.common} ${country.idd.root}`}
              </option>
            ))}
          </select>
        </div>
      );
    }


export default Code