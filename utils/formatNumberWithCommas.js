export default function formatNumberWithCommas(number) {
    // Convert the number to a string
    const numberString = number.toString();

    const commaParts = numberString.split(",")

    let originalText = "";

    for (let index = 0; index < commaParts.length; index++) {
      const element = commaParts[index];
      originalText = originalText + element
    }
  
    // Split the number string into integer and decimal parts (if any)
    const parts = originalText.split('.');
    
    // Format the integer part with commas
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Join the integer and decimal parts (if any) and return the formatted number
    return parts.join('.');
  }