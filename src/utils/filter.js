export function separateNumbers(number) {
   if (number === undefined) {
      return "";
   }

   const str = number.toString();
   const decimalIndex = str.indexOf(".");
   let trimmedStr = str;

   if (decimalIndex !== -1) {
      trimmedStr = str.substring(0, decimalIndex).trim();
   }

   const separated = [];
   let count = 0;

   for (let i = trimmedStr.length - 1; i >= 0; i--) {
      separated.unshift(trimmedStr[i]);
      count++;

      if (count === 3 && i !== 0) {
         separated.unshift(" ");
         count = 0;
      }
   }

   return separated.join("");
}
