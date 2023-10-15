

const FormatPrice = ({ price ,value}) => {
    return Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format((price *value) / 100);
  };


  
  
  export default FormatPrice;