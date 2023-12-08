const countriesData = [
    {
      Country: "KG",
      Code: "+996",
    },
    {
      Country: "UZ",
      Code: "+998",
    },
    {
      Country: "RU",
      Code: "+7",
    },
    {
      Country: "UA",
      Code: "+380",
    },
  ];
  
  function findCountryByCode(input) {
    const inputArray = input.trim().split(" ");
    
    if (inputArray.length < 2) {
      return ""; 
    }
  
    const code = inputArray[0];
    const phoneNumber = inputArray.slice(1).join(" ");
  
    const country = countriesData.find((country) => country.Code === code);
  
    if (country) {
      return country.Country;
    } else {
      return ""; 
    }
  }
  
  
  console.log(findCountryByCode("+996 774234888")); 
  console.log(findCountryByCode("+902 144 344 235")); 